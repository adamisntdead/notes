const Nightmare = require('nightmare')
const cheerio = require('cheerio')
const cheerioTableparser = require('cheerio-tableparser')
const striptags = require('striptags')
const Entities = require('html-entities').AllHtmlEntities;
const table = require('markdown-table')
const entities = new Entities();
const nightmare = Nightmare({ show: false })

function go(verb) {
    return new Promise((resolve, reject) => {
        const url = `http://www.verbix.com/webverbix/go.php?D1=30&T1=${verb}&H1=130`
        nightmare
          .viewport(1280, 800)
          .goto(url)
          .wait('div.pure-u-1-2:nth-child(1)')
          //do something in the chain to go to your desired page.
          .evaluate(() => document.querySelector('body').outerHTML)
          .then(function (html) {
              const verbs = parse(html) 
              const vals = [['Aimsir Chaite', 'Aimsir Láithreach', 'Aimsir Fháistineach'], ...verbs.present.map((x, i) => [verbs.past[i], x, verbs.future[i]])]
              console.log(title(`\n## ${verb}\n`))  
              console.log(table(vals))
            //   return 
          })
          .then(resolve)
          .catch(reject)
    })
}

console.log('# Verbs')
go(process.argv[2]).then(() => go(process.argv[3])).then(() => go(process.argv[4])).then(() => nightmare.end())

function title(str) {
    return str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
  }

function parse(html) {
    const $ = cheerio.load(html)
    cheerioTableparser($)

    const present = $('div.pure-u-1-2:nth-child(1)')
        .parsetable()[1]
        .map(clean)
    const past = $('div.pure-u-1-2:nth-child(2)')        
        .parsetable()[1]
        .map(clean)
    const future = $('div.pure-u-1-2:nth-child(3)')
        .parsetable()[1]
        .map(clean)

    return { past, present, future }
}

function clean(text) {
    return entities.decode(striptags(text))
}
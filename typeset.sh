# Convert the markdown files into PDFs

# FILES="Maths/*.md"
# for f in $FILES
# do
# 	# extension="$f##*."
# 	filename="${f%.*}"
# 	echo "Converting $f to $filename.pdf"
# 	`pandoc --template notes-template.tex  "$f" -o "$filename.pdf"`
# done



find Maths -name "*.md" |  parallel 'pandoc --template notes-template.tex  "{}" -o "{.}.pdf'
# Convert the markdown files into PDFs

# FILES="Maths/*.md"
# for f in $FILES
# do
# 	# extension="$f##*."
# 	filename="${f%.*}"
# 	echo "Converting $f to $filename.pdf"
# 	`pandoc --template notes-template.tex  "$f" -o "$filename.pdf"`
# done


# If you do not have GNU parallel installed, you can comment this out and 
# Use the above
find Maths Applied\ Maths Chemistry Physics -name "*.md" | parallel 'echo "Converted {} to {.}.pdf" && mkdir -p PDFs/{//} && pandoc --template notes-template.tex  {} -o PDFs/{.}.pdf'
find Irish/Oral/Sraith\ Pictúir -name "*.md" | parallel 'echo "Converted {} to {.}.pdf" && mkdir -p PDFs/{//} && pandoc --template notes-template.tex  {} -o PDFs/{.}.pdf'
git subtree pull --prefix docs origin gh-pages
npm run export
touch docs/CNAME
echo "eja.luzdosaber.virtual.ufc.br" > docs/CNAME
git add docs/
git commit -m "Deploy to gh-pages"
git subtree push --prefix docs origin gh-pages
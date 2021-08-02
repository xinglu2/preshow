rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:xinglu2/-UI.git
git push -u origin main &&
cd ../
echo https://xinglu2.github.io/-UI/index.html#/
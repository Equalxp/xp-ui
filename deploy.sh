rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git git remote add origin git@github.com:Equalxp/xp-ui.git &&
git push -f -u origin main &&

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git git remote add origin git@github.com:Equalxp/Equalxp.github.io.git &&
git push -f -u origin main &&

cd -
echo https://equalxp.github.io/xp-ui/
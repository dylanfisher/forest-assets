In a new Rails app running Forest:

```
rm package.json
cd app/assets
git clone git@github.com:dylanfisher/forest-assets.git
mv forest-assets/package.json ../../
rm -rf javascripts
rm -rf stylesheets
rm -rf config
rm -rf forest-assets/.git
rm forest-assets/.gitignore
rm forest-assets/README.md
mv forest-assets/* ./
rmdir forest-assets
cd ../../
```

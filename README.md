In a new Rails app running Forest:

```
cd app/assets
git clone git@github.com:dylanfisher/forest-assets.git
rm -rf javascripts
rm -rf stylesheets
rm -rf forest-assets/.git
rm forest-assets/.gitignore
rm forest-assets/README.md
mv forest-assets/* ./
rmdir forest-assets
cd ../../
```

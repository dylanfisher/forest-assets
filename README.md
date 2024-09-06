In a new Rails app running Forest:

```
rm package.json
cd app/assets
git clone git@github.com:dylanfisher/forest-assets.git
mv forest-assets/package.json ../../
rm -rf javascripts
rm -rf ../javascript
rm -rf stylesheets
rm -rf config
rm -rf forest-assets/.git
rm forest-assets/.gitignore
rm forest-assets/README.md
mv forest-assets/* ./
mkdir ../javascript
mv javascripts/* ../javascript
rmdir javascripts
rmdir forest-assets
cd ../../
```

Then, edit `config/initializers/assets.rb` and replace the asset paths configuration with the following:

`Rails.application.config.assets.paths << Rails.root.join('node_modules')`

Finally, run `yarn` to install packages and make the CSS and JavaScript files available to the asset pipeline. 

⚠️ You might need to delete the contents of `app/assets/builds` are re-run `yarn` or `bin/dev` to properly link the assets.

var execSync = require('child_process').execSync;


//Add new JS here
var js = ['lib/main.js'];
//Add new CSS here
var css = ['lib/uikit/css/uikit.almost-flat.css'];


console.log('JS: ', 'browserify -t vueify -e ' + js.join(' -e ') + ' -o dist/bundle.js');
console.log('CSS: ', 'cleancss -o dist/main.min.css ' + css.join(' '));

execSync('browserify -t vueify -e ' + js.join(' -e ') + ' -o dist/bundle.js');
execSync('cleancss -o dist/main.min.css ' + css.join(' '));

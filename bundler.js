var execSync = require('child_process').execSync;


var js = ['main.js'];
var css = ['uikit/css/uikit.almost-flat.css'];

console.log('JS: ', 'browserify -t vueify -e ' + js.join(' -e ') + ' -o bundle.js');
console.log('CSS: ', 'cleancss -o main.min.css ' + css.join(' '));

execSync('browserify -t vueify -e ' + js.join(' -e ') + ' -o bundle.js');
execSync('cleancss -o main.min.css ' + css.join(' '));

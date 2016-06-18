



//Add new CSS here
var css = [
  'lib/uikit/css/uikit.almost-flat.css'
];



// * * * * * * * * * * * *
// DON'T TOUCH BEYOND HERE
// * * * * * * * * * * * *
var execSync = require('child_process').execSync;
//Don't touch, if you want to add a JS, move it to src folder, or require it
var js = ['lib/entry.js'];

console.log('JS: ', 'browserify -t vueify -e ' + js.join(' -e ') + ' -o dist/bundle.js');
console.log('CSS: ', 'cleancss -o dist/main.min.css ' + css.join(' '));

execSync('browserify -t vueify -e ' + js.join(' -e ') + ' -o dist/bundle.js');
execSync('cleancss -o dist/main.min.css ' + css.join(' '));

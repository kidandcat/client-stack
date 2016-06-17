var Vue = require('vue');
var bulk = require('bulk-require');
var sections = bulk('../src', [ '*.js' ]);
console.log(sections);
var VueRouter = require('./vue-router.min.js');
Vue.use(VueRouter);
// * * * * * * * * * * * *
// DON'T TOUCH BEFORE HERE
// * * * * * * * * * * * *


// COMPONENTS
Vue.component('leftbar', leftbar = require('../components/left_bar.vue'));
Vue.component('main', main = require('../components/body.vue'));
Vue.component('topbar', topbar = require('../components/top_bar.vue'));
Vue.component('app', app = require('../components/app.vue'));







// * * * * * * * * * * * *
// DON'T TOUCH BEYOND HERE
// * * * * * * * * * * * *

router = new VueRouter();
router.map(processJsonRoutes(require('../config/route.json')));
router.start(app, 'app');


function processJsonRoutes(json){
  console.log('json:', json)
  var keys = Object.keys(json);

  keys.forEach(function(e){
    json[e].component = eval("" + json[e].component + "");
  });
  console.log('json:', json)
  return json;
}

var Vue = require('vue');
var VueRouter = require('./vue-router.min.js');
Vue.use(VueRouter);
// * * * * * * * * * * * *
// DON'T TOUCH BEFORE HERE
// * * * * * * * * * * * *



// COMPONENTS
Vue.component('leftbar', leftbar = require('../components/left_bar.vue'));
Vue.component('main', main = require('../components/body.vue'));
Vue.component('topbar', topbar = require('../components/top_bar.vue'));








// * * * * * * * * * * * *
// DON'T TOUCH BEYOND HERE
// * * * * * * * * * * * *
Vue.component('app', app = require('../lib/app.vue'));

router = new VueRouter();
router.map(processJsonRoutes(require('../config/route.json')));
router.start(app, 'app');
require('../src/require.js');


function processJsonRoutes(json){
  var keys = Object.keys(json);

  keys.forEach(function(e){
    try{
      json[e].component = eval("" + json[e].component + "");
    }catch(e){}
  });
  return json;
}

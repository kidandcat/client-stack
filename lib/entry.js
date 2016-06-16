var Vue = require('vue');



// COMPONENTS
//left-bar
//var left_bar = require('../components/left_bar.vue');
Vue.component('leftbar', require('../components/left_bar.vue'));
//top-bar
//var top_bar = require('../components/top_bar.vue');
Vue.component('topbar', require('../components/top_bar.vue'));



//Main component, app
var appp = require('../components/app.vue');
App = new Vue({
    el: 'body',
    components: {
        app: appp
    }
})

App.components = App.$children[0].$children;


//Start custom logic
require('./main.js');

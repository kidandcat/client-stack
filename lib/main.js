var Vue = require('vue')



// COMPONENTS
//left-bar
var left_bar = require('../components/left-bar.vue');
Vue.component('left-bar', left_bar);
//top-bar
var top_bar = require('../components/top-bar.vue');
Vue.component('top-bar', top_bar);



//Main component, app
var app = require('../components/app.vue');
new Vue({
    el: 'body',
    components: {
        app: app
    }
})

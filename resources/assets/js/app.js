
window.Vue = require('vue');

import lodash from 'lodash';    
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.component('categories', require('./components/Categories.vue'));
Vue.component('timeline', require('./components/Timeline.vue'));
Vue.component('timeline-date', require('./components/TimelineDate.vue'));


const router = new VueRouter({
    routes: [
        {
            path: 'web-development',
            name: 'web-development',
            component: require('./routes/WebDevelopment.vue')
        },
        {
            path: 'photography',
            name: 'photography',
            component: require('./routes/Photography.vue')
        },
        {
            path: 'video',
            name: 'video',
            component: require('./routes/video.vue')
        },
        {
            path: 'design',
            name: 'design',
            component: require('./routes/Design.vue')
        },
        {
            path: 'animation',
            name: 'animation',
            component: require('./routes/Animation.vue')
        },
    ]
})

import categories from './state/categories.js';
import items from './state/items.js';

const store = new Vuex.Store({
    state: {
        categories: categories,
        items: items
    },

    mutations: {
        toggleCategory (state, index) {
            state.categories[index].visible = !state.categories[index].visible;
        },
        setCategory (state, index) {
            app.$lodash.forEach(state.categories, function(category) {
                category.visible = false;
            });
            state.categories[index].visible = true;
        },
    },

    actions: {
        toggleCategory ({ commit, state }, category) {
            let index = app.$lodash.findIndex(state.categories, function(item) {
                return category.name == item.name;
            });

            let hue = 0;

            if (!state.categories[index].visible) {
               hue = category.hue;
            }

            if (index > -1) {
                //commit('toggleCategory', index);
                commit('setCategory', index);
            }

            //} else if (!app.$lodash.filter(state.categories, ['visible', true]).length) {
                //hue = 0;
            //}

            setTimeout(function() {
                app.setThemeColor(hue);
            }, 250);

        },
    }

});

const app = new Vue({
    el: '#app',
    store,
    router,

    methods: {
    
        setThemeColor: function(hue) {
            document.documentElement.style.setProperty('--theme-light', 'hsla(' + hue + ', 100%, 95%, 0.75)');
            document.documentElement.style.setProperty('--theme-dark', 'hsla(' + hue + ', 100%, 10%, 0.75)');
            document.documentElement.style.setProperty('--theme-highlight', 'hsla(' + hue + ', 40%, 50%, 0.75)');
            document.documentElement.style.setProperty('--theme-soft', 'hsla(' + hue + ', 40%, 50%, 0.1)');
        }
    }
});

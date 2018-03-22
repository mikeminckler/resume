
window.Vue = require('vue');

import lodash from 'lodash';    
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

import Vuex from 'vuex';
Vue.use(Vuex);

Vue.component('categories', require('./components/Categories.vue'));
Vue.component('timeline', require('./components/Timeline.vue'));
Vue.component('timeline-date', require('./components/TimelineDate.vue'));

import categories from './state/categories.js';

const store = new Vuex.Store({
    state: {
        categories: categories
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

            if (!state.categories[index].visible) {
                document.documentElement.style.setProperty('--theme-light', 'hsla(' + category.hue + ', 100%, 95%, 0.75)');
                document.documentElement.style.setProperty('--theme-dark', 'hsla(' + category.hue + ', 100%, 10%, 0.75)');
                document.documentElement.style.setProperty('--theme-highlight', 'hsla(' + category.hue + ', 40%, 50%, 0.75)');
            }

            if (index > -1) {
                //commit('toggleCategory', index);
                commit('setCategory', index);
            }

            if (!app.$lodash.filter(state.categories, ['visible', true]).length) {
                document.documentElement.style.setProperty('--theme-light', 'hsla(0, 0%, 100%, 1)');
                document.documentElement.style.setProperty('--theme-dark', 'hsla(0, 0%, 0%, 1)');
                document.documentElement.style.setProperty('--theme-highlight', 'hsla(0, 0%, 50%, 1)');
            }

        },
    }

});

const app = new Vue({
    el: '#app',
    store,
});

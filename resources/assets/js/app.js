
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
    },

    actions: {
        toggleCategory ({ commit, state }, category) {
            let index = app.$lodash.findIndex(state.categories, function(item) {
                return category.name == item.name;
            });
            if (index > -1) {
                commit('toggleCategory', index);
            }
        },
    }

});

const app = new Vue({
    el: '#app',
    store,
});


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
            path: 'home',
            name: 'home',
            component: require('./routes/Home.vue')
        },
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
        items: items,
        overlay: true,
        showCategories: true,
    },

    mutations: {
        setCategory (state, category) {

            lodash.forEach(state.categories, function(cat) {
                cat.visible = false;
            });

            category.visible = true;

            /*
            state.categories = lodash.sortBy(state.categories, function(cat) {
                return cat == category ? 0 : cat.originalIndex;
            });
            */

        },

        setOverlay (state, bool) {
            state.overlay = bool;
        },

        setCategoriesMenu (state, bool) {
            state.showCategories = bool;
        }
    },

    actions: {
        setCategory ({ commit, state }, category) {

            category = lodash.find(state.categories, function(cat) {
                return cat.route == category.route;
            });

            commit('setCategory', category);
            router.push({ name: category.route});

            commit('setOverlay', true);

            setTimeout(function() {
                commit('setOverlay', false);
            }, 250);


            setTimeout(function() {
                app.setThemeColor(category.hue);
                app.resize();
            }, 100);

        },

        showCategories({ commit, state }) {
            commit('setCategoriesMenu', true);
        },
        
        hideCategories({ commit, state }) {
            commit('setCategoriesMenu', false);
        },

        toggleCategories({ commit, state }) {
            commit('setCategoriesMenu', !state.showCategories);
        }
    }

});

const app = new Vue({
    el: '#app',
    store,
    router,

    mounted() {
        //router.push({ name: 'home' });
        let category = this.$lodash.find(categories, function(category) {
            return category.name == 'home';
        });
        this.$store.dispatch('setCategory', category);
        this.$store.dispatch('showCategories');

        window.addEventListener('resize', lodash.debounce(function() {
            app.resize();
        }, 100));

        this.resize();
    },

    methods: {
    
        setThemeColor: function(hue) {
            document.documentElement.style.setProperty('--theme-light', 'hsla(' + hue + ', 100%, 95%, 0.75)');
            document.documentElement.style.setProperty('--theme-dark', 'hsla(' + hue + ', 100%, 10%, 0.75)');
            document.documentElement.style.setProperty('--theme-highlight', 'hsla(' + hue + ', 40%, 50%, 0.75)');
            document.documentElement.style.setProperty('--theme-soft', 'hsla(' + hue + ', 40%, 50%, 0.1)');
        },

        toggleCategories: function(category) {
            this.$store.dispatch('toggleCategories');
        },

        resize: function() {
            if (window.innerWidth < 600) {
                this.$store.dispatch('hideCategories');
            } else {
                this.$store.dispatch('showCategories');
            }
        }
        
    }

});

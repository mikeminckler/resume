
window.Vue = require('vue');

import lodash from 'lodash';    
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const axios = require('axios');
Vue.prototype.$http = axios;

Vue.component('categories', require('./components/Categories.vue'));
Vue.component('grid-list', require('./components/GridList.vue'));
//Vue.component('google-timeline', require('./components/GoogleTimeline.vue'));
Vue.component('youtube-video', require('./components/YoutubeVideo.vue'));
//Vue.component('timeline', require('./components/Timeline.vue'));
//Vue.component('timeline-date', require('./components/TimelineDate.vue'));


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('./routes/Home.vue')
        },
        {
            path: '/web-development',
            name: 'web-development',
            component: require('./routes/WebDevelopment.vue')
        },
        {
            path: '/photography',
            name: 'photography',
            component: require('./routes/Photography.vue')
        },
        {
            path: '/video',
            name: 'video',
            component: require('./routes/video.vue')
        },
        {
            path: '/design',
            name: 'design',
            component: require('./routes/Design.vue')
        },
        {
            path: '/animation',
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
        activeCategory: {},
        googleChartsLoaded: false,
        youtubeReady: false,
        screen: {
            width: window.innerWidth,
            height: window.innerHeight
        },
    },

    mutations: {
        setCategory (state, category) {

            lodash.forEach(state.categories, function(cat) {
                cat.visible = false;
            });

            category.visible = true;

            state.activeCategory = category;

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
        },

        setGoogleChartsLoaded (state) {
            state.googleChartsLoaded = true;
        },

        setYoutubeReady (state, ready) {
            state.youtubeReady = ready;
        },

        setScreenSize (state, screen) {
            state.screen = screen;
        },
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
                app.setThemeColor(category.color);
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
        },

        setGoogleChartsLoaded({ commit, state }) {
            commit('setGoogleChartsLoaded');
        },

		setYoutubeReady({ commit, state }, ready) {
            commit('setYoutubeReady', ready);
        },

        setScreenSize({ commit, state }, screen) {
            commit('setScreenSize', screen);
        },

    }

});

const app = new Vue({
    el: '#app',
    store,
    router,

    mounted() {

        this.setCategory();
        this.$store.dispatch('showCategories');

        window.addEventListener('resize', this.resize);
            
        this.resize();

		var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = function() {
            app.$store.dispatch('setYoutubeReady', true);
        }

    },

    computed: {

        category() {
            return this.$store.state.activeCategory;
        }

    },

    methods: {
    
        setThemeColor: function(color) {
            document.documentElement.style.setProperty('--theme-color', 'hsla(' + color + ')');
        },

        toggleCategories: function(category) {
            this.$store.dispatch('toggleCategories');
        },

        resize: _.debounce(
            () => {

                let screen = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
                app.$store.dispatch('setScreenSize', screen);

                if (window.innerWidth < 600) {
                    app.$store.dispatch('hideCategories');
                } else {
                    app.$store.dispatch('showCategories');
                }

            }, 100

        ),

        setCategory: function() {
        
            let category = this.$lodash.find(categories, function(category) {
                return category.route == router.currentRoute.name;
            });
            
            this.$store.dispatch('setCategory', category);

        }
        
    }

});

router.afterEach(function (transition) {
    app.setCategory();
});


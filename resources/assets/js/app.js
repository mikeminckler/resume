
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
Vue.component('youtube-video', require('./components/YoutubeVideo.vue'));

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
            component: require('./routes/Video.vue')
        },
        {
            path: '/design',
            name: 'design',
            component: require('./routes/Design.vue')
        },
    ]
})

import categories from './state/categories.js';
import items from './state/items.js';
import photography from './state/photography.js';
import videos from './state/videos.js';
import websites from './state/websites.js';
import designs from './state/designs.js';

const store = new Vuex.Store({
    state: {
        categories: categories,
        items: items,
        websites: websites,
        overlay: true,
        showCategories: false,
        activeCategory: {},
        googleChartsLoaded: false,
        youtubeReady: false,
        screen: {
            width: window.innerWidth,
            height: window.innerHeight
        },
        videos: videos,
        photographyImages: photography,
        designImages: designs,
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

            if (router.currentRoute.name != category.route) {
                router.push({ name: category.route});
            }

            commit('setOverlay', true);

            let index = lodash.findIndex(state.categories, function(cat) {
                return cat.route == category.route;
            });

            //document.getElementsByClassName("circle")[0].style.transform = 'rotate(-' + (72 * index) + 'deg)';

            (function smoothscroll(){
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 125) {
                    window.requestAnimationFrame(smoothscroll);
                    window.scrollTo (125,currentScroll - (currentScroll/5));
                }
            })();

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
        //this.$store.dispatch('showCategories');

        window.addEventListener('resize', this.resize);
            
        this.resize();

		var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = function() {
            app.$store.dispatch('setYoutubeReady', true);
        }

            setTimeout(() => {
                this.loadImages();
            }, 2000);

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

        goHome: function() {
            let category = this.$lodash.find(categories, function(category) {
                return category.route == 'home';
            });
            this.$store.dispatch('setCategory', category);
        },

        setCategory: function() {
        
            let category = this.$lodash.find(categories, function(category) {
                return category.route == router.currentRoute.name;
            });
            
            this.$store.dispatch('setCategory', category);

        },

        loadImages: function() {

            if (router.currentRoute.name != 'photography') {

                this.$lodash.forEach(this.$store.state.photographyImages, function(src) {
                    var image = new Image();
                    image.src = '/images/photography/thumbs/' + src;
                });

                this.$lodash.forEach(this.$store.state.photographyImages, function(src) {
                    var image = new Image();
                    image.src = '/images/photography/' + src;
                });

            }

            if (router.currentRoute.name != 'design') {

                this.$lodash.forEach(this.$store.state.designImages, function(src) {
                    var image = new Image();
                    image.src = '/images/design/thumbs/' + src;
                });

                this.$lodash.forEach(this.$store.state.designImages, function(src) {
                    var image = new Image();
                    image.src = '/images/design/' + src;
                });

            }
        
        }
        
    }

});

router.afterEach(function (transition) {
    app.setCategory();
});


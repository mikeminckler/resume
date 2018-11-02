
window.Vue = require('vue');

import lodash from 'lodash';    
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const axios = require('axios');
Vue.prototype.$http = axios;

Vue.component('grid-list', require('./components/GridList.vue'));
Vue.component('youtube-video', require('./components/YoutubeVideo.vue'));

Vue.component('shapes', require('./components/Shapes.vue'));

const store = new Vuex.Store({
    state: {
        blue: {
            width: '0px',
            height: '0px',
            x: '0px',
            y: '0px',
            rotate: '0deg',
            originX: '50%',
            originY: '50%',
            zIndex: '0',
        },
        orange: {
            width: '0px',
            height: '0px',
            x: '0px',
            y: '0px',
            rotate: '0deg',
            originX: '50%',
            originY: '50%',
            zIndex: '0',
        },
        yellow: {
            width: '0px',
            height: '0px',
            x: '0px',
            y: '0px',
            rotate: '0deg',
            originX: '50%',
            originY: '50%',
            zIndex: '0',
        },
    },

    mutations: {
        setBlue ( state, properties ) {
            lodash.assign(state.blue, properties);
        },
        setOrange ( state, properties ) {
            lodash.assign(state.orange, properties);
        },
        setYellow ( state, properties ) {
            lodash.assign(state.yellow, properties);
        },
    },

    actions: {
        setBlue ({ commit, state }, properties) {
            commit('setBlue', properties);
        },
        setOrange ({ commit, state }, properties) {
            commit('setOrange', properties);
        },
        setYellow ({ commit, state }, properties) {
            commit('setYellow', properties);
        },
    }

});

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/cv',
            name: 'home',
            component: require('./routes/cv/Home.vue')
        },
    ]
})

const app = new Vue({
    el: '#app',
    store,
    router,

    watch: {
        blue: {
            handler: function () {
                this.setBlue();
            },
            deep: true
        },
        orange: {
            handler: function () {
                this.setOrange();
            },
            deep: true
        },
        yellow: {
            handler: function () {
                this.setYellow();
            },
            deep: true
        },
    },

    mounted() {

    },

    computed: {
        blue: function() {
            return this.$store.state.blue;
        },
        orange: function() {
            return this.$store.state.orange;
        },
        yellow: function() {
            return this.$store.state.yellow;
        },
    },

    methods: {
    
        setBlue: function() {
            document.documentElement.style.setProperty('--blue-width', this.blue.width);
            document.documentElement.style.setProperty('--blue-height', this.blue.height);
            document.documentElement.style.setProperty('--blue-x', this.blue.x);
            document.documentElement.style.setProperty('--blue-y', this.blue.y);
            document.documentElement.style.setProperty('--blue-rotate', this.blue.rotate);
            document.documentElement.style.setProperty('--blue-origin-x', this.blue.originX);
            document.documentElement.style.setProperty('--blue-origin-y', this.blue.originY);
            document.documentElement.style.setProperty('--blue-z-index', this.blue.zIndex);
        },
        setOrange: function() {
            document.documentElement.style.setProperty('--orange-width', this.orange.width);
            document.documentElement.style.setProperty('--orange-height', this.orange.height);
            document.documentElement.style.setProperty('--orange-x', this.orange.x);
            document.documentElement.style.setProperty('--orange-y', this.orange.y);
            document.documentElement.style.setProperty('--orange-rotate', this.orange.rotate);
            document.documentElement.style.setProperty('--orange-origin-x', this.orange.originX);
            document.documentElement.style.setProperty('--orange-origin-y', this.orange.originY);
            document.documentElement.style.setProperty('--orange-z-index', this.orange.zIndex);
        },
        setYellow: function() {
            document.documentElement.style.setProperty('--yellow-width', this.yellow.width);
            document.documentElement.style.setProperty('--yellow-height', this.yellow.height);
            document.documentElement.style.setProperty('--yellow-x', this.yellow.x);
            document.documentElement.style.setProperty('--yellow-y', this.yellow.y);
            document.documentElement.style.setProperty('--yellow-rotate', this.yellow.rotate);
            document.documentElement.style.setProperty('--yellow-origin-x', this.yellow.originX);
            document.documentElement.style.setProperty('--yellow-origin-y', this.yellow.originY);
            document.documentElement.style.setProperty('--yellow-z-index', this.yellow.zIndex);
        },

    }

});

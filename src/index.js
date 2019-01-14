import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'

import moment from 'moment'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// import iView from 'iview';
// import 'iview/dist/styles/iview.css'

import html2canvas from 'html2canvas'


import axios from 'axios'

Vue.use(VueRouter)
// Vue.use(iView)

import store from './store/index.js'

import TestSlot from './components/TestSlot.vue'
import TestVuex from './components/TestVuex.vue'
import TextLayui from './components/TestLayui.vue'

const router = new VueRouter({
    routes: [
        { path: '/testSlot', component: TestSlot },
        { path: '/testVuex', component: TestVuex },
        { path: '/testLayui', component: TextLayui}
    ]
})
new Vue({
    el: '#app',
    store,
    components: {
        App
    },
    router,
    methods: {
        moment() {
            return moment()
        }
    }
})
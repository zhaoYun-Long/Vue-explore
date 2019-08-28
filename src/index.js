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

import './components/setElementStyle.css'

import TestSlot from './components/TestSlot.vue'
import TestVuex from './components/TestVuex.vue'
import TextLayui from './components/TestLayui.vue'
import TestRouter from './components/testRouter.vue'
import ch1 from './components/ch1.vue'
// console.log(Foo)

const router = new VueRouter({
    routes: [
        { path: '/testSlot', component: TestSlot },
        { path: '/testVuex', component: TestVuex },
        { path: '/testLayui', component: TextLayui},
        { path: '/testRouter/:param', component: TestRouter, children: [
            { path: 'ch', component:  ch1 }
        ]}
    ]
})
new Vue({
    el: '#app',
    store,
    data: {
        testData: {}
    },
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
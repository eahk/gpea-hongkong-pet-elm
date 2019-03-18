import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
//
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
import Transitions from 'vue2-transitions'
Vue.use(Transitions)
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo, {
    container: 'body',
    duration: 400,
    easing: 'easeOutQuint',
});
//
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
//
import 'swiper/dist/css/swiper.css'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import M from 'materialize-css'
//
Vue.config.productionTip = false
    //
    //
new Vue({
    router,
    store,
    created() {
        NProgress.start()
    },
    mounted() {
        M.AutoInit()
        this.$nextTick(() => {
            // The whole view is rendered, so I can safely access or query the DOM
            NProgress.done()
        })
    },
    render: h => h(App)
}).$mount('#app')
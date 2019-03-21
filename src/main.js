import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// vue plugins
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
// plugins
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css'
import "sanitize.css";
import "animate.css";
import 'swiper/dist/css/swiper.css'
// materialize
import 'materialize-css/sass/materialize.scss'
import M from 'materialize-css'
// main css
import '@/styles/scss/main.scss'
//
Vue.config.productionTip = false
new Vue({
    router,
    store,
    created() {
        NProgress.start()
    },
    mounted() {
        M.AutoInit()
        this.$nextTick(() => {
            NProgress.done()
        })
    },
    render: h => h(App)
}).$mount('#app')
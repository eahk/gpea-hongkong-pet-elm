import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { mixin as clickaway } from 'vue-clickaway'
import Transitions from "vue2-transitions";
Vue.use(Transitions);
import ScrollReveal from "scrollreveal";
window.sr = ScrollReveal({
  reset: false,
  useDelay: "onload",
  duration: 800,
  easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  interval: 200
});
//
var numeral = require("numeral");

Vue.filter("formatNumber", function(value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

//
import { ProgressPlugin } from "bootstrap-vue";
Vue.use(ProgressPlugin);
//
import "normalize.css/normalize.css";
import "nprogress/nprogress.css";
import "animate.css/animate.min.css";
// Bootstrap
import "@/styles/scss/custom.scss";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Main
import "@/styles/scss/main.scss";
//
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

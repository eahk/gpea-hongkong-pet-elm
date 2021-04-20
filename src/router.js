import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
// import Legco from '@/views/Legco.vue'
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Home,
      props: { theme: "eco" }
    },
    {
      path: "/ecology",
      name: "ecology",
      component: Home,
      props: { theme: "eco" }
    }
  ]
});

export default router;

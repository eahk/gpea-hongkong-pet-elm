import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
// import Legco from '@/views/Legco.vue'
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      component: Home,
      props: { theme: "eco" }
    },
    {
      path: "/mermaid",
      name: "mermaid",
      component: Home,
      props: { theme: "eco" }
    },
    {
      path: "/ecology",
      name: "ecology",
      component: Home,
      props: { theme: "eco" }
    }
    /*
    {
      path: '/legcotest',
      name: 'legcotest',
      component: Legco,
    },
    */
  ]
});

export default router;

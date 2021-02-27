import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

/*Imported compnents */
import Home from "./components/Home";
import About from "./components/About";
import Career from "./components/Career";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Career", component: Career },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

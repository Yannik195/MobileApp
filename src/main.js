import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import Chat from "./Chat.vue"

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: "/chat", component: Chat},
  { path: "/", component: App }
];

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,  
  render: h => h(App)
}).$mount('#app')

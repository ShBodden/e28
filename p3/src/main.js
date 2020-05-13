
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import EstablishmentsPage from "./components/pages/EstablishmentsPage.vue";
import HomePage from "./components/pages/HomePage.vue";
import EstablishmentPage from "@/components/pages/EstablishmentPage.vue";
import EstablishmentCreatePage from '@/components/pages/EstablishmentCreatePage.vue';
import store from '@/common/store';
import Vuelidate from 'vuelidate';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/establishments', component: EstablishmentsPage, name: 'establishments' },
  { path: '/establishment/create', component: EstablishmentCreatePage, name: 'add a review', props: true},
  { path: '/establishment/:slug', component: EstablishmentPage, name: 'establishment', props: true}

];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')

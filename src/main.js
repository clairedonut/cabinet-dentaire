import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue';
import Footer from './Footer.vue';
import Banner from './Banner.vue';
import Apropos from './Apropos.vue';
import Equipe from './Equipe.vue';
import Partners from './Partners.vue';
import Planning from './Planning.vue';
import Acces from './Acces.vue';



import VueRouter from 'vue-router'  // Add this
import router from './router'       // Add this

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-banner', Banner);
Vue.component('app-apropos', Apropos);
Vue.component('app-equipe', Equipe);
Vue.component('app-partners', Partners);
Vue.component('app-planning', Planning);
Vue.component('app-acces', Acces);


// Vue.component('app-contact', Contact);

Vue.use(VueRouter)                  // Add this

new Vue({
  el: '#app',
  router,                           // Add this
  render: h => h(App)
})

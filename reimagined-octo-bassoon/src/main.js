import Vue from "vue";
//import App from './App.vue'

Vue.config.productionTip = false;

Vue.component("users-grid", require("./components/UsersGrid.vue").default);

window.Vue = Vue;

//new Vue({
//  render: h => h(App),
//}).$mount('#app')

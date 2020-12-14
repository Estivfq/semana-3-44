import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./store"; //esto lo añadí por que así aparece en la guia de imaster pero acá me da error
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const base = axios.create({
    baseURL: "http://localhost:3000"
});

Vue.prototype.$http = base;

Vue.config.productionTip = false;

new Vue({
    router,
    //store,
    render: h => h(App)
}).$mount("#app");

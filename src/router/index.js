import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
  },
    {
        path: "/",
        name: "login",
        component: () =>
            //import("../views/login.vue") //otro error en la guia
            import("../components/auth/login.vue")
  }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") == null) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;

//const controller = require('./controller/controller.js');

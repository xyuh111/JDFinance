import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Class from "../class/index.vue"
import Cart from "../cart/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/class",
            name: "class",
            component: Class,
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart,
        },
    ],
})

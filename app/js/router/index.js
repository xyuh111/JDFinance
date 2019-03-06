import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Class from "../class/index.vue"
import Cart from "../cart/index.vue"
import Shop from "../shopdetailed/index.vue"

// 确认订单
import Orderform from "../components/orderform/index.vue"
// 订单列表
import Orderlist from "../components/orderlist/index.vue"
// 订单详情
import Orderdetails from "../components/orderdetails/index.vue"
// 评论列表
import Comment from "../components/comment/index.vue"

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
        {
            path: "/shop",
            name: "Shop",
            component: Shop,
        },
        {
            path: "/orderform",
            name: "Orderform",
            component: Orderform,
        },
        {
            path: "/orderlist",
            name: "Orderlist",
            component: Orderlist,
        },
        {
            path: "/orderdetails",
            name: "Orderdetails",
            component: Orderdetails,
        },
        {
            path: "/comment",
            name: "Comment",
            component: Comment,
        },
    ],
})

import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Class from "../class/index.vue"
import Cart from "../cart/index.vue"

// 用户====================================================
import Users from "../users/index.vue"
// 绑定手机号页面
import Login from "../users/login.vue"
// 修改个人信息
import Modify from "../users/modify.vue"
// 积分列表
import Integral from "../users/integral.vue"
// http://web.web3n.com/juan.png
// 优惠卷列表
import Coupons from "../users/coupons.vue"

// 商品详情==========================================================
import Shop from "../shopdetailed/index.vue"
// 商品列表
import Shoplist from "../shoplist/index.vue"
// 店家首页
import Shophome from "../shophome/index.vue"


// 确认订单========================================================
import Orderform from "../components/orderform/index.vue"
// 订单列表
import Orderlist from "../components/orderlist/index.vue"
// 订单详情
import Orderdetails from "../components/orderdetails/index.vue"
// 评论列表
import Comment from "../components/comment/index.vue"
// 添加评论
import Commentadd from "../components/comment/add/index.vue"

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
            path: "/users",
            name: "users",
            component: Users,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/integral",
            name: "integral",
            component: Integral,
        },
        {
            path: "/modify",
            name: "modify",
            component: Modify,
        },
        {
            path: "/coupons",
            name: "coupons",
            component: Coupons,
        },
        {
            path: "/shop",
            name: "shop",
            component: Shop,
        },
        {
            path: "/shoplist",
            name: "shoplist",
            component: Shoplist,
        },
        {
            path: "/shophome",
            name: "shophome",
            component: Shophome,
        },
        {
            path: "/orderform",
            name: "orderform",
            component: Orderform,
        },
        {
            path: "/orderlist",
            name: "orderlist",
            component: Orderlist,
        },
        {
            path: "/orderdetails",
            name: "orderdetails",
            component: Orderdetails,
        },
        {
            path: "/comment",
            name: "comment",
            component: Comment,
        },
        {
            path: "/commentadd",
            name: "commentadd",
            component: Commentadd,
        },
    ],
})

<template lang="html">
    <div>
        <!-- app下载 -->
        <Heador />
        <!-- 轮播图 -->
        <Slider />
        <!-- 新手特权 -->
        <Novice />
        <!-- 极速借贷 -->
        <Borrow/>
        <!-- 理财精选 -->
        <Money/>
        <!-- 新品推荐 -->
        <Product/>
        <!-- 生活服务 -->
        <Life/>
        <!-- 公司信息 -->
        <Footer/>
        <!-- 底部导航条 -->
        <Navbar/>

    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
export default {
    name: "Home",
    components: {
        Heador,
        Slider,
        Novice,
        Borrow,
        Money,
        Product,
        Life,
        Footer,
        Navbar,
    },
    data() {
        return {
            name: "xieyuhui",
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

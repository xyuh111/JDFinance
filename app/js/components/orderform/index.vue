<template lang="html">
    <div>
        <!-- header -->
        <Heador/>
        <!-- 商品 -->
        <ShopList/>
        <!-- 优惠卷 实付款 -->
        <Coupons/>
        <!-- 底部导航栏 -->
        <NavTab/>
    </div>
</template>

<script>
import Heador from "./header.vue"
import ShopList from "./shoplist.vue"
import NavTab from "./navtab.vue"
import Coupons from "./coupons.vue"
export default {
    name: "Home",
    components: {
        Heador,
        ShopList,
        NavTab,
        Coupons,
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

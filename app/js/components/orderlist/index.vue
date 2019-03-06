<template lang="html">
    <div>
        <!-- header -->
        <Heador/>
        <!-- 商品 -->
        <ShopList/>
        <!-- 商品 -->
        <ShopList/>
        <!-- 商品 -->
        <ShopList/>
        <!-- 优惠卷 实付款 -->
    </div>
</template>

<script>
import Heador from "./header.vue"
import ShopList from "./shoplist.vue"
export default {
    name: "Home",
    components: {
        Heador,
        ShopList,
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

<template lang="html">
    <div>
        <!-- header -->
        <Headersw />
        <!--本周特惠-->
        <SecConten/>
        <!--好货臻选-->
        <GoodGoods/>
        <ShopList/>
    </div>
</template>

<script>
import Headersw from "./header.vue"
import SecConten from "./sec_conten.vue"
import GoodGoods from "./goodgoods.vue"
import ShopList from "./shoplist.vue"
export default {
    name: "Home",
    components: {
        Headersw,
        SecConten,
        GoodGoods,
        ShopList,
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

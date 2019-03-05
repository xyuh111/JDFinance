<template lang="html">
    <div>
        <!-- header -->
        <Heador />
        <!-- 轮播图 -->
        <Slider />
        <!-- 抢购秒杀 -->
        <dayMorena/>
        <!-- 1张动态图 加 田字格的四张图片 -->
        <imgTab/>
        <!-- 每日必逛 -->
        <Must/>
        <!-- 酷玩潮流 -->
        <Coldplay/>
        <!-- 生活风尚 -->
        <Habits/>
        <!-- 推荐榜单 -->
        <Recommended/>
        <!-- 特色专享 -->
        <Features/>
        <!-- 省钱秘籍 -->
        <saveMoney/>
        <!-- 生活部落 -->
        <Live/>
        <!-- 好店优选 -->
        <goodShop/>
        <!-- 猜你喜欢 -->
        <Like/>
        <!-- 底部导航栏 -->
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./hslider.vue"
import dayMorena from "./day_morena.vue"
import imgTab from "./img_tab.vue"
import Must from "./must.vue"
import Coldplay from "./coldplay.vue"
import Habits from "./habits.vue"
import Recommended from "./recommended.vue"
import Features from "./features.vue"
import saveMoney from "./save_money.vue"
import Live from "./live.vue"
import goodShop from "./good_shop.vue"
import Like from "./like.vue"
export default {
    name: "Home",
    components: {
        Heador,
        Slider,
        dayMorena,
        imgTab,
        Must,
        Coldplay,
        Habits,
        Recommended,
        Features,
        saveMoney,
        Live,
        goodShop,
        Like,
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

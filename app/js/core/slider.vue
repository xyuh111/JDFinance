<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{ name:item.href }">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <!-- 指示器固定用法  设为可配置-->
            <div v-if="options.pagination" slot="pagination" class="swiper-pagination" />
        </swiper>
    </section>
</template>Z

<script>
import {
    swiper,
    swiperSlide,
} from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    // 自滚动
                    autoplay: true,
                    // 循环
                    loop: true,
                    // 是否设置 。。。指示器
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    // 点击的事件
                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
    data() {
        return {}
    },
}
</script>

<style lang="css">
@import "~swiper/dist/css/swiper.css";

</style>

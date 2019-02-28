<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{ name:item.href }">
                    <img :src="item.src" alt="">
                </router-link>
                <div v-if="options.pagination" class="swiper-pagination" />
            </swiper-slide>
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
        options: {
            type: Object,
            default() {
                return {
                    // 自滚动
                    autoplay: true,
                    // 循环
                    loop: true,
                    // 是否设置指示器
                    pagination: {
                        el: ".swiper-pagination",
                    },
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

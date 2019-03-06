<template lang="html">
    <article :class="$style.article">
        <h4>大牌臻选</h4>
        <Slider :items="items" :cname="$style.slider" />
        <h4>附近品牌</h4>
        <swiper :options="options" :class="$style.containew">
            <swiper-slide v-for="item in enters" :key="item.img">
                <router-link :to="{ name:item.href }">
                    <div :class="$style.ul">
                        <img :src="item.img" alt="item.title">
                        <p>{{ item.title }}</p>
                    </div>
                </router-link>
            </swiper-slide>
            <!-- 指示器固定用法  设为可配置-->
            <div v-if="options.pagination" slot="pagination" class="swiper-pagination" />
        </swiper>
    </article>
</template>
<script>
import {
    swiper,
    swiperSlide,
} from "vue-awesome-swiper"
import Slider from "../components/core/slider.vue"
export default {
    components: {
        Slider,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            options: {
                slidesPerView: 4.9,
                spaceBetween: 30,
                freeMode: true,
            },
            items: [{
                        href: "home",
                        src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/17122/13/8273/37518/5c73d5dfEab419177/986b987ab7c22514.jpg?width=750&height=320",
                    },
                    {
                        href: "home",
                        src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/21437/13/8246/46685/5c73d555Ebbda75ab/1a476fb2010b79f8.jpg?width=750&height=320",
                    },
                    {
                        href: "home",
                        src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/21437/13/8246/46685/5c73d555Ebbda75ab/1a476fb2010b79f8.jpg?width=750&height=320",
            }],
            enters: [{
                         title: "优惠卷",
                         img: "https://image1.suning.cn/uimg/cms/img/155074220498300857.png?format=_is_120w_120h.webp",
                         href: "home",
                     },
                     {
                         title: "领红包",
                         img: "https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                         href: "home",
                     },
                     {
                         title: "抢钢镚",
                         img: "https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                         href: "home",
                     },
                     {
                         title: "白条提额",
                         img: "https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                         href: "home",
                     },
                     {
                         title: "工资理财",
                         img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90",
                         href: "home",
                     },
                     {
                         title: "优惠卷",
                         img: "https://image1.suning.cn/uimg/cms/img/154710176930796178.png?format=_is_120w_120h.webp",
                         href: "home",
                     },
                     {
                         title: "领红包",
                         img: "https://image3.suning.cn/uimg/cms/img/154708810364057852.png?format=_is_120w_120h.webp",
                         href: "home",
                     },
                     {
                         title: "抢钢镚",
                         img: "https://image1.suning.cn/uimg/cms/img/154708812182127441.png?format=_is_120w_120h.webp",
                         href: "home",
                     },
                     {
                         title: "白条提额",
                         img: "https://image2.suning.cn/uimg/cms/img/154708813941914251.png?format=_is_120w_120h.webp",
                         href: "home",
                     },
                     {
                         title: "工资理财",
                         img: "https://image1.suning.cn/uimg/cms/img/154762102044051306.png?format=_is_120w_120h.webp",
                         href: "home",
            }],
        }
    },
}
</script>
<style lang="scss" module>
  @import "../../css/element.scss";
  .article{
    overflow: hidden;
    width:100%;
    height:480px;
    background: #666;
    box-sizing: border-box;
    padding: 104px 0 0 0;
    >h4{
       width:100%;
       font-size: 32px;
       color:#fff;
       &:nth-child(1){
         position: absolute;
         top:50px;
         left:240px;
       }
       &:nth-child(3){
         margin:28px 0 24px 18px;
       }
    }
     >.slider{
        width:580px;
        height:170px;
        margin:0 auto;
        img{
            width: 580px;
            height:170px;
            border-radius: 12px;
        }
    }
    .containew{
      @include list;
      padding: 0 18px;
      height:120px;
      .ul{
          @include flex;
          font-size: 16px;
          width:120px;
          height:120px;
          background: #fff;
          border-radius: 12px;
          text-align: center;
          img{
            width:64px;
            height:64px;
            margin: 12px auto;
          }
          p{
            margin-bottom:16px;
          }
        }
      }
    }
</style>

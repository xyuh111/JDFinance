<template>
    <Panel
        :class="$style.section" title="好货臻选">
        <swiper :options="options" :class="$style.container">
            <swiper-slide v-for="item in items" :key="item.nomey">
                <router-link :to="{ name:'home' }">
                    <div :class="$style.ul">
                        <img :src="item.imagess" alt="">
                        <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                        <h4>{{ item.words }}</h4>
                        <Btn :cname="$style.btn"><p>{{ item.money }}<span>{{ item.tab }}</span></p><em>{{ item.nomoney }}</em></Btn>
                    </div>
                </router-link>
            </swiper-slide>
            <!-- 指示器固定用法  设为可配置-->
            <div v-if="options.pagination" slot="pagination" class="swiper-pagination" />
        </swiper>
    </Panel>
</template>

<script>
import {
    swiper,
    swiperSlide,
} from "vue-awesome-swiper"
import Btn from "../components/core/btn.vue"
import Panel from "../components/core/panel.vue"
export default {
    components: {
        Btn,
        Panel,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            options: {
                slidesPerView: 2.28,
                spaceBetween: 30,
                freeMode: true,
            },
            items: [{
                imagess: "https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "https://image.suning.cn/uimg/b2c/newcatentries/70238572-000000010716147664_1_200x200.jpg",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "https://image.suning.cn/uimg/b2c/qrqm/0070217196000000010551447897.jpg?format=400w_400h_2e",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "https://image.suning.cn/uimg/b2c/newcatentries/70538987-000000010695238904_1_200x200.jpg",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "http://web.web3n.com/blog/181115/emJieeLh31.jpg?imageslim",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "http://web.web3n.com/blog/181115/emJieeLh31.jpg?imageslim",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "http://web.web3n.com/blog/181115/emJieeLh31.jpg?imageslim",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "http://web.web3n.com/blog/181115/emJieeLh31.jpg?imageslim",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }, {
                imagess: "http://web.web3n.com/blog/181115/emJieeLh31.jpg?imageslim",
                words: "南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜",
                money: "13.8",
                tab: "元",
                nomoney: "190元",
            }],
        }
    },
    methods: {},
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.section{
  @include panel;
  padding-right: 0 !important;
  width:100%;
  overflow: hidden;
  .container{
     width:100%;
       .ul{
          width:270px;
          height:205px;
          position:relative;
          &::after{
            content:"";
            width:100%;
            height: 50%;
            position: absolute;
            bottom:0;
            left:0;
            background: linear-gradient(to top, #000 , rgba(255, 255, 255, 0));
            border-radius:0 0 12px 12px;
          }
          img{
            width:270px;
            height:205px;
            border-radius: 12px;
            &:nth-child(2){
              width:44px;
              height:44px;
              border-radius: 50%;
              position: absolute;
              top:12px;
              left:16px;
            }
          }
          h4{
            position: absolute;
            bottom:50px;
            left: 12px;
            color:#fff;
            @include p(1);
            z-index:100;
            font-size: 22px;
            height:24px;
          }
          .btn{
            position: absolute;
            left: 12px;
            bottom:10px;
            color:#fff;
            z-index:100;
            font-size: 20px;
            @include list;
            border-bottom-left-radius: 0px;
            align-items: center;
            p{
              span{
                font-size: 16px;
              }
            }
            em{
               font-size: 18px;
               text-decoration: line-through;
               margin-left: 4px;
          }
       }
     }
   }
}
</style>

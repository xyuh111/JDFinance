<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider" />
        <img data-src="done" class="opa1" src="https://image2.suning.cn/uimg/cms/img/155148876547383133.gif">
        <section :class="$style.list">
            <div v-for="item in enters" :key="item.img" :class="$style.item">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>
<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
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
  .slider{
      margin-top: 0px;
      img{
          width: 100%;
      }
  }
  img[data-src="done"]{
    width:100%;
    height:180px;
  }
  .list{
      @include list;
      background: #fff;
      padding-top: 20px;
      padding-bottom: 20px;
      justify-content: space-around;
      a{
          text-decoration: none;
      }
      .item{
          text-align: center;
          width:20%;
          &:nth-child(n+6){
            margin-top:20px;
          }
          img{
              display: inline-block;
              width: 72px;
              height: 72px;
          }
          h4{
            font-size: 20px;
            margin-top: 4px;
            color: #666;
            line-height: 24px;
          }
      }
  }
</style>

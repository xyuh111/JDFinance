<template>
    <section :class="$style.section">
        <router-link :to="{ name: 'home'}"><img src="https://image1.suning.cn/uimg/cms/img/154416579467482515.png?format=_is_1242w_100h.webp" alt=""></router-link>
        <ul>
            <li v-for="item in items" :key="item.title">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
                <div><img :src="item.img[0]" alt=""><img :src="item.img[1]" alt=""></div>
            </li>
        </ul>
        <ul>
            <li v-for="list in lists" :key="list.title">
                <h4>{{ list.title }}</h4>
                <p>{{ list.text }}</p>
                <img :src="list.src" alt="">
            </li>
        </ul>
        <Slider :items="sliders" :cname="$style.Slider" :options="options"/>
    </section>
</template>
<script>
import Slider from "../core/slider.vue"
export default {
    name: "",
    components: {
        Slider,
    },
    data: () => ({
        items: [{
                    title: "苏宁家电",
                    text: "30天包退 365天包换",
                    sup: "",
                    href: "",
                    img: ["https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000010601061662_200x200.jpg?ver=2025&from=mobile&from=mobile", "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000010242610406_200x200.jpg?ver=2068&from=mobile&from=mobile"],
                },
                {
                    title: "生活家电",
                    text: "满300减40 满500减70",
                    sup: "9.9元抢好货",
                    href: "",
                    img: ["https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000139297472_200x200.jpg?ver=2020&from=mobile&from=mobile", "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000805623826_200x200.jpg?ver=2000&from=mobile&from=mobile"],
                },
                {
                    title: "日用家纺",
                    text: "初春晴雨 专区2件5折",
                    sup: "",
                    href: "",
                    img: ["https://image1.suning.cn/uimg/cms/img/154694689296962839.jpg?format=_is_200w_200h.webp", "https://image1.suning.cn/uimg/cms/img/154883037582955342.png?format=_is_200w_200h.webp"],
                },
                {
                    title: "家有萌宝",
                    text: "母婴好货 爆款直降",
                    sup: "",
                    href: "",
                    img: ["https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000147400824_200x200.jpg?ver=2048&from=mobile&from=mobile", "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000135793568_200x200.jpg?ver=2069&from=mobile&from=mobile"],
                },
        ],
        lists: [{
                    title: "家具建材",
                    text: "满999减350",
                    href: "",
                    src: "https://image3.suning.cn/uimg/cms/img/154692961180819483.jpg?format=_is_200w_200h.webp",
                },
                {
                    title: "厨卫电器",
                    text: "灶具299元抢",
                    href: "",
                    src: "https://image1.suning.cn/uimg/cms/img/154772621803968969.jpg?format=_is_200w_200h.webp",
                },
                {
                    title: "型格男装",
                    text: "三件七折",
                    href: "",
                    src: "https://image1.suning.cn/uimg/cms/img/155142319814327818.jpg?format=_is_200w_200h.webp",
                },
                {
                    title: "苏宁图书",
                    text: "开学焕新季",
                    href: "",
                    src: "https://image3.suning.cn/uimg/cms/img/154907320002426781.png?format=_is_200w_200h.webp",
                },
        ],
        sliders: [{
                      title: "1",
                      href: "home",
                      src: "https://image2.suning.cn/uimg/cms/img/155149296028347744.jpg?from=mobile",
                  },
                  {
                      title: "2",
                      href: "home",
                      src: "//image.suning.cn/uimg/aps/material/155136228032161858.jpg?from=mobile",
                  },
                  {
                      title: "3",
                      href: "home",
                      src: "//image.suning.cn/uimg/aps/material/155144138781462155.jpg",
                  },
        ],
        options: {
            autoplay: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
            },
        },
    }),
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
  box-sizing: border-box;
  padding-left:18px;
  padding-right: 18px;
  >a{
    img{
      width: 604px;
      height: 51px;
    }
  }
  >ul{
    @include panel;
    margin-top: 0px;
    @include list;
    li{
      width:49.9%;
      height: 216px;
      h4{
        font-family: PingFangSC-Medium;
        font-size: 28px;
        line-height: 34px;
        height: 34px;
        margin: 15px 0 0 20px;
        color: #333;
      }
      p{
        font-size: 20px;
        color: #999;
        overflow: hidden;
        margin: 3px 0 0 20px;
        width: 258px;
        height: 25px;
        line-height: 25px;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 3px;
      }
      >div{
        @include list;
        img{
          width: 120px;
          height: 120px;
          margin:4px auto auto;
        }
      }
    }
    &:nth-child(2){
      border-radius: 20px 20px 0 0;
      margin-bottom: 0;
      border-bottom: 1px solid #ddd;
      li{
        &:nth-child(n+3){
          border-top: 1px solid #ddd;
        }
        &:nth-child(odd){
          border-right: 1px solid #ddd;
        }
      }
    }
    &:nth-child(3){
      border-radius:0 0 20px 20px;
      @include list;
      li{
        width: 24.8%;
        img{
          width: 120px;
          height: 120px;
          margin:4px auto auto;
        }
        &:nth-child(n+1){
          border-right:1px solid #ddd;
        }
      }
    }
  }
  .Slider{
    margin-bottom: 20px;
    .swiper-container{
      width:100%;
      height: 165px;
      overflow: hidden;
    }
    img{
      width: 100%;
      height: 165px;
      border-radius: 20px;
    }
  }
}
</style>

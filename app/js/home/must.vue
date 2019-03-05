<template>
    <section :class="$style.section">
        <router-link :to="{ name: 'home'}"><img src="https://image1.suning.cn/uimg/cms/img/154875835012575413.png?format=_is_1242w_100h.webp" alt=""></router-link>
        <ul>
            <li>
                <h4>新品首发 <span><i/>大牌新品抢先</span></h4>
                <p>iQOO立即预约 6期免息</p>
                <div><img src="https://image2.suning.cn/uimg/cms/img/155141063202856221.jpg?format=_is_200w_200h.webp" alt=""><img src="https://image3.suning.cn/uimg/cms/img/155145873528052134.jpg?format=_is_200w_200h.webp" alt=""></div>
            </li>
            <li>
                <h4>苏宁超市</h4>
                <p>超市5折天  2件5折起</p>
                <div><img src="https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000614259561_200x200.jpg?ver=2030&from=mobile&from=mobile" alt=""><img src="https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000625367016_200x200.jpg?ver=2060&from=mobile&from=mobile" alt=""></div>
            </li>
            <li>
                <h4>苏宁国际</h4>
                <p>洋气女神节 好礼第二件半价</p>
                <div><img src="https://image2.suning.cn/uimg/cms/img/155136829151589326.jpg?format=_is_200w_200h.webp" alt=""><img src="https://image1.suning.cn/uimg/cms/img/155136828861450258.jpg?format=_is_200w_200h.webp" alt=""></div>
            </li>
            <li>
                <div>
                    <h4>0元试用</h4>
                    <p>送诺基亚9新品</p>
                    <img src="https://image1.suning.cn/uimg/cms/img/155160282650466964.jpg?format=_is_200w_200h.webp" alt="">
                </div>
                <div>
                    <h4>苏宁生鲜</h4>
                    <p>每满128减50</p>
                    <img src="https://image3.suning.cn/uimg/b2c/qrqm/0070213161000000010850612087_200x200.jpg?ver=2001&from=mobile&from=mobile" alt="">
                </div>
            </li>
        </ul>
        <Slider :items="items" :cname="$style.Slider" :options="options"/>
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
      border-radius: 20px;
      li{
        width:49.8%;
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
            background: 0;
            margin:4px auto 0 auto;
          }
        }
        &:nth-child(1){
          h4{
            width:100%;
            white-space: nowrap;
            span{
              background-image: linear-gradient(-90deg,#fa3b26 3%,#ff4d8a 96%);
              height: 25px;
              margin: 18px 0 0 8px;
              padding: 0 12px 2px 18px;
              line-height: 25px;
              font-size: 18px;
              color: #FFF;
              border-radius: 12px;
              position: relative;
              vertical-align: 2px;
              i{
                position: absolute;
                width: 6px;
                height: 6px;
                opacity: .5;
                background: #fff;
                top: 9px;
                left: 7px;
                border-radius: 50%;
              }
            }
          }
        }
        &:nth-child(4){
          @include list;
          >div{
            width: 49.9%;
            &:nth-child(1){
              p{
                  color: #ff6600;
              }
            }
          }
        }
       &:nth-child(n+3){
         border-top: 1px solid #ddd;
       }
       &:nth-child(odd){
         border-right: 1px solid #ddd;
       }
      }
    }
    .Slider{
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

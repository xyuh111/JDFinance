<template>
    <section :class="$style.section">
        <img src="https://image3.suning.cn/uimg/cms/img/154708409641127677.png?format=_is_1242w_100h.webp" alt="">
        <ul>
            <li>
                <img src="https://image3.suning.cn/uimg/cms/img/155134571726492620.jpg?format=_is_540w_360h.webp" alt="">
                <p>母婴卡最高返￥200</p>
            </li>
            <li>
                <h4>苏宁金融</h4>
                <p>开通任性贷即返50元</p>
                <div><img src="https://image1.suning.cn/uimg/cms/img/155134579124868323.jpg?format=_is_200w_200h.webp" alt=""><img src="https://image2.suning.cn/uimg/cms/img/155134578930022355.jpg?format=_is_200w_200h.webp" alt=""></div>
            </li>
            <li v-for="list in lists" :key="list.title">
                <h4>{{ list.title }}</h4>
                <p>{{ list.text }}</p>
                <img :src="list.src" alt="">
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "",
    data: () => ({
        lists: [{
                    title: "任性付",
                    text: "抢12期免息券",
                    href: "",
                    src: "https://image1.suning.cn/uimg/cms/img/155134609197185607.jpg?format=_is_200w_200h.webp",
                },
                {
                    title: "众筹",
                    text: "3秒智能速热",
                    href: "",
                    src: "https://image3.suning.cn/uimg/cms/img/155140346382554927.png?format=_is_200w_200h.webp",
                },
                {
                    title: "苏宁卡",
                    text: "赢￥888奶卡",
                    href: "",
                    src: "https://image2.suning.cn/uimg/cms/img/155134692966641645.jpg?format=_is_200w_200h.webp",
                },
                {
                    title: "苏宁理财",
                    text: "领188红包",
                    href: "",
                    src: "https://image3.suning.cn/uimg/cms/img/155134710836466611.png?format=_is_200w_200h.webp",
                },
        ],
    }),
}
</script>
<style lang="scss" module>
  @import "../../css/element.scss";
  .section{
    margin-top:12px;
    >img{
      width: 603px;
      height: 51px;
      background: 0;
    }
    width:100%;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 18px;
    ul{
      @include panel;
      margin-top: 0px;
      @include list;
      border-radius: 20px;
      overflow: hidden;
      li{
        width:49.9%;
        position: relative;
        height: 215px;
        >img{
          width:100%;
          height: 100%;
          +p{
           position: absolute;
           top: 14px;
           left: 20px;
           width: 258px;
           overflow: hidden;
           font-size: 25px;
           height: 68px;
           line-height: 34px;
           color: #FFF;
           text-overflow: ellipsis;
           word-break:break-all;
            word-wrap:break-word;
            display:-webkit-box;
            -webkit-box-orient:vertical;
             -webkit-line-clamp:2;
         }
        }
        &:nth-child(n+2){
          border-top:1px solid #ddd;
          h4{
            font-family: PingFangSC-Medium;
            font-size: 28px;
            letter-spacing: 0;
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
              margin:auto;
            }
          }
        }
        &:nth-child(n+3){
          width:24.8%;
          border-left:1px solid #ddd;
          img{
            width: 120px;
            height: 120px;
            margin:10px auto auto;
          }
        }
        &:nth-child(3){
          border-left:none;
        }
      }
    }
  }
</style>

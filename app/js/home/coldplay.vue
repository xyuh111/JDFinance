<template>
    <section :class="$style.section">
        <img src="https://image2.suning.cn/uimg/cms/img/154416478781252783.png?format=_is_1242w_100h.webp" alt="">
        <ul>
            <li>
                <img src="//image5.suning.cn/uimg/MFS/show/152714945319469691.jpg_0-0-1391-927a%7C_540w_360h_2e" alt="">
                <p>内存条都用上了水冷散热，你却还是只能拼命吹风</p>
            </li>
            <li>
                <h4>手机馆</h4>
                <p>iPhone XR低至5288</p>
                <div><img src="https://image1.suning.cn/uimg/cms/img/154898476247546948.jpg?format=_is_200w_200h.webp" alt=""><img src="https://image3.suning.cn/uimg/cms/img/154898475837334673.jpg?format=_is_200w_200h.webp" alt=""></div>
            </li>
            <li><h4>电脑办公</h4>
                <p>以旧换新先补300后回收</p>
            <div><img src="https://image1.suning.cn/uimg/b2c/qrqm/0070177374000000010010230355_200x200.jpg?ver=2000&from=mobile&from=mobile" alt=""><img src="https://image1.suning.cn/uimg/b2c/qrqm/0070129645000000010000038615_200x200.jpg?ver=2001&from=mobile&from=mobile" alt=""></div></li>
            <li><h4>苏宁极物</h4>
                <p>苏宁官方自营品牌</p>
            <div><img src="https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000010574404672_200x200.jpg?ver=2003&from=mobile&from=mobile" alt=""><img src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010579337580_200x200.jpg?ver=2021&from=mobile&from=mobile" alt=""></div></li>
            <li><h4>运动户外</h4>
                <p>自营鞋服 满198减100</p>
            <div><img src="https://image1.suning.cn/uimg/cms/img/155152078206721541.jpg?format=_is_200w_200h.webp" alt=""><img src="https://image2.suning.cn/uimg/cms/img/155152077842965062.jpg?format=_is_200w_200h.webp" alt=""></div></li>
            <li>
                <div>
                    <h4>苏宁数码</h4>
                    <p>每满500减50</p>
                    <img src="https://image1.suning.cn/uimg/cms/img/154779439126981338.jpg?format=_is_200w_200h.webp" alt="">
                </div>
                <div>
                    <h4>Biu+优品</h4>
                    <p>高性价比空调</p>
                    <img src="https://image3.suning.cn/uimg/cms/img/155132137776186879.jpg?format=_is_200w_200h.webp" alt="">
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "",
    data: () => ({

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
      padding-bottom: 10px;
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
        &:nth-child(6){
          @include list;
          >div{
            width:49%;
            h4,p{
              width:100%;
            }
            &:nth-child(1){
              border-right:1px solid #ddd;
            }
          }
        }
        &:nth-child(n+3){
          border-top:1px solid #ddd;
        }
        &:nth-child(odd){
          border-right:1px solid #ddd;
        }
        &:nth-child(2){
          h4{
            color: #FA4B49 !important;
          }
        }
      }
    }
  }
</style>

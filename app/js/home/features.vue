<template>
    <section :class="$style.section">
        <router-link :to="{ name: 'home'}"><img src="https://image2.suning.cn/uimg/cms/img/154416693721758813.png?format=_is_1242w_100h.webp" alt=""></router-link>
        <ul>
            <li>
                <h4>城市专享</h4>
                <p>必抢好物 低至9.9元包邮</p>
                <div><img src="https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000010640160955_200x200.jpg?ver=2001&from=mobile&from=mobile" alt=""><img src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010601291109_200x200.jpg?ver=2002&from=mobile&from=mobile" alt=""></div>
            </li>
            <li>
                <div>
                    <h4>汽车生活</h4>
                    <p>满99减50</p>
                    <img src="https://image1.suning.cn/uimg/cms/img/154779688920288406.jpg?format=_is_200w_200h.webp" alt="">
                </div>
                <div>
                    <h4>苏宁3C</h4>
                    <p>定金最高抵1000</p>
                    <img src="https://image1.suning.cn/uimg/cms/img/154694104052267818.jpg?format=_is_200w_200h.webp" alt="">
                </div>

            </li>
        </ul>
        <ul>
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
                    title: "二手优品",
                    text: "低价抢苹果X",
                    href: "",
                    src: "https://image2.suning.cn/uimg/cms/img/154746064136266535.png?format=_is_200w_200h.webp",
                },
                {
                    title: "以旧换新",
                    text: "购新更省钱",
                    href: "",
                    src: "https://image1.suning.cn/uimg/cms/img/154416751974722113.jpg?format=_is_200w_200h.webp",
                },
                {
                    title: "帮客服务",
                    text: "到家生活服务",
                    href: "",
                    src: "https://image3.suning.cn/uimg/cms/img/154693630298587535.jpg?format=_is_200w_200h.webp",
                },
                {
                    title: "助农扶贫",
                    text: "卸妆水78元",
                    href: "",
                    src: "https://image2.suning.cn/uimg/cms/img/155134042388916171.jpg?format=_is_200w_200h.webp",
                },
        ],
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
    &:nth-child(2){
      border-radius: 20px 20px 0 0;
    }
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
      &:nth-child(1){
          border-right: 1px solid #ddd;
      }
      &:nth-child(2){
        @include list;
        >div{
            width:49.8%;
            &:nth-child(2){
              border-left: 1px solid #ddd;
            }
        }
      }
     }
     &:nth-child(2){
        margin-bottom:0;
        border-bottom: 1px solid #ddd;
     }
    &:nth-child(3){
      margin-top:0;
      width:100%;
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
}
</style>

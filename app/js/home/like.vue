<template>
    <section :class="$style.section">
        <router-link :to="{ name: 'home'}"><img src="https://image3.suning.cn/uimg/cms/img/154518371251022769.png?format=_is_1242w_100h.webp" alt=""></router-link>
        <ul>
            <li v-for="item in items" :key="item.title">
                <img :src="item.src" alt="">
                <h4>{{ item.title }}</h4>
                <div>
                    <span v-for="spans in item.label" :key="spans">{{ spans }}</span>
                </div>
                <p>{{ item.money }}</p>
            </li>
        </ul>
    </section>

</template>
<script>
export default {
    name: "",
    data: () => ({
        items: [{
                    title: "Apple iPhone 8 Plus 64GB 深空灰色 移动联通电信4G全网通手机",
                    src: "//imgservice.suning.cn/uimg1/b2c/image/e8vPisAnXSa8d8XBnvAWtg.jpg?format=_is_400w_400h.webp",
                    label: [],
                    href: "",
                    money: "￥4964",
                },
                {
                    title: "清风 抽纸 原木纯品二层150抽*4包小规格(短幅)抽取式卫生纸巾餐巾纸擦手纸面巾纸【新旧包装交替发货】",
                    src: "//imgservice.suning.cn/uimg1/b2c/image/XglNe_7oFVgHrDSQSVr7kQ.jpg?format=_is_400w_400h.webp",
                    label: ["拼购"],
                    href: "",
                    money: "￥8.5",
                },
                {
                    title: "Apple iPhone 8 64GB 深空灰 移动联通电信4G全网通手机",
                    src: "//imgservice.suning.cn/uimg1/b2c/image/MYH-vZODmJVfagxIZYqiDg.jpg?format=_is_400w_400h.webp",
                    label: ["大聚惠", "赠品"],
                    href: "",
                    money: "￥3899",
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
  margin-bottom: 120px;
  >a{
    img{
      width: 604px;
      height: 51px;
    }
  }
  ul{
    @include list;
    justify-content: space-between;
    li{
      @include panel;
      width: 297px;
      height: 440px;
      margin: 0;
      margin-bottom: 12px;
      border-radius: 20px;
      overflow: hidden;
      box-sizing: border-box;
      img{
        width: 256px;
        height: 256px;
        margin: 20px auto 0;
      }
      h4{
        width: 256px;
        height: 58px;
        margin: 10px auto 0;
        line-height: 29px;
        font-size: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
      div{
        height: 26px;
        width: 256px;
        margin: 13px auto 0;
        overflow: hidden;
        span{
          font-size: 18px;
          line-height: 24px;
          border: 1px solid #F50;
          height: 24px;
          border-radius: 12px;
          padding: 0 8px;
          float: left;
          margin-right: 4px;
          color: #F50;
        }
      }
      p{
        font-size: 28px;
        margin-top: 4px;
        display: block;
        color: #f40;
        line-height: 1.2em;
        margin: 16px 0 0 20px;
      }
    }
  }
}
</style>

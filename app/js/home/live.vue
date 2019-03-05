<template>
    <section :class="$style.section">
        <router-link :to="{ name: 'home'}"><img src="https://image1.suning.cn/uimg/cms/img/154518368097819724.png?format=_is_1242w_100h.webp" alt=""></router-link>
        <ul>
            <li v-for="item in items" :key="item.title">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
                <div><img :src="item.img[0]" alt=""><img :src="item.img[1]" alt=""></div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "",
    data: () => ({
        items: [{
                    title: "极物控",
                    text: "定义好生活",
                    href: "",
                    img: ["https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000826159046_200x200.jpg?ver=2000&format=_is_200w_200h&from=mobile", "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010601999393_200x200.jpg?ver=2000&format=_is_200w_200h&from=mobile"],
                },
                {
                    title: "雨天精灵",
                    text: "下雨天不愁",
                    href: "",
                    img: ["https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000618342596_200x200.jpg?ver=2007&format=_is_200w_200h&from=mobile", "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000134817240_200x200.jpg?ver=2004&format=_is_200w_200h&from=mobile"],
                },
                {
                    title: "私人医生",
                    text: "呵护全家健康",
                    href: "",
                    img: ["https://image3.suning.cn/uimg/b2c/qrqm/0070141956000000000165072655_200x200.jpg?ver=2003&format=_is_200w_200h&from=mobile", "https://image2.suning.cn/uimg/b2c/qrqm/0070178738000000010659422701_200x200.jpg?ver=2000&format=_is_200w_200h&from=mobile"],
                },
                {
                    title: "纸之恋人",
                    text: "亲密接触陪伴",
                    href: "",
                    img: ["https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000102617722_200x200.jpg?ver=2001&format=_is_200w_200h&from=mobile", "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000102617622_200x200.jpg?ver=2002&format=_is_200w_200h&from=mobile"],
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
  margin-bottom: 20px;
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
      border-radius: 20px;
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
}
</style>

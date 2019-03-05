<template>
    <section :class="$style.section">
        <router-link :to="{ name: 'home'}"><img src="https://image1.suning.cn/uimg/cms/img/154416658880214361.png?format=_is_1242w_100h.webp" alt=""></router-link>
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
                    title: "时尚潮酷手机榜",
                    text: "24h热销1.8万件",
                    href: "",
                    img: ["https://image2.suning.cn/uimg/b2c/qrqm/0070094634000000000690128135_200x200.jpg?ver=2003?format=_is_200w_200h.webp", "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000010570759298_200x200.jpg?ver=2109?format=_is_200w_200h.webp"],
                },
                {
                    title: "多功能电火锅榜",
                    text: "24h热销693件",
                    href: "",
                    img: ["https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000187185720_200x200.jpg?ver=2117?format=_is_200w_200h.webp", "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010606467950_200x200.jpg?ver=2002?format=_is_200w_200h.webp"],
                },
                {
                    title: "简约速热电热榜",
                    text: "热水随叫随到",
                    href: "",
                    img: ["https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000621336632_200x200.jpg?ver=2088?format=_is_200w_200h.webp", "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000138873413_200x200.jpg?ver=2216?format=_is_200w_200h.webp"],
                },
                {
                    title: "牙齿洁净护理榜",
                    text: "24h热销4055件",
                    href: "",
                    img: ["https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000131223417_200x200.jpg?ver=2010?format=_is_200w_200h.webp", "https://image2.suning.cn/uimg/b2c/qrqm/0070128080000000010736601378_200x200.jpg?ver=2000?format=_is_200w_200h.webp"],
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

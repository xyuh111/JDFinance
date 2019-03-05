<template>
    <section :class="$style.section">
        <router-link :to="{ name: 'home'}"><img src="https://image3.suning.cn/uimg/cms/img/154518369657375633.png?format=_is_1242w_100h.webp" alt=""></router-link>
        <ul>
            <li v-for="item in items" :key="item.title">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
                <div><img :src="item.img[0]" alt=""><img :src="item.img[1]" alt=""></div>
            </li>
        </ul>
        <router-link :to="{ name: 'home'}"><img src="//image.suning.cn/uimg/iva/transparent/QRQM_72d70878601e4d80b28acf042eb76c240.png" alt=""></router-link>
    </section>

</template>
<script>
export default {
    name: "",
    data: () => ({
        items: [{
                    title: "菜伴侣",
                    text: "囤货小当家",
                    href: "",
                    img: ["//imgservice.suning.cn/uimg1/b2c/image/5PuoaEt6EEx6v55tJa88TQ.jpg?format=_is_200w_200h.webp", "//imgservice.suning.cn/uimg1/b2c/image/J7mLTjJAgzKU10zdY3s1vg.jpg?format=_is_200w_200h.webp"],
                },
                {
                    title: "小零嘴",
                    text: "唯有美食不可辜负",
                    href: "",
                    img: ["//image.suning.cn/uimg/b2c/newcatentries/0070062522-000000000139871643_1.jpg?format=_is_200w_200h.webp", "//imgservice.suning.cn/uimg1/b2c/image/MnuU7vhUz5s47lf1bIaN-A.jpg?format=_is_200w_200h.webp"],
                },
                {
                    title: "白富美",
                    text: "穿出百变girl",
                    href: "",
                    img: ["//imgservice.suning.cn/uimg1/b2c/image/fhO_YRiUvs-oOy9pWZXFRA==.jpg?format=_is_200w_200h.webp", "//image.suning.cn/uimg/b2c/newcatentries/0070150934-000000000102685177_1.jpg?format=_is_200w_200h.webp"],
                },
                {
                    title: "居家党",
                    text: "繁杂家务轻松搞定",
                    href: "",
                    img: ["//imgservice.suning.cn/uimg1/b2c/image/VJuVlR6q8bGgWpp_3DAqqw.jpg?format=_is_200w_200h.webp", "//imgservice.suning.cn/uimg1/b2c/image/7zEmIOAnErVK7yJoEGC1cg.jpg?format=_is_200w_200h.webp"],
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
    &:nth-child(3){
      img{
        width: 100%;
        height: 189px;
        margin: 20px 0;
      }
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

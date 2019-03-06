<template>
    <section :class="$style.section">
        <article>
            <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
            <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            <h4>百果园</h4>
            <p>338m</p>
        </article>
        <ul>
            <li>
                <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                <h4>南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜</h4>
                <p>84.9元</p>
                <span>199元</span>
            </li>
            <li>
                <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                <h4>南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜</h4>
                <p>84.9元</p>
                <span>199元</span>
            </li>
            <li>
                <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                <h4>南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜</h4>
                <p>84.9元</p>
                <span>199元</span>
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
     @include panel;
     padding:0;
     margin: 20px;
     article{
       position: relative;
       img{
         width:100%;
         height:150px;
         border-radius: 12px 12px 0 0;
         &:nth-child(2){
           width:84px;
           height:84px;
           border-radius: 50%;
           position: absolute;
           top:32px;
           left:24px;
         }
       }
       h4{
         font-size: 22px;
         position: absolute;
         top:40px;
         left:128px;
         color:#fff;
       }
       p{
         font-size: 20px;
         position: absolute;
         top:92px;
         left:128px;
         color:#fff;
       }
     }
     ul{
       width:100%;
       box-sizing: border-box;
       padding: 16px;
       @include list;
       justify-content: space-between;
       border-radius: 0 20px;
       height: 300px;
       background: #fff;
       li{
         width:178px;
         img{
           width:178px;
           height:137px;
           border-radius: 12px
         }
         h4{
           @include p(2)
           font-size: 22px;
           line-height: 28px;
           height:56px;
         }
         p{
           margin-top: 10px;
           font-size: 22px;
           color:red;
         }
         span{
           font-size: 18px;
           line-height: 0px;
           color:#b7b7b7;
           text-decoration: line-through;
           vertical-align: middle;
         }
       }
     }
  }
</style>

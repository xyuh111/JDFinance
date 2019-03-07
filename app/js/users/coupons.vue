<template>
    <section :class="$style.section">
        <header>
            <a href=""/>
            <h4>优惠卷</h4>
        </header>
        <ul>
            <li>
                <img src="http://wstore-1255653546.image.myqcloud.com/wstore_saas/2019-03-07/419c231e-1b45-4bb5-98cb-c1fc1e348e17.png" alt="">
                <aside>
                    <h4>现金卷<span>有效期至 2020-5-9</span></h4>
                    <p>10<em>元</em></p>
                </aside>
                <p>最高折扣200元 限购买水果使用</p>
                <div>
                    <h4>立即使用</h4>
                </div>
            </li>
            <li>
                <img src="http://wstore-1255653546.image.myqcloud.com/wstore_saas/2019-03-07/419c231e-1b45-4bb5-98cb-c1fc1e348e17.png" alt="">
                <aside>
                    <h4>现金卷<span>有效期至 2020-5-9</span></h4>
                    <p>10<em>元</em></p>
                </aside>
                <p>最高折扣200元 限购买水果使用</p>
                <div>
                    <h4>立即使用</h4>
                </div>
            </li>
            <li>
                <img src="http://wstore-1255653546.image.myqcloud.com/wstore_saas/2019-03-07/419c231e-1b45-4bb5-98cb-c1fc1e348e17.png" alt="">
                <aside>
                    <h4>现金卷<span>有效期至 2020-5-9</span></h4>
                    <p>10<em>元</em></p>
                </aside>
                <p>最高折扣200元 限购买水果使用</p>
                <div>
                    <h4>立即使用</h4>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "",
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
  header{
    width:100%;
    position: relative;
    background: #fff;
    @include list;
    flex-wrap:nowrap;
    >a{
      display: block;
      position: relative;
      left: 4px;
      top: 0;
      height: 75px;
      &:before{
        content: "";
        position: absolute;
        top: 25px;
        left: 20px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border: solid #353d44;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(-45deg);
      }
    }
    >h4{
      line-height: 75px;
      font-size: 26px;
      border-bottom: 1px solid #DCDCDC;
      color: #333;
      width:100%;
      text-align: center;
    }
  }
  ul{
    li{
      width:100%;
      height:202px;
      box-sizing: border-box;
      padding: 0 22px;
      position: relative;
      margin-top: 20px;
      img{
        width:428px;
        height:100%;
        border-radius: 20px;
      }
      aside{
        width:428px;
        height:100%;
        position: absolute;
        top:0;
        left:50px;
        @include list;
        h4{
          font-size: 40px;
          color: #fff;
          margin-top: 30px;
          span{
            font-size: 22px;
            display: block;
            margin-top: 18px;
            color:#f60;
            background: #fff;
            padding:4px 10px;
          }
        }
        p{
           color:#fff;
           position: absolute;
           top:40px;
           right: 90px;
           font-size: 60px;
           em{
            font-size: 24px;
            margin-left: 12px;
          }
        }
      }
      >p{
        position: absolute;
        bottom:13px;
        font-size: 20px;
        color:#fff;
        width:428px;
        text-align: center;
        border-top: 1px dashed #fff;
        padding-top: 14px;
      }
      div{
        position: absolute;
        right: 25px;
        top:0;
        bottom:0;
        width:200px;
        border:solid #f60;
        border-width: 1px 1px 1px 0px;
        overflow: hidden;
        border-radius: 20px;
        background: linear-gradient(125deg,#a90cf7,#f8860d);
        z-index:-1;
        h4{
          width:200px;
          height: 120px;
          background: red;
          color: #fff;
          text-align: center;
          line-height: 180px;
          font-size: 28px;
          transform: rotate(45deg);
          position: absolute;
          right: -70px;
          top:-30px;
        }
      }
    }
  }
}
</style>

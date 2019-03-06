<template>
    <Panel :class="$style.section" title="本周特惠">
        <header>
            <div>
                <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                <h4>真功夫 | 香滑蒸蛋</h4>
                <p>3元<span>6</span></p>
                <Btn :cname="$style.btn">购买</Btn>
            </div>
            <div>
                <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                <h4>白果园</h4>
                <h4>【1斤】B级-千禧圣女百香果【1斤】B级-千禧圣女百香果</h4>
                <p>7.9元<span>19.90元</span></p>
            </div>
        </header>
        <ul>
            <li>
                <div>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                    <p>12.9公里</p>
                </div>
                <h4>花田喜事</h4>
                <p>18<span>元</span></p>
                <div>
                    <p>35元</p>
                    <Btn :cname="$style.btn">购买</Btn>
                </div>
            </li>
            <li>
                <div>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                    <p>12.9公里</p>
                </div>
                <h4>花田喜事</h4>
                <p>18<span>元</span></p>
                <div>
                    <p>35元</p>
                    <Btn :cname="$style.btn">购买</Btn>
                </div>
            </li>
            <li>
                <div>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                    <p>12.9公里</p>
                </div>
                <h4>花田喜事</h4>
                <p>18<span>元</span></p>
                <div>
                    <p>35元</p>
                    <Btn :cname="$style.btn">购买</Btn>
                </div>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Btn from "../components/core/btn.vue"
import Panel from "../components/core/panel.vue"
export default {
    components: {
        Btn,
        Panel,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.section{
  @include panel;
  >header{
    @include list;
    justify-content: space-between;
    div{
      font-size: 22px;
      position: relative;
      &:nth-child(1){
         width:390px;
         height:250px;
         img{
            width:390px;
            height:250px;
            border-radius: 10px;
            &:nth-child(2){
              width:44px;
              height:44px;
              border-radius: 50%;
              position: absolute;
              top:12px;
              left:16px;
            }
         }
         h4{
           position: absolute;
           bottom:54px;
           color:#fff;
           left:16px;
           z-index:100;
         }
         p{
           position: absolute;
           bottom:20px;
           color:red;
           left:16px;
           z-index:100;
           span{
             font-size: 20px;
             text-decoration: line-through;
             color:#fff;
             margin-left:5px;
           }
         }
         .btn{
           position: absolute;
           bottom:16px;
           right:16px;
           z-index:100;
         }
         &::after{
           content:"";
           width:100%;
           height: 50%;
           position: absolute;
           bottom:0;
           background: linear-gradient(to top, #000 , rgba(255, 255, 255, 0))
         }

      }
      &:nth-child(2){
        width:190px;
        img{
          width:190px;
          height:140px;
        }
        h4{
          line-height: 35px;
          @include p(1);
          height:40px;
        }
        p{
          color:red;
          span{
            color:#b7b7b7;
             font-size: 18px;
             text-decoration:line-through;
          }
        }
      }
    }
  }
  ul{
    margin-top: 18px;
    @include list;
    justify-content: space-between;
    font-size: 22px;
    padding-bottom:20px;
    li{
      >div{
        position:relative;
        img{
          width:188px;
          height:142px;
          &:nth-child(2){
            width:44px;
            height:44px;
            border-radius: 50%;
            position: absolute;
            top:90px;
            left:12px;
          }
        }
        &:nth-child(1){
          p{
            position: absolute;
            top:105px;
            left:60px;
            color:#fff;
            font-size: 16px;
          }
        }
        &:nth-child(4){
          p{
            font-size: 18px;
            text-decoration: line-through;
            color:#b7b7b7;
          }
          .btn{
            position: absolute;
            bottom:0px;
            right:16px;
            z-index:100;
          }
        }
      }
      h4{
        line-height:40px;
      }
      >p{
        line-height:35px;
        color:red;
        span{
          font-size: 16px;
        }
      }
    }
  }
}
</style>

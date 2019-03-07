<template>
    <section :class="$style.section">
        <header>
            <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
            <aside>
                <h4>hudy</h4>
                <p>绑定/未绑定</p>
            </aside>
            <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
        </header>
        <Panel :cname="$style.panel" title="我的订单">
            <p>查看全部</p>
            <ul>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>待支付</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>待收货</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>待评价</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>退换/售后</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>常购清单</p>
                </li>
            </ul>
        </Panel>
        <Panel :cname="$style.paneltow" title="必备工具">
            <ul>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>商品关注</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>店铺关注</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>优惠卷</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>我的积分</p>
                </li>
                <li>
                    <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt="">
                    <p>hello</p>
                </li>
            </ul>
        </Panel>
        <Btn :cname="$style.btn">退出</Btn>
    </section>
</template>
<script>
import Panel from "../components/core/panel.vue"
import Btn from "../components/core/btn.vue"
export default {
    name: "",
    components: {
        Panel,
        Btn,
    },
    data: () => ({

    }),
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
  @include flex;
  align-items: center;
  header{
   width:100%;
   background: #ffa71a;
   box-sizing: border-box;
   padding: 0 20px;
   height:254px;
   @include list;
   flex-wrap: nowrap;
   align-items: center;
   img{
     &:nth-child(1){
       width:108px;
       height:108px;
       border-radius: 50%;
       border:2px solid #fff;
       margin-right: 18px;
     }
     &:nth-child(3){
       width:160px;
       height:105px;
       border-radius: 18px;
       position: absolute;
       right: 20px;
     }
   }
   h4{
     font-size: 32px;
     color:#fff;
     margin-bottom: 20px;
   }
   p{
     font-size: 22px;
     color:#1dac19;
   }
  }
  .panel{
    box-sizing: border-box;
    width:calc(100vw - 40px);
    margin: 20px 20px;
    border-radius: 20px;
    position: relative;
    >h4{
      border-bottom:1px solid #b7b7b7;
      font-size: 26px !important;
    }
    >p{
      font-size: 30px;
      color:#b7b7b7;
      position: absolute;
      top:24px;
      right:20px;
      font-size: 26px !important;
      &::after{
        content:'';
        display: inline-block;
        width:12px;
        height:12px;
        border: solid #b7b7b7;
        border-width:2px 0 0 2px;
        transform:rotate(135deg);
        margin-left:14px;
      }
    }
    ul{
      @include list;
      padding:25px 0;
      li{
        flex-grow: 1;
        text-align: center;
        img{
          width:50px;
          height:45px;
          margin: auto;
        }
        p{
          font-size: 20px;
          margin-top:18px;
        }
      }
    }
  }
  .paneltow{
    box-sizing: border-box;
    width:calc(100vw - 40px);
    margin: 0 20px;

    border-radius: 20px;
    >h4{
      border-bottom:1px solid #b7b7b7;
      font-size: 26px !important;
    }
    ul{
      @include list;
      padding:25px 0;
      li{
        width:33.33%;
        text-align: center;
        &:nth-child(n+4){
          margin-top: 56px;\
        }
        img{
          width:50px;
          height:45px;
          margin: auto;
        }
        p{
          font-size: 20px;
          margin-top:18px;
        }
      }
    }
  }
  .btn{
    font-size: 32px !important;
    border-radius: 40px !important;
    width:80% !important;
    background: #ffa71a !important;
    border-color:  #ffa71a !important;
    padding:16px 0 !important;
    margin:40px auto !important;
  }
}
</style>

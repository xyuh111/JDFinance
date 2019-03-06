<template>
    <Panel :title="'真实交易评价('+ 4179 +')'" :cname="$style.section">
        <article>
            <ul>
                <li>好评率</li>
                <li>91%</li>
                <li>根据用户评分计算</li>
            </ul>
            <ul>
                <li>
                    <p>超赞<span/>
                    <em>999+</em></p>

                </li>
                <li>
                    <p>满意<span/>
                    <em>999+</em></p>

                </li>
                <li>
                    <p>一般<span/>
                    <em>182</em></p>

                </li>
                <li>
                    <p>失望  <span/>
                    <em>10</em></p>

                </li>
            </ul>
        </article>
        <ul>
            <li>huidy</li>
            <li>2019-10-26</li>
            <li>消费评分：</li>
            <li>南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜</li>
            <li>推荐菜：香蕉</li>
            <li>
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            </li>
            <li>
                <Btn :cname="$style.btn">有用</Btn>
            </li>
            <li/>
            <li><img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt=""></li>
        </ul>
        <ul>
            <li>huidy</li>
            <li>2019-10-26</li>
            <li>消费评分：</li>
            <li>南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜</li>
            <li>推荐菜：香蕉</li>
            <li>
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            </li>
            <li>
                <Btn :cname="$style.btn">有用</Btn>
            </li>
            <li/>
            <li><img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt=""></li>
        </ul>
        <ul>
            <li>huidy</li>
            <li>2019-10-26</li>
            <li>消费评分：</li>
            <li>南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜</li>
            <li>推荐菜：香蕉</li>
            <li>
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
                <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            </li>
            <li>
                <Btn :cname="$style.btn">有用</Btn>
            </li>
            <li><Btn :cname="$style.btn">查看全部评论</Btn></li>
            <li><img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt=""></li>
        </ul>
        <Btn :cname="$style.mybtn">我有话想说</Btn>
    </Panel>
</template>
<script>
import Btn from "../core/btn.vue"
import Panel from "../core/panel.vue"
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
@import "../../../css/element.scss";
.section{
  margin-bottom: 100px !important;
  >h4{
    padding: 0 !important;
    font-size: 26px !important;
  }
  article{
    @include list;
    justify-content: space-between;
    margin-bottom: 40px;
    ul{
      &:nth-child(1){
        width:177px;
        font-size: 22px;
        padding-top: 12px;
        text-align: center;
        border-right: 1px solid #b7b7b7;
        padding-right: 10px;
        li{
          &:nth-child(2){
            font-size: 32px;
            color:red;
            height: 70px;
            line-height: 70px;
          }
          &:nth-child(3){
            color:#b7b7b7;
          }
        }
      }
      &:nth-child(2){
        width:400px;
        li{
          font-size: 22px;
          height:36px;
          line-height: 36px;
          width:100%;
          &:nth-child(1){
            span{
              &::after{
                content: "";
                z-index:100;
                width: 80%;
              }
            }
          }
          &:nth-child(2){
            span{
              &::after{
                content: "";
                z-index:100;
                width: 40%;
              }
            }
          }
          &:nth-child(3){
            span{
              &::after{
                content: "";
                z-index:100;
                width: 20%;
              }
            }
          }
          &:nth-child(4){
            span{
              &::after{
                content: "";
                z-index:100;
                width: 10%;
              }
            }
          }
          p{
            position: relative;
            span{
              position: absolute;
              top: 15px;
              left: 55px;
              width: 280px;
              height: 5px;
              background: #ddd;
              &::after{
                position: absolute;
                top: 0px;
                width: 80%;
                height: 5px;
                background: #ffc82d;
              }
            }
            em{
              width:52px;
              display:inline-block;
              float:right;
              text-align: left;
            }
          }
        }
      }
    }
  }
  >ul{
    position: relative;
    margin-top: 12px;
    box-sizing: border-box;
    padding-left: 82px;
    padding-bottom: 20px;
    font-size: 20px;
    li{
      &:nth-child(1){
        font-size: 22px;
        font-weight: 700;
        height:40px;
        line-height: 30px;
      }
      &:nth-child(2){
        color:#b7b7b7;
        height:40px;
        line-height: 30px;
      }
      &:nth-child(3){
        color:#b7b7b7;
        height:40px;
        line-height: 30px;
      }
      &:nth-child(4){
        @include p(2)
        height: 62px;
        line-height: 30px;
      }
      &:nth-child(5){
        color:#b7b7b7;
        height:40px;
        line-height: 40px;
      }
      &:nth-child(6){
        @include list;
        margin-bottom: 6px;
        img{
          width:162px;
          height: 172px;
          &:nth-child(n+2){
            margin-left: 10px;
          }
        }
      }
      &:nth-child(7){
         text-align: right;
         .btn{
           background: #fff;
           color:#666;
           border-color: #b7b7b7;
           padding:8px 30px;
           border-radius: 30px;
         }
      }
      &:nth-child(8){
        text-align: center;
        margin-top: 20px;
        .btn{
          background: #fff;
          color:#666;
          border-color: #b7b7b7;
          font-size: 22px;
          padding:10px 20px;
          border-radius: 30px;
        }
      }
      &:nth-child(9){
        img{
           width:62px;
           height:62px;
           border-radius: 50%;
           position: absolute;
           top:0;
           left:0;
        }
      }
    }
  }
  .aside{
    position: fixed;
    bottom:30px;
    right:0px;
  }
  .mybtn{
    position: fixed;
    bottom:25%;
    right:0px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding:8px 20px;
    font-size: 22px;
  }
}
</style>

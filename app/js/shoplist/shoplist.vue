<template>
    <section :class="$style.section">
        <article>
            <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            <aside>
                <h4>【缤肌】VC活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养肤 深层补水 </h4>
                <ul>
                    <li>HDR显示<i/></li>
                    <li>立体声<i/></li>
                    <li>不足1cm边框<i/></li>
                </ul>
                <p><span>￥</span>39.90</p>
                <div><em>抢</em><i>满1000-100</i></div>
                <span><em>25万+评价</em><em>99%好评</em></span>
            </aside>
        </article>
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
  padding:0 20px;
  article{
    @include list;
    box-sizing: border-box;
    padding:20px 10px 20px 10px;
    position: relative;
    img{
      width: 160px;
      height: 166px;
      border: 2px solid #e23f2f;
      margin-right: 12px;
    }
    aside{
      width:400px;
      h4{
        font-size: 24px;
        line-height: 34px;
        @include p(2);
        height: 68px;
        font-weight: 500;
        flex-wrap: nowrap;
        overflow: hidden;
      }
      ul{
        margin-top: 10px;
        font-size: 22px;
        color:#a5a5a5;
        @include list;
        li{
          position: relative;
          padding-right: 20px;
          i{
            display: block;
            height: 100%;
            background: #767676;
            width:1px;
            position: absolute;
            right:10px;
            top:0;
          }
          &:last-child{
            i{
              display: none;
            }
          }
        }
      }
      p{
        width:100%;
        margin-top: 20px;
        font-size: 32px;
        color: #f60;
        span{
          font-size: 18px;
        }
      }
      >div{
        font-size: 18px;
        margin-top: 12px;
        em{
          background: #e23f2f;
          color:#fff;
          padding:0px 6px 1px 6px;
          border-radius: 6px;
          margin-right: 12px;
        }
        i{
          background: #e97b1f;
          color:#fff;
          padding:0px 6px 1px 6px;
          border-radius: 6px;
          margin-right: 12px;
        }
      }
      >span{
        margin-top: 14px;
        font-size: 20px;
        color:#b7b7b7;
        em{
          margin-right: 12px;
        }
      }
    }
  }
}
</style>

<template>
    <div :class="$style.div">
        <section :class="$style.section">
            <div :class="$style.panel">
                <div>
                    <h4>限时抢购 <span><i/>天天秒杀</span></h4>
                    <div><p>10点场 距离下场</p><p><span>00</span>:<span>47</span>:<span>53</span></p> </div>
                    <div>
                        <div>
                            <img src="//image3.suning.cn/uimg/nmps/MBLSPZT/100246004162899207picH_1_370x370.jpg" alt="">
                            <p>￥15.80</p>
                        </div>
                        <div>
                            <img src="//image1.suning.cn/uimg/nmps/MBLSPZT/100246004779565460picH_1_370x370.jpg" alt="">
                            <p>￥199</p>
                        </div>
                        <div>
                            <img src="//image2.suning.cn/uimg/nmps/MBLSPZT/10024652510687794617picH_1_370x370.jpg" alt="">
                            <p>￥4.99</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>苏宁Outlets <span><i/>大牌特卖</span></h4>
                    <p>9:30品牌上新 限时力度加码</p>
                    <div>
                        <img src="https://image1.suning.cn/uimg/b2c/qrqm/0010146192000000010583355206_200x200.jpg?ver=2000&from=mobile&from=mobile" alt="">
                        <img src="https://image1.suning.cn/uimg/b2c/qrqm/0010146192000000010523017117_200x200.jpg?ver=2000&from=mobile" alt="">
                    </div>
                </div>
            </div>
            <div :class="$style.article">
                <div>
                    <h4>好货</h4>
                    <p>有品质好物</p>
                    <img src="https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000129000123_200x200.jpg?ver=2011&from=mobile&from=mobile" alt="">
                </div>
                <div>
                    <h4>领券中心</h4>
                    <p>休闲零食券</p>
                    <img src="https://image3.suning.cn/uimg/cms/img/155160697887138452.jpg?format=_is_200w_200h.webp" alt="">
                </div>
                <div>
                    <h4>苏宁拼购</h4>
                    <p>2人拼更实惠 全场包邮</p>
                    <div>
                        <img src="https://image3.suning.cn/uimg/cms/img/154909070601375873.jpg?format=_is_200w_200h.webp" alt="">
                        <img src="https://image3.suning.cn/uimg/cms/img/154909070439442770.jpg?format=_is_200w_200h.webp" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
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
  .div{
    width:100%;
    padding-left: 18px;
    box-sizing: border-box;
    padding-right: 18px;
    .section{
      @include panel;
      @include flex;
      width: 100%;
      border-radius: 20px;
      .panel{
        height: 213px;
        @include flex(row);
        width:100%;
        border-bottom: 1px solid #ddd;
        >div{
            position: relative;
            height:100%;
            width: 49.9%;
            >h4{
              position: relative;
              z-index: 1;
              font-family: PingFangSC-Medium;
              font-size: 28px;
              letter-spacing: 0;
              line-height: 34px;
              overflow: hidden;
              height: 34px;
              margin: 15px 0 0 20px;
              color: #333;
              span{
                position: relative;
                overflow: hidden;
                height: 25px;
                margin: 19px 0 0 8px;
                padding: 0 12px 1px 18px;
                line-height: 27px;
                font-size: 18px;
                color: #FFF;
                border-radius: 12px;
                background-image: linear-gradient(-90deg,#ff4950 0,#ff8123 100%);
                vertical-align: 3px;
                i{
                  position: absolute;
                  width: 6px;
                  height: 6px;
                  opacity: .5;
                  background: #fff;
                  top: 8px;
                  left: 7px;
                  border-radius: 50%;
                }
              }
            }
            >div{
              &:nth-child(2){
                width:100%;
                line-height: 24px;
                p{
                  display: inline;
                  height: 24px;
                  font-size: 20px;
                  line-height: 25px;
                  color: #999;
                  white-space: nowrap;
                  margin: 3px 4px 0 17px;
                  text-align: center;
                  &:nth-child(2){
                    line-height: 25px;
                    span{
                      font-size: 16px;
                      color: #FFF;
                      display: inline-block;
                      margin: 0 2px;
                      width: 29px;
                      height: 24px;
                      background: #333;
                      border-radius: 7px;
                    }
                  }
                }
              }
              &:nth-child(3){
                @include list;
                position: relative;
                z-index: 1;
                width: 100%;
                box-sizing: border-box;
                margin: 5px 0 0 0;
                padding: 0 6px 0 6px;
                >div{
                  margin:auto;
                  text-align: center;
                  width: 86px;
                  img{
                    width: 86px;
                    height: 86px;
                  }
                  p{
                    font-size: 22px;
                    color: #000;
                    letter-spacing: 0;
                    line-height: 22px;
                    color: #F40;
                    margin-top: 5px;
                  }
                }
              }
            }
            &:nth-child(2){
              border-left:1px solid #ddd;
                >h4{
                    color: #FA4B49 !important;
                }
                >p{
                  width:100%;
                  line-height: 24px;
                  color: #999;
                  font-size: 20px;
                  margin: 3px 4px 0 17px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
                img{
                  width: 120px;
                  height: 120px;
                  background: 0;
                  margin:auto;
                }
            }
        }
      }
      .article{
        height: 213px;
        width: 100%;
        @include list;
        flex-wrap: nowrap;
        >div{
          h4{
            font-size: 28px;
            letter-spacing: 0;
            line-height: 34px;
            overflow: hidden;
            width: 129px;
            height: 34px;
            margin: 15px 0 0 20px;
            height: 34px;
            color: #333;
          }
          p{
            font-size: 20px;
            color: #999;
            overflow: hidden;
            margin: 3px 0 0 20px;
            width: 129px;
            height: 26px;
            line-height: 26px;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          img{
            width: 120px;
            height: 120px;
          }
          &:nth-child(1){
            width:24.9%;
            h4{
              color: #F840B1;
            }
          }
          &:nth-child(2){
            width:24.9%;
            border-left: 1px solid #ddd;
          }
          &:nth-child(3){
           width:49.8%;
           border-left: 1px solid #ddd;
           h4{
             color: #FF6A0C;
           }
           p{
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
             justify-content: space-around;
           }
          }
        }

      }
    }
  }


</style>

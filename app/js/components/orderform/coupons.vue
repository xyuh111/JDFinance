<template>
    <section :class="$style.section">
        <ul>
            <li><em>优惠卷</em><span>无可用</span></li>
            <li><p>实付款：<span>160</span>元</p></li>
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
.section{
  >ul{
    li{
      width:100%;
      height:80px;
      background: #f8f8f8;
      margin-top: 20px;
      &:nth-child(1){
        font-size: 22px;
        line-height: 80px;
        box-sizing: border-box;
        padding: 0 20px;
        span{
          float:right;
          &::after{
            content:'';
            margin-left: 14px;
            display: inline-block;
            border-left: 2px solid #b7b7b7;
            border-top:2px solid #b7b7b7;
            width:16px;
            height:16px;
            transform: rotate(0.368turn);
          }
        }
      }
      &:nth-child(2){
        p{
          line-height: 80px;
          font-size: 22px;
          color:#f60;
          text-align: right;
          margin-right: 20px;
          span{
            font-size: 36px;
            height:36px;
            line-height: 28px;
            width: 55px;
            font-weight: 600;
            margin-right: 3px;
          }
        }
      }
    }
  }
}
</style>

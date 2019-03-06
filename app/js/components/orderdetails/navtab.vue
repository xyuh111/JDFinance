<template>
    <section :class="$style.section">
        <Btn :cname="$style.btnleft">取消订单</Btn>
        <Btn :cname="$style.btns">立即付款</Btn>
    </section>
</template>
<script>
import Btn from "../../components/core/btn.vue"
export default {
    name: "",
    components: {
        Btn,
    },
    data: () => ({

    }),
}
</script>
<style lang="scss" module>
@import "../../../css/element.scss";
.section{
   width:100%;
   height:86px;
   position: fixed;
   bottom:0;
   left:0;
   right:0;
   // @include list;
   background: #fff;
   font-size: 24px;
   z-index:100;
   p{
     height:86px;
     line-height: 86px;
     text-align: left;
     position: absolute;
     left:20px;
     span{
       font-size: 36px;
       color:#f60;
       margin-right: 2px;
       vertical-align:-3px;
     }
   }
   .btnleft{
     height: 50px !important;
     line-height: 50px !important;
     font-size: 29px !important;
     border-radius: 30px !important;
     padding:6px 56px !important;
     margin-top: 10px !important;
     margin-left: 40px !important;
     float: left !important;
     background: transparent !important;
     color:#666 !important;
     border-color: #b7b7b7 !important;
   }
  .btns{
    height: 50px !important;
    line-height: 50px !important;
    font-size: 29px !important;
    border-radius: 30px !important;
    padding:6px 56px !important;
    margin-top: 10px !important;
    margin-right: 40px !important;
    float: right !important;
  }
}
</style>

<template>
    <section :class="$style.section">
        <div>合计：<p>￥{{ cartsMoney }}</p><em>元</em></div>
        <Btn :cname="$style.btns">去结算(<p>{{ cartsMoney }}</p>)</Btn>
    </section>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex"
import Btn from "../components/core/btn.vue"
export default {
    name: "",
    components: {
        Btn,
    },
    data: () => ({

    }),
    computed: {
        ...mapGetters({
            cartsMoney: "cart/cartsMoney",
        }),
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
   width:100%;
   height:86px;
   position: fixed;
   bottom:0;
   left:0;
   right:0;
   @include list;
   background: #fff;
   font-size: 24px;
   z-index:100;
   justify-content: space-between;
   box-sizing: border-box;
   padding-left: 20px;
   >div{
     height:86px;
     line-height: 86px;
     text-align: left;
     flex-grow: 1;
     @include list;
     >p{
       font-size: 36px;
       color:#f60;
       margin-right: 2px;
       vertical-align:-3px;
       max-width: 5em;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
     }
   }
  .btns{
    height: 50px !important;
    line-height: 50px !important;
    font-size: 29px !important;
    border-radius: 30px !important;
    padding:6px 30px !important;
    margin-top: 10px !important;
    margin-right: 20px !important;
    flex-grow: 1;
    p{
      display:inline;
      font-size: 29px !important;
      width:200px;
      color:#fff;
      margin-right: 2px;
      vertical-align:-3px;
      max-width: 5em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

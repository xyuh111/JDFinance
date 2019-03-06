<template>
    <section :class="$style.section">
        <a href=""/>
        <h4>订单</h4>
        <ul>
            <li>
                <input id="1" type="radio" name="order">
            <label for="1">全部</label></li>
            <li>
                <input id="2" type="radio" name="order">
            <label for="2">待付款</label></li>
          </li>
            <li>
                <input id="3" type="radio" name="order">
            <label for="3">待核销</label></li>
          </li>
            <li>
                <input id="4" type="radio" name="order">
            <label for="4">已完成</label></li>
          </li>
            <li>
                <input id="5" type="radio" name="order">
            <label for="5">已退款</label></li>
          </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "",
    data: () => ({
        editor: false,
    }),
    methods: {
        oneditor() {
            if (this.editor) {
                this.editor = false
            }
            else {
                this.editor = true
            }
        },
    },
}
</script>
<style lang="scss" module>
@import "../../../css/element.scss";
.section{
  position: relative;
  background: #fff;
  @include list;
  >a{
    display: block;
    position: relative;
    left: 4px;
    top: 0;
    width: 10%;
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
    text-align: left;
  }
  ul{
   input{
     display: none;
   }
   @include list;
   width:100%;
   height: 80px;
   line-height: 80px;
   border-top: 1px solid #b7b7b7;
   justify-content: space-around;
   li{
     font-size: 26px;
     position:relative;
     input:checked + label{
       color:#f60;
       &::after{
         content:'';
         width:100%;
         height: 4px;
         background: #f60;
         position: absolute;
         bottom:10px;
         left:0px;
       }
     }
   }
  }
}
</style>

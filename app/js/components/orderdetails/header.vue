<template>
    <section :class="$style.section">
        <a href=""/>
        <h4>订单详情</h4>
        <div>
            <h4>待付款</h4>
            <p>请在下单后3分钟内付款，超时订单将自动关闭</p>
        </div>
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
  background: #ff6302;
  @include list;
  margin:0;
  padding:0;
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
      border: solid #fff;
      border-width: 1px 0 0 1px;
      -webkit-transform: rotate(-45deg);
    }
  }
  >h4{
    line-height: 75px;
    font-size: 26px;
    color:#fff;
    text-align: left;
  }
  >div{
    background: #ff6302;
    height:224px;
    width: 100%;
    >h4{
      font-size: 40px;
      color:#fff;
      line-height: 80px;
      width: 100%;
      text-align: center;
    }
    p{
      font-size: 22px;
      color:#fff;
      width:100%;
      text-align: center;
    }
  }
}
</style>

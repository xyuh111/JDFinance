<template>
    <section :class="$style.section">
        <a href=""/>
        <h4>购物车</h4>
        <div>
            <!-- <p @click="oneditor">{{ editor?'编辑':'完成' }}</p> -->
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
@import "../../css/element.scss";
.section{
  position: relative;
  background: #fff;
  @include list;
  flex-wrap:nowrap;
  >a{
    display: block;
    position: relative;
    left: 4px;
    top: 0;
    width: 19%;
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
    width: 60%;
    margin: 0 auto;
    color: #333;
    text-align: center;
  }
  >div{
    width:19%;
    font-size: 26px;
    p{
      position: absolute;
      top:23px;
      right:25px;
      z-index:100;
    }
  }
}
</style>

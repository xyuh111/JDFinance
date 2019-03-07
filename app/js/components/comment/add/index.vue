<template>
    <section :class="$style.section">
        <header>
            <a href=""/>
            <h4>发表评论</h4>
            <p>发布</p>
        </header>
        <AddInput/>
    </section>
</template>
<script>
import AddInput from "./add.vue"
export default {
    name: "",
    components: {
        AddInput,
    },
}
</script>
<style lang="scss" module>
@import "../../../../css/element.scss";
.section{
  header{
    position: relative;
    background: #fff;
    @include list;
    flex-wrap:nowrap;
    >a{
      display: block;
      position: relative;
      left: 4px;
      top: 0;
      width: 33.33%;
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
      width:33.33%;
      line-height: 75px;
      font-size: 26px;
      border-bottom: 1px solid #DCDCDC;
      color: #333;
      text-align: center;
    }
    >p{
      height:100%;
      width:33.33%;
      line-height: 75px;
      font-size: 26px;
      border-bottom: 1px solid #DCDCDC;
      color: #f60;
      text-align: right;
      box-sizing: border-box;
      padding-right: 20px;
    }
  }
}
</style>

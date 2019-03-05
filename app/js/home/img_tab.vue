<template>
    <section :class="$style.panel">
        <img src="https://image3.suning.cn/uimg/cms/img/155144413570245147.gif" alt="">
        <div>
            <img src="https://image1.suning.cn/uimg/cms/img/155152043675786274.png?from=mobile" alt="">
            <img src="https://image3.suning.cn/uimg/cms/img/155144270446440256.png?from=mobile" alt="">
            <img src="https://image1.suning.cn/uimg/cms/img/155145233715112282.jpg?from=mobile" alt="">
            <img src="https://image1.suning.cn/uimg/cms/img/155160558334342257.png?from=mobile" alt="">
        </div>
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
  .panel{
    @include panel;
    >img{
      width:100%;
      height: 180px;
    }
    div{
      @include list;
      img{
        width:50%;
        height: 129px;
      }
    }
  }
</style>

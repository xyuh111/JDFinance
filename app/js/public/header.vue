<template lang="html">
    <div :class="show?'yellow':''" class="header">
        <div class="left">
            <router-link :to="{ name: 'home'}">分类</router-link>
        </div>
        <div class="center">
            <router-link :to="{ name: 'home'}">西门子超级品牌日</router-link>
        </div>
        <p class="right">登陆</p>
    </div>
</template>

<script>
import btn from "../core/btn.vue"
export default {
    components: {
        btn,
    },
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.scrollY >= 100) {
                this.show = true
            }
            else {
                this.show = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    &.yellow{
      background-image: url("https://image2.suning.cn/uimg/cms/img/155054496620371775.png");
    }
    position: fixed;
    top: 0;
    border-bottom: 0;
    width:100%;
    height:77px;
    background: transparent;
    background-size:640px 75px;
    z-index:100;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left {
      font-size: 24px;
      display: block;
      line-height: 66px;
      a{
        color:#fff;
      }
    }
    .center{
      width:480px;
      height:75px;
      word-wrap: break-word;
      word-break: break-all;
      box-sizing: border-box;
      line-height: 75px;
      a{
        display:block;
        border: 0;
        -webkit-border-radius: 25px;
        box-sizing: border-box;
        padding: 2px 17px 0 49px;
        width: 480px;
        height: 51px;
        line-height: 51px;
        background: rgba(255,255,255,0.8);
        font-size: 20px;
        color: #999;
        -webkit-appearance: none;
        margin-top:12px;
      }
    }
    .right {
        font-size: 24px;
        line-height: 66px;
        color:#fff;
    }
}
</style>

<!-- 导航条 -->
<template lang="html">
    <Panel :class="$style.panel" title="导航条">
        <ul :class="$style.content">
            <li>
                <router-link :to="{name: 'home'}">
                    <img src="https://image3.suning.cn/uimg/cms/img/154518776698618357.png?from=mobile" alt="">
                    <p>
                        首页
                    </p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'class'}">
                    <img src="https://image3.suning.cn/uimg/cms/img/154518777766983546.png?from=mobile" alt="">
                    <p>
                        分类
                    </p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'list'}">
                    <img src="https://image3.suning.cn/uimg/cms/img/154518778584812163.png?from=mobile" alt="">
                    <p>
                        必抢清单
                    </p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'cart'}">
                    <img src="https://image3.suning.cn/uimg/cms/img/154518779385872504.png?from=mobile" alt="">
                    <p>
                        购物车
                    </p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'users'}">
                    <img src="https://image2.suning.cn/uimg/cms/img/154518780211077845.png?from=mobile" alt="">
                    <p>
                        我的易购
                    </p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue"
export default {
    name: "",
    components: {
        Panel,
    },
    data: () => ({
    }),
}
</script>
<style lang="scss" module>
  @import "../../css/element.scss";
  .panel{
    @include panel;
    position: fixed;
    left:0;
    right:0;
    height:100px;
    bottom:0;
    margin:0 !important;
    z-index: 100;
    >h4{
      display: none;
    }
    .content{
      @include flex(row);
      justify-content: space-around;
      li{
        text-align:center;
        a{
          text-decoration: none;
        }
        img{
          margin: 12px auto 6px;
          width:44px;
          height: 44px;
        }
        p{
          font-size: 22px;
          color:#656565;
        }
      }
    }
  }
</style>

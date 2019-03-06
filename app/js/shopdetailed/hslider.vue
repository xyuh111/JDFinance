<template lang="html">
    <article :class="$style.article">
        <Slider :items="items" :cname="$style.slider" :options="options"/>
        <div>
            <h4>9.90<span>元</span><em>19.90元</em></h4>
            <p>南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜南极人(NanJiren)5双装 男女款兔羊毛袜 秋冬款加厚保暖中筒袜兔羊毛袜</p>
            <p><em>女款兔羊毛袜 秋冬款加</em><em>已售7755555份</em></p>
            <ul :id="$style.dl">
                <li>随时退</li>
                <li>购买3天内生效</li>
            </ul>
        </div>
    </article>
</template>
<script>
import Slider from "../components/core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                        href: "shop",
                        src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/17122/13/8273/37518/5c73d5dfEab419177/986b987ab7c22514.jpg",
                    },
                    {
                        href: "shop",
                        src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/21437/13/8246/46685/5c73d555Ebbda75ab/1a476fb2010b79f8.jpg",
                    },
                    {
                        href: "shop",
                        src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/21437/13/8246/46685/5c73d555Ebbda75ab/1a476fb2010b79f8.jpg",
            }],
            options: {
                // 自滚动
                autoplay: true,
                // 循环
                loop: true,
                // 是否设置 。。。指示器
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },
                // 点击的事件
                notNextTick: false,
            },

        }
    },
}
</script>
<style lang="scss" module>
  @import "../../css/element.scss";
  .article{
    .slider{
      width: 100%;
      height:444px;
      >div{
        width: 100%;
        height:444px;
      }
      img{
        height:100%;
        width:100%;
      }
    }
    >div{
      @include panel;
      margin-top: 0;
      padding: 20px;
      >h4{
        padding:0;
        font-size: 34px;
        color:red;
        font-weight: 700;
        line-height: 46px;
        span{
          font-size: 18px;
        }
        em{
          font-size: 18px;
          color:#b7b7b7;
          text-decoration: line-through;
          margin-left: 6px;
        }
      }
      >p{
        @include p(1);
        font-size: 28px;
        font-weight: 700;
        line-height: 32px;
        height: 34px;
        margin-top: -14px;
        &:nth-child(3){
          width:100%;
          margin-top:0px;
          font-size: 18px;
          color:#b7b7b7;
          line-height: 55px;
          height:55px;
          border-bottom:1px solid #b7b7b7;
          em{
            &:nth-child(2){
              float:right;
            }
          }
        }
      }
      >ul{
          font-size: 18px;
          color:#b7b7b7;
          line-height: 30px;
          margin-left: 28px;
          position: relative;
          box-sizing: border-box;
          padding-top: 16px;
          // &:nth-child(1){
            // &::after{
            //   display: block;
            //    content:' ';
            //    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE20lEQVRYR8VXbWhcRRQ952202U3MRgWllfpVqxWVIirtD2mp9ENJVSpatRVEbQ0YBEnyZnatPx6IZt/sJkExgoIWKSim2KrYiLW0WD/aCrX+sIKiTZVWqVRESDZh3X1XpryNm81udhtb+v7tzsw9Z+6cufcMcY4/nmN81E3A87zGxsbGpSTvBLCY5KUA5gDIi8gJAL+RPEByqKWl5fP29vZ/6tlcXQR8318P4CWSF9cTFMBxkk+7rru91vxpCfT398/O5XJvkVxhA4nInyRt0PdEZNhxnGOzZs2K5HK5OYVC4VoA95FcA6AlBP7AcZwN3d3dJ6sRqUoglUq1kdxC8kIROSoiL46Pj2/2PC8/3a7sUcVisY0ikiQ5G8AfIvKQ1npPpXUVCRhjVgL4pLiLbDa71vO8XK10lo57nheLRqPbSK4SkYDkEqXUl+UxphDIZDJXBEHwLYBWAP1Kqc7TAS4j4cRisdcAbLBCzefzCzdt2mQFO/FNIWCM2Q9gEYCPlFJ3zxS8uM7zPCcaje4iuUxEdmitV1clYIx5GMDbVsUNDQ3zOzs7x/4vAbs+lUrFHcc5AuAiAKuUUjuLcScyICJMp9O/AJhLcr3rupbIGfuMMR0AXgHwvVLqhikEfN+3xWWfiBzRWs87Y8hhIM/zGmKx2HEAl4jIAq31D3ZoIgPGmBcAPCsifVrrrpkSCNO9F8A8kje5rjtcjOX7/pskHwPgKqUykwj4vv+ZvSoislJr/elMCFhwkntI3mzXi8garfX7xVjGmAcADIrIh1rre8szYEVyVaFQmJ9MJn8qLspkMgtEpMF13e+mIzUwMNA8MjKytwgOYGc8Hl9d2hMymcxtQRB8DeAbpdQtEwSsAI0xOZINTU1NF3R0dIzYQd/3ryd5EECjiDyqtd5SiYQFHx0d3RVeXztldzabbfM8b7x0fm9v79xCofCrrY5KKdvMJmnAVrrz4vH4+UXWqVRqoeM4tijZdNpqtk4p9W5p0HJwEflibGxsRTm4XdPX13dZPp8/JiK/a61tJ/2PgO/7P5O8uvwIfN9/hmR/CFoAcI9Sasj+rgK+yvO8bKVMlRzBQaXUrRVFaDuf67o2nRNfKQkRyTmO0zY6OvpVLBbbXZL2A9ls9o5q4OGR3k9yazURPg/gOQC9Sqnu8h2UkRgneRjAKSEBONDU1LS8qJ1qYjXGvAHg8SAIuhKJRN+kDKTT6UUisn+6QlR2HKdwRORQc3Pzklrgg4ODkeHh4RPW1EQikeu6urp+nEQgvAlHSV4OwIrtnUo7McYkAPQUwUVkWSKR+Hu6Kxqm/ymSAyJyWGt9Y3H+pG5YbzMyxjwoItcEQfBqMpn8qxZ4WKCGQ3MzqdBNace+7+8juRjAVqXU2lrBa43bdhyKdSmAIaVUW+maKQR6enqujEQih0JDUlGQtUCL46EXeJ3kE3UbErvYGGOt98dhoK3ZbPaR07VkYY2wBna5LWKO49zuuu6+cvJ1m1KSPfF4fHMtv29NaTQafRJAYsamtMgytOWbrbEM/zspIttJbqtky60ltx2QZDy8JdsikUj7jGx5aarS6fS6IAhervdhYmu9iGxMJBI7aumlrpeRDVJ8mjmOc5eILKr0NANgW+1Qa2vr3lpHVbEO1GJ7NsbrzsDZALcx/wWt0Wk/nVF3wQAAAABJRU5ErkJggg==);
            //    background-size: 40px 40px;
            //    position: absolute;
            //    top:0;
            //    left:0;
            //    z-index:100;
            // }
          // }
          // &:nth-child(2){
          //   font-size: 18px !important;
          //   // &::after{
          //   //
          //   // }
          // }
      }
    }
}


</style>

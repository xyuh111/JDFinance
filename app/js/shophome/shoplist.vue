<template>
    <div ref="apps">
        <Panel :cname="$style.section" title="热卖商品">
            <article v-for="(item,index) in goodsData" :key="index">
                <img ref="thumb" :src="item.thumb" alt="">
                <h4>{{ item.title }}</h4>
                <span>已售8130份</span>
                <p>{{ item.money }}<em>元</em><span>58元</span></p>
                <i @click="addCart(item,index,$event)"/>
            </article>
            <router-link :to="{ path: '/cart'}">
                <aside>
                    <i id="cartNum" ref="cartIcon"/>
                    <p>{{ cartsMoney }}<span>元</span></p>
                </aside>
            </router-link>
        </Panel>
    </div>

</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex"
import Panel from "../components/core/panel.vue"
export default {
    name: "",
    components: {
        Panel,
        thumbs: [],
    },
    data: () => ({
        goodsData: [
            {
                id: 6523,
                title: "Herman Miller Embody 座椅 标准配置【Rhythm织物】",
                thumb: "https://gw.alicdn.com/bao/uploaded/i2/TB1cWOpLXXXXXXIaXXXXXXXXXXX_!!2-item_pic.png",
                money: "130.00",
            },
            {
                id: 6709,
                title: "Aucma/澳柯玛 YCD-265医用冰箱冷藏冷冻冰柜立式双温家用商用冷柜",
                thumb: "https://gw.alicdn.com/bao/uploaded/i4/2330966844/TB1upqLgMaTBuNjSszfXXXgfpXa_!!0-item_pic.jpg",
                money: "7399.00",
            },
            {
                id: 6562,
                title: "兰蔻清滢柔肤水400ml 粉水舒缓滋润补水保湿爽肤水嫩肤滋养水润",
                thumb: "https://img.alicdn.com/bao/uploaded/i4/2360209412/TB2sBG1znJYBeNjy1zeXXahzVXa-2360209412.png_400x400q60.jpg",
                money: "420.00",
            },
            {
                id: 6669,
                title: "科沃斯扫地机器人地宝DJ35吸尘器智能家用超薄全自动洗擦地机拖地",
                thumb: "https://img.alicdn.com/bao/uploaded/i1/420722466/TB2vNgWg26TBKNjSZJiXXbKVFXa_!!420722466.png_400x400q60.jpg",
                money: "1899.00",
            },
        ],
    }),
    computed: {
        ...mapGetters({
            cartsMoney: "cart/cartsMoney",
        }),
    },
    methods: {
        /* 点击加入购物车 */
        addCart(goods, index) {
            /* 先判断购物车中是否存在该商品 */
            const hasGoods = this.$store.getters["cart/hasGoods"](goods)
            // console.log("hasGoods", hasGoods)
            /* 如果不存在则添加到购物车，如果存在则+1 */
            if (!hasGoods) {
                goods.num = 1
                this.$store.dispatch("cart/create_goods_to_cart", goods)
            }
            else {
                this.$store.dispatch("cart/add_goods_from_cart", goods)
            }
            /* 获取图片的URL */
            const target = this.$refs.thumb[index]
            const imgPath = target.getAttribute("src")
            // console.log("imgPath", imgPath)
            /* 获取原图片的位置 */
            const top = target.getBoundingClientRect().top
            const left = target.getBoundingClientRect().left
            /* 创建一个缩略图标签 */
            const copyThumb = document.createElement("img")
            /* 为缩略图添加图片路径 */
            copyThumb.setAttribute("src", imgPath)
            copyThumb.setAttribute("style", `position: fixed;left: ${left}px;top:${top}px;width:0px;height:0px;z-index:1000`)
            copyThumb.setAttribute("class", "copyThumb")
            /* 获取购物车图标的位置 */
            const cartIcon = document.getElementById("cartNum")
            const iconTop = cartIcon.getBoundingClientRect().top
            const iconLeft = cartIcon.getBoundingClientRect().left
            /* 缩略图下落动画样式 */
            const animation = `
                       /*下落动画*/
                       @-webkit-keyframes drop {
                         0% {
                           width: 7.25rem;
                           height: 5.3rem;
                         }
                         18%{
                           left: ${left + -20}px;
                           top: ${top + 40}px;
                           border-radius: 20%;
                         }
                         100% {
                           width: 1.15rem;
                           height: 1.15rem;
                           left: ${iconLeft}px;
                           top: ${iconTop}px;
                           border-radius: 50%;
                           -webkit-transform: rotate(-180deg);
                           -moz-transform: rotate(-180deg);
                           -o-transform: rotate(-180deg);
                           -ms-transform: rotate(-180deg);
                         }
                       }
                       @-moz-keyframes drop {
                         0% {
                           width: 7.25rem;
                           height: 5.3rem;
                         }
                         18%{
                           left: ${left + -20}px;
                           top: ${top + 40}px;
                           border-radius: 20%;
                         }
                         100% {
                           width: 1.15rem;
                           height: 1.15rem;
                           left: ${iconLeft}px;
                           top: ${iconTop}px;
                           border-radius: 50%;
                           -webkit-transform: rotate(-180deg);
                           -moz-transform: rotate(-180deg);
                           -o-transform: rotate(-180deg);
                           -ms-transform: rotate(-180deg);
                         }
                       }
                       @-o-keyframes drop {
                         0% {
                           width: 7.25rem;
                           height: 5.3rem;
                         }
                         18%{
                           left: ${left + -20}px;
                           top: ${top + 40}px;
                           border-radius: 20%;
                         }
                         100% {
                           width: 1.15rem;
                           height: 1.15rem;
                           left: ${iconLeft}px;
                           top: ${iconTop}px;
                           border-radius: 50%;
                           -webkit-transform: rotate(-180deg);
                           -moz-transform: rotate(-180deg);
                           -o-transform: rotate(-180deg);
                           -ms-transform: rotate(-180deg);
                         }
                       }
                       @-ms-keyframes drop {
                         0% {
                           width: 7.25rem;
                           height: 5.3rem;
                         }
                         18%{
                           left: ${left + -20}px;
                           top: ${top + 40}px;
                           border-radius: 20%;
                         }
                         100% {
                           width: 1.15rem;
                           height: 1.15rem;
                           left: ${iconLeft}px;
                           top: ${iconTop}px;
                           border-radius: 50%;
                           -webkit-transform: rotate(-180deg);
                           -moz-transform: rotate(-180deg);
                           -o-transform: rotate(-180deg);
                           -ms-transform: rotate(-180deg);
                         }
                       }
                       /*新建的缩略图节点*/
                       .copyThumb {
                         -webkit-animation: drop .7s ease-in-out;
                         -moz-animation: drop .7s ease-in-out;
                         -ms-animation: drop .7s ease-in-out;
                         -o-animation: drop .7s ease-in-out;
                       }
                     `
            /* 将下落动画插入根部 */
            document.getElementsByTagName("style")[0].innerHTML += animation
            /* 获取app的dom节点 */
            const container = this.$refs.apps
            /* 重复点击时会生成多张缩略图，将其存入thumbs数组中 */
            this.thumbs = document.getElementsByClassName("copyThumb")
            // console.log("缩略图数组长度", document.getElementsByClassName("copyThumb"))
            /* 将新建的多余的缩略图从app的dom中移除，避免快速重复点击时重复动画 */
            if (this.thumbs.length > 0) {
                container.removeChild(this.thumbs[0])
            }
            /* 将缩略图挂载在app上 */
            container.appendChild(copyThumb)
        },
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
  @include panel;
  @include list;
  justify-content: space-between;
  background: #f2f2f2 !important;
  margin-top: 0px !important;
  padding-bottom: 100px !important;
  >h4{
    &:nth-child(1){
      width:100%;
    }
  }
  article{
    @include flex;
    border-radius: 12px;
    box-sizing: border-box;
    position: relative;
    background: #ffff;
    padding-bottom: 30px;
    width:290px;
    margin-bottom: 20px;
    img{
      width: 290px;
      height: 212px;
      border: 1px solid #d8d8d8;
      margin-right: 12px;
      border-radius: 12px 12px 0 0;
    }
    h4{
      width:100%;
      box-sizing: border-box;
      padding: 0 18px;
      font-size: 24px;
      line-height: 34px;
      @include p(1);
      height: 34px;
      margin-top: 12px;
    }
    >span{
      font-size: 20px;
      color:#b7b7b7;
      margin-top: 58px;
      box-sizing: border-box;
      padding: 0 18px;
    }
    p{
      line-height: 36px;
      font-size: 32px;
      color:#f60;
      margin-right: 20px;
      margin-top: 14px;
      box-sizing: border-box;
      padding: 0 18px;
      em{
        margin-right: 10px;
        font-size: 22px;
        vertical-align: 2px;
      }
      span{
        font-size: 22px;
        color:#b7b7b7;
        text-decoration: line-through;
      }
    }
    i{
      background: url(http://web.web3n.com/cart.png) no-repeat;
      background-size: 50px 50px;
      width:50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      position:absolute;
      right:14px;
      bottom:45px;
    }
  }
  aside{
    background: #3f3f3f;
    height:76px;
    border-radius: 0 38px 38px 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 76px;
    text-align: right;
    color:#fff;
    position: fixed;
    bottom:54px;
    left:-20px;
    p{
      margin-left:88px;
      margin-right: 20px;
    }
    span{
      font-size: 22px;
      margin-right: 25px;
    }
    i{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAfCAYAAACVgY94AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJy2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA0ZTJkYzY2LTBkMjMtNmI0YS04ZjBkLTI3N2E1MGQzZjJkYiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNGZmMjE1Yy03NjFkLTIyNGUtYWIyMi1jYzNlMGY5OGUzNzYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iRjE1ODBDRjNFOTIzM0VCOTA5MjJBMDk0RkVGNzU3OTMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB0aWZmOkltYWdlV2lkdGg9IjEwODAiIHRpZmY6SW1hZ2VMZW5ndGg9IjE5MjAiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WFJlc29sdXRpb249IjEvMSIgdGlmZjpZUmVzb2x1dGlvbj0iMS8xIiB0aWZmOlJlc29sdXRpb25Vbml0PSIxIiBleGlmOkV4aWZWZXJzaW9uPSIwMjIxIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTA4MCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjE5MjAiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAzLTA1VDE1OjQ1OjE1KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wMy0wN1QxNDoxOTozNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMy0wN1QxNDoxOTozNSswODowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdhMDU5OTIyLThhZTQtNmI0Yy1hOTgyLWNmMzNlZTBmZTNjYSIgc3RFdnQ6d2hlbj0iMjAxOS0wMy0wN1QxNDoxOTozNSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTRmZjIxNWMtNzYxZC0yMjRlLWFiMjItY2MzZTBmOThlMzc2IiBzdEV2dDp3aGVuPSIyMDE5LTAzLTA3VDE0OjE5OjM1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YTA1OTkyMi04YWU0LTZiNGMtYTk4Mi1jZjMzZWUwZmUzY2EiIHN0UmVmOmRvY3VtZW50SUQ9IkYxNTgwQ0YzRTkyMzNFQjkwOTIyQTA5NEZFRjc1NzkzIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9IkYxNTgwQ0YzRTkyMzNFQjkwOTIyQTA5NEZFRjc1NzkzIi8+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkYxNTgwQ0YzRTkyMzNFQjkwOTIyQTA5NEZFRjc1NzkzPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx0aWZmOkJpdHNQZXJTYW1wbGU+IDxyZGY6U2VxPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvdGlmZjpCaXRzUGVyU2FtcGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqDLM5QAAAobSURBVFiFfZjbjxxXWsB/3zmnqqu7p7sn45nxJXaMnU12s0nIWquEoERkyYJgBc+LEBK8IZD4B3jjP+BlnxASSCDYh2XRwgOCjRYIrLIJi9iNs3ESx5fs2B7bc+1rdV3O9/FQPWM7Hruk6q5zqs45v/Pdq2Tltd/h7PR9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) no-repeat;
      background-size: 50px 50px;
      width:50px;
      height: 50px;
      border-radius: 50%;
      display: block;
      position:absolute;
      left:30px;
      bottom:16px;
    }
  }
}
</style>

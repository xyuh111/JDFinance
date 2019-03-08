<template>
    <div>
        <section v-if="cartGoodsList.length!=0" :class="$style.section">
            <dl>
                <dt><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAABnZ2dnZ2dmZmZnZ2dmZmZnZ2d8fHxnZ2dra2toaGhnZ2dnZ2dmZmZubm5mZmZnZ2dnZ2dnZ2dmZmZmZmZoaGhqampra2tnZ2dnZ2dnZ2doaGhoaGhnZ2dmZmZnZ2dnZ2dnZ2dpaWlpaWlpaWlmZmb8zhRjAAAAJXRSTlMA+aPUmfSVBncXRWG5qRDkwZ7s6N09KgzLvGdTI8ivh4FuNh5O4iW6KAAAAP9JREFUOMvl01mWgyAUBNBCQRQ0zmbQpDN07X+LLcrxC3oDud+cevU4gNVyYVA6YVeKJEg12GhVIagVZzgjbwiyNHByTgj68Gev0COi3kusFSISoQEY3hBx20q0LBBRULolS0RdO42ZFlGWv6jEGVEnkaC+4h/NANEexzW88xGaKNRHR/mC98qOlgMq5bd8s/YRuubb77l2MEz2ASmZY5OT6QlOxRFomRSASWnvYsZqFnfL1ACfitIFtmSvqCyWgc3z2XBYYBVVT0oNZ5TlIy/cGKlIJV18kT/KbPQjLzjoadI4XPZSkohg9k0HstirLfzHMezToI7G33UngrocwB+XtBTIhGe+MAAAAABJRU5ErkJggg==" alt="">
                    <span>云上花开美妆护肤专营店</span>
                </dt>
                <dd>清空购物车</dd>
            </dl>
            <article v-for="(item, index) in cartGoodsList" :key="index">
                <img :src="item.thumb" alt="">
                <h4>{{ item.title }}</h4>
                <p>￥{{ item.money }}</p>
                <div>
                    <span @click="reduceGoods(item)">-</span>
                    <input v-model.number="item.num" type="text" value="1" @blur="handleBlur(item)">
                    <span @click="increaseGoods(item)">+</span>
                </div>
            </article>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex"
export default {
    name: "",
    data: () => ({
    }),
    computed: {
        ...mapState({
            cartGoodsList: (state) => state.cart.cart,
        }),
    },
    methods: {
        ...mapActions({
            deleteGoodsFromCart: "cart/delete_goods_from_cart",
            reduceGoodsFromCart: "cart/reduce_goods_from_cart",
            addGoodsFromCart: "cart/add_goods_from_cart",
            modifyGoodsNumFromCart: "cart/modify_goods_num_from_cart",
        }),
        /* 删除商品 */
        deleteGoods(index, goods) {
            this.deleteGoodsFromCart(goods)
        },
        reduceGoods(goods) {
            this.reduceGoodsFromCart(goods)
        },
        increaseGoods(goods) {
            this.addGoodsFromCart(goods)
        },
        modifyNum(goods, num) {
            this.modifyGoodsNumFromCart({ goods, num })
        },
        /* 监听购物车修改商品数量 */
        handleBlur(goods) {
            /* 计算购物车的数量 */
            const num = goods.num == "" ? 1 : goods.num
            console.log("num", num)
            this.modifyGoodsNumFromCart({ goods, num })
        },
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
body{
    background: #f2f2f2;
}
.section{
  @include panel;
  padding:0;
  dl{
    height:77px;
    width:100%;
    @include list;
    padding-left: 10px;
    padding-right:10px;
    dt{
               width:50%;
      img{
         width:24px;
         height:24px;
         margin-left: 20px;
         margin-top: 20px;
         float: left;
      }
       span{
         margin-top: 20px;
         padding-left: 12px;
         width:300px;
         @include p(1);
         font-size: 24px;
         width:200px;
         height: 24px;
       }
    }
    dd{
      font-size: 24px;
      color:red;
      margin-top: 20px;
      text-align: right;
      width:50%;
    }
  }
  article{
    @include list;
    background: #f8f8f8;
    box-sizing: border-box;
    padding:20px 25px 30px 25px;
    position: relative;
    &:nth-child(n+3){
      margin-top: 20px;
    }
    img{
      width: 193px;
      height: 193px;
      border: 1px solid #d8d8d8;
      margin-right: 12px;
    }
    h4{
      width:350px;
      font-size: 24px;
      line-height: 34px;
      @include p(2);
      height: 68px;
    }
    p{
      width:100%;
      text-align: center;
      margin-top: 30px;
       font-size: 22px;
       color: #f60;
    }
    div{
      position: absolute;
      bottom: 20px;
      right: 10px;
      width: 180px;
      line-height: 36px;
      border: 1px solid #b7b7b7;
      overflow: hidden;
      border-radius: 20px;
      input{
        float: left;
        width: 68px;
        height: 36px;
        border: 0;
        background: #FFF;
        text-align: center;
        line-height: 36px;
        font-size: 20px;
        border-left: 1px solid #b7b7b7;
        border-right: 1px solid #b7b7b7;
      }
      span{
        float: left;
        font-size: 50px;
        height:36px;
        line-height: 28px;
        width: 55px;
        color: #666;
        text-align: center;
        font-weight: 100;
      }
    }
  }
}
</style>

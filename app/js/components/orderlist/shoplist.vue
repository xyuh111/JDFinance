<template>
    <section :class="$style.section">
        <dl>
            <dd><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAABnZ2dnZ2dmZmZnZ2dmZmZnZ2d8fHxnZ2dra2toaGhnZ2dnZ2dmZmZubm5mZmZnZ2dnZ2dnZ2dmZmZmZmZoaGhqampra2tnZ2dnZ2dnZ2doaGhoaGhnZ2dmZmZnZ2dnZ2dnZ2dpaWlpaWlpaWlmZmb8zhRjAAAAJXRSTlMA+aPUmfSVBncXRWG5qRDkwZ7s6N09KgzLvGdTI8ivh4FuNh5O4iW6KAAAAP9JREFUOMvl01mWgyAUBNBCQRQ0zmbQpDN07X+LLcrxC3oDud+cevU4gNVyYVA6YVeKJEg12GhVIagVZzgjbwiyNHByTgj68Gev0COi3kusFSISoQEY3hBx20q0LBBRULolS0RdO42ZFlGWv6jEGVEnkaC+4h/NANEexzW88xGaKNRHR/mC98qOlgMq5bd8s/YRuubb77l2MEz2ASmZY5OT6QlOxRFomRSASWnvYsZqFnfL1ACfitIFtmSvqCyWgc3z2XBYYBVVT0oNZ5TlIy/cGKlIJV18kT/KbPQjLzjoadI4XPZSkohg9k0HstirLfzHMezToI7G33UngrocwB+XtBTIhGe+MAAAAABJRU5ErkJggg==" alt="">
                <span>云上花开美妆护肤专营店</span>
                <em>待核销</em>
            </dd>
        </dl>
        <article>
            <i/>
            <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            <h4>【缤肌】VC活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养肤 深层补水</h4>
            <p><em>共4件</em><span>69元</span></p>
        </article>
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
@import "../../../css/element.scss";
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
      position: relative;
      input{
        display:none;
      }
    }
    dd{
      width:100%;
      box-sizing: border-box;
      padding: 0 20px;
      img{
         margin-top: 20px;
         float: left;
      }
     span{
       margin-top: 20px;
       padding-left: 12px;
       @include p(1);
       font-size: 24px;
       width:200px;
       height: 24px;
     }
     em{
       font-size: 24px;
       color:#f60;
       float: right;
       margin-top: -20px;
     }
    }
  }
  article{
    @include list;
    background: #f8f8f8;
    box-sizing: border-box;
    padding:20px 10px 30px 10px;
    position: relative;
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
      position: absolute;
      bottom: 40px;
      left: 226px;
      line-height: 36px;
      font-size: 24px;
      color:#666;
      margin-right: 20px;
      em{
        margin-right: 16px;
      }
    }
  }
}
</style>

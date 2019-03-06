<template>
    <section :class="$style.section">
        <dl>
            <dt>
                <input id="chekhand" type="chekbox" name="" value=""><label for="chekhand"/>
            </dt>
            <dd><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAABnZ2dnZ2dmZmZnZ2dmZmZnZ2d8fHxnZ2dra2toaGhnZ2dnZ2dmZmZubm5mZmZnZ2dnZ2dnZ2dmZmZmZmZoaGhqampra2tnZ2dnZ2dnZ2doaGhoaGhnZ2dmZmZnZ2dnZ2dnZ2dpaWlpaWlpaWlmZmb8zhRjAAAAJXRSTlMA+aPUmfSVBncXRWG5qRDkwZ7s6N09KgzLvGdTI8ivh4FuNh5O4iW6KAAAAP9JREFUOMvl01mWgyAUBNBCQRQ0zmbQpDN07X+LLcrxC3oDud+cevU4gNVyYVA6YVeKJEg12GhVIagVZzgjbwiyNHByTgj68Gev0COi3kusFSISoQEY3hBx20q0LBBRULolS0RdO42ZFlGWv6jEGVEnkaC+4h/NANEexzW88xGaKNRHR/mC98qOlgMq5bd8s/YRuubb77l2MEz2ASmZY5OT6QlOxRFomRSASWnvYsZqFnfL1ACfitIFtmSvqCyWgc3z2XBYYBVVT0oNZ5TlIy/cGKlIJV18kT/KbPQjLzjoadI4XPZSkohg9k0HstirLfzHMezToI7G33UngrocwB+XtBTIhGe+MAAAAABJRU5ErkJggg==" alt="">
                <span>云上花开美妆护肤专营店</span>
            </dd>
        </dl>
        <article>
            <i/>
            <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            <h4>【缤肌】VC活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养C活力靓肤补水爽肤水500ml润肤养肤 深层补水 </h4>
            <p>¥39.90</p>
            <div>
                <span>-</span>
                <input type="text" value="1">
                <span>+</span>
            </div>
        </i></article>
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
      input + label{
        display: block;
        width:40px;
        height:100%;
        &::after{
          content:'';
          display: block;
          width: 32px;
          height:32px;
          border:1px solid #b7b7b7;
          border-radius: 50%;
          position: absolute;
          top: 18px;
        }
      }
    }
    dd{
      img{
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
  }
  article{
    @include list;
    background: #f8f8f8;
    box-sizing: border-box;
    padding:20px 10px 30px 10px;
    position: relative;
    i{
      width:40px;
      padding-right: 16px;
      height: 193px;
      position: relative;
      &::after{
        content:'';
        display: block;
        width: 32px;
        height:32px;
        border:1px solid #b7b7b7;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        margin-top: 60px;
      }
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

<template>
    <section :class="$style.section">
        <a href=""/>
        <aside>
            <img src="https://image.suning.cn/uimg/b2c/qrqm/0070231681000000010643541212.jpg" alt="">
            <div>
                <h4>路边捡到一只猫</h4>
                <p>路边捡到一只猫（深圳龙华店）908m</p>
            </div>
        </aside>
        <ul>
            <li>
                <input id="1" type="radio" name="order">
            <label for="1">主页</label></li>
            <li>
                <input id="2" type="radio" name="order">
            <label for="2">热卖商品</label></li>
          </li>
        </ul>
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
  background: #3f3f3f;
  >a{
    display: block;
    position: relative;
    left: 4px;
    top: 0;
    width: 10%;
    height: 75px;
    &:before{
      content: "";
      position: absolute;
      top: 25px;
      left: 20px;
      display: inline-block;
      width: 20px;
      height: 20px;
      border: solid #fff;
      border-width: 2px 0 0 2px;
      -webkit-transform: rotate(-45deg);
    }
  }
  >aside{
    margin-top: 32px;
    box-sizing: border-box;
    padding:0 20px;
    color:#fff;
    @include list;
    align-items: center;
    img{
      width:105px;
      height:105px;
      border-radius: 10px;
    }
    div{
      width:82%;
      box-sizing: border-box;
      padding-left: 25px;
      position: relative;
      h4{
        font-size: 32px;
        margin-bottom: 16px;
      }
      p{
        font-size: 22px;
        padding-left: 30px;
        &::before{
          content:'';
          width:26px;
          height:26px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4T3WTQYiNURTHz/nea0TULBjv/L95JSVNSSgLJRKRDGLLZKmGQsliCgsbJLKwNCODrGQzwpuMsrWRhbKSuvd+702ajZ5433eP7uu+15vn+Xbnu+f8+v/P/16mvm9paWm42WyeZeZNRDRMRGuJaBURTYvIDDP/7h3h3sI5t9N7P8vM92Lzn3C+uLi4ptVqXVHVcWY+DuB7Z64LqNfr64uimPPeHxodHf3RryzU1toxVZ0BsIeZ2/AuwBgznSTJYxF532g0Knme3ySiMSL6ysyfROROGDDGnGfmIQB3uwBVHXLOzQdybKolSfJURB6FOsuycVXdLiI3VDVxzi0A2NsFZFm2xXs/CWDSWhsW9hLAwV4bxpj5NE0PRCvvRGQ/M2vbgjFmBzNPALgUAU8AnOwAVJWttR/SNN0dAa9E5ERIpA1Q1RXOudcA9sWGIP0WgC9R8u3wH8DlAHPOveko7C7RWjvHzOdE5FvcyXUi2kxEG1R1wXt/rVqt/sqy7Kj3fiOA+8tSsNYGz6cAnBkUYVQarNSY+RiA5jJAlP6RiKYAvP3PPbgQ7KZp2rb0D6Ber28tiuJFuVzeNjIy8rMvhSoRzQEIC88HAqKKCSI6LSKHmdlH6UmQXiqVLlYqlc+94GVvoXMQbiUzGwBXY8wPieh5mqa1fmsDAapastY+Y+YHqrqLmdeFCAftZSAgNDYajdV5ns8S0UoROcLMxSDAX1AVCCB9DTBGAAAAAElFTkSuQmCC) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left:20px;
        }
        &::after{
          content:'';
          display: inline-block;
          width: 12px;
          height: 12px;
          border: solid #fff;
          border-width: 2px 0 0 2px;
          -webkit-transform: rotate(135deg);
          margin-left: 4px;
        }
      }
    }
  }
  ul{
   input{
     display: none;
   }
   @include list;
   width:100%;
   height: 80px;
   line-height: 80px;
   justify-content: space-around;
   color:#fff;
   li{
     font-size: 26px;
     position:relative;
     input:checked + label{
       color:#fff;
       &::after{
         content:'';
         width:100%;
         height: 4px;
         background: #fff;
         position: absolute;
         bottom:10px;
         left:0px;
       }
     }
   }
  }
}
</style>

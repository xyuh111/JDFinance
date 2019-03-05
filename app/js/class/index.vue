<template>
    <section :class="$style.section">
        <nav>
            <a href="javascript:void(history.go(-1))"><i/></a>
            <div>
                <router-link :to="{ name: 'home'}"><i/><span>宝洁超级品牌日 159减50</span></router-link>
            </div>
        </nav>
        <ul>
            <li v-for="item in items" :key="item.id"><input :id="item.id" name="item" type="radio" value=""><label :for="item.id">{{ item.title }}</label> </li>
        </ul>
        <List :class="$style.shoplist"/>
    </section>
</template>
<script>
import List from "./list.vue"
export default {
    name: "",
    components: {
        List,
    },
    data: () => ({
        items: [
            {
                id: 1,
                title: "热门推荐",
            },
            {
                id: 2,
                title: "手机数码",
            },
            {
                id: 3,
                title: "大家电",
            },
            {
                id: 4,
                title: "电脑办公",
            },
            {
                id: 5,
                title: "厨卫大电",
            },
            {
                id: 6,
                title: "生活家电",
            },
            {
                id: 7,
                title: "食品酒水",
            },
            {
                id: 8,
                title: "人群偏爱",
            },
        ],
    }),
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
  background: #fff;
  height: 100vh;
  >nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 98;
    height: 76px;
    background: #F8F8F8;
    line-height: 76px;
    font-size: 25px;
    box-shadow: 0 1px 1px #DCDCDC;
    >a{
      >i{
        color: #353d44;
        position: absolute;
        left: 26px;
        top: 25px;
        border: solid #353d44;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(-45deg);
        width: 20px;
        height: 20px;
        &:after{
          position: absolute;
          top: -6px;
          right: -8px;
          bottom: -6px;
          left: -8px;
          content: ' ';
        }
      }
    }
    div{
      position: absolute;
      top: 12px;
      left: 68px;
      width: 86%;
      height: 50px;
      background: #FFF;
      border: 1px solid #CCC;
      border-radius: 8px;
      >a{
        width:100%;
        @include list;
        i{
          display: block;
          margin: 15px 12px;
          width: 20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD30lEQVRYR8XXXWgcVRQH8P+ZDZkkojUQ82AgESVIIEVfiiHB7J6bRDAo2oemfVDEjyoogkofiqgQpW8pvgjWj4eCKBir4AcpMd25M9k8CKaobUDRFqkfCE3S0kQfYmbnLxc2kGz3K3ZJ52Uf9s45v3vnzL1nBNf5kuucHzUDpqenb2hsbNwDoA/AbQA6AawB+ENEfgbwDcnvVDXezqSqAhYWFhoXFxdfIvmqiLS4hCTPFyW5W0R2AfiL5CFjzEe1IioCgiC4E8DnIuJ+swAmMpnM1yKSbE4wNTXlNzU17ReRwwB6SAZJkowNDw8vV4OUBQRB8BCADwEsi8hzqvpVtWAkvTAMD5I8KiKXPc8bTafTZyvdVxIQRdHuJElOk7T5fH5sZGTkSrXkm/+Poqg7SZIvSN6YJMldlVbiKsDMzMyuVCp1RkR+A6DbLaoNSDab7fI873sA36rqfeUmcBXAWjtB8tGWlpbuvr6+le3MvHhsGIZ7SX4G4ICqflwq1hZANpvt8DzvVwDPq+o715J8494gCOZEpANAd6nV3AKw1h4iOb60tHTT2NhYvh6AbDZrPM/LkswYY6LimFsAQRBEInJJVffWI7mLMTk5mWpra7siIsdU9VA1gKv2o8aY1+sFcHGCIJgWkZSqDpcFzM/Pt6yurv5D8hljzLv1BFhrjwO4R1V7ygJmZ2dvyefzF0Xk6Uwm816dAW+RfNAY01UWQFLCMHSFN66q4/UEBEHwKYAOY4w7yLZcxUV4XkTOqurD9QRYa8+Q/NEYs78awL37j7S3t7f29vb+Ww/E3Nzcrevr638COKiq71cEWGsfAPBlPevAWnuY5BGSnUNDQw5S/hEUTrMfSLaLyB2q+ve1rEIul2uN4/gCyU+MMU9W3YrdAGute1dnAJxQ1X3/F2CtbSA57V4/3/dvHxgYuFgToIB4E8ALJN8wxry2XYRrUJqbmz8A4CawT1VPlItRsh8o6N223A/gZCqVemxwcHCxFkgURT1JkriTbzfJt40xz1a6r2xHZK1tAuCO0vsBrAI4EsfxsXLNSS6X64zj+GWST4nIOsm8iPyeSqUGK+Er9oSFonwRwCsAbia5JiJuOc8VzcqtlKsdIXlaRA54nteeJMkpABd83x/o7++/VHMNFA90XVJDQ8PjAJ5wS1si0GWSJz3PO55Op0+JCN2YKIr6C4hzvu9nSiGqtuWlML7vd8Vx3Coi4nnecqXGsxpi24BaCrF4zGZEHMf3bq6jHQEUPY6f4jjWDcSOATYh3Ob0C4BBt9PuKMAhwjDc476cCsf+xI4DHMKdkCsrK8ujo6Nr/wEzOs0wCJaYOAAAAABJRU5ErkJggg==) no-repeat;
          background-size: 100%;
        }
        span{
          display: block;
          line-height: 49px;
          color: #CACACA;
          font-size: 22px;
          overflow: hidden;
        }
      }
    }
  }
  >ul{
    position: fixed;
    left: 0;
    top: 76px;
    width: 150px;
    height: calc(100vh - 76px);
    overflow-y: auto;
    z-index: 50;
    background-color: #f4f4f4;
    >li{
      position: relative;
      width: 150px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background: #F4F4F4;
      box-sizing: border-box;
      font-size: 24px;
      color: #666;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
       input{
         display:none;
       }
       input + label{
          display: inline-block;
          width: 150px;
          height: 80px;
          line-height: 80px;
       }
       input:checked + label{
          display: inline-block;
          border-right-color: transparent;
          background: #FFF;
          position: relative;
          width: 150px;
          height: 100%;
          line-height: 80px;
          text-align: center;
          box-sizing: border-box;
          &::before{
            // display: none;
            position: absolute;
            left: 0;
            top: 0;
            content: ' ';
            height: 100%;
            width: 6px;
            background-color: #FF6600;
          }
       }
    }
  }
  .shoplist{
    // height:100%;
    width: calc(100vw- 150px);
    margin:76px 0 120px 150px;
    article{
      text-align: center;
      padding:14px 10px 0 10px;
      // h4{
      //   display: inline-block;
      //   position: relative;
      //   height: 24px;
      //   line-height: 24px;
      //   font-size: 24px;
      //   vertical-align: middle;
      //   color: #FF6600;
      //   &::before{
      //     position: absolute;
      //     top: 12px;
      //     left: -40px;
      //     content: '';
      //     width: 30px;
      //     height: 3px;
      //     background: #f2f2f2;
      //   }
      //   &::after{
      //     position: absolute;
      //     top: 12px;
      //     right: -40px;
      //     content: '';
      //     width: 30px;
      //     height: 2px;
      //     background:#f2f2f2;
      //   }
      // }
      >div{
        position: relative;
        font-size: 24px;
        width: 100%;
        text-align: left;
        margin: 51px auto 34px auto;
        color: #FF6600;
        height: 24px;
        line-height: 24px;
        span{
          display: block;
          position: absolute;
          left: 0;
          top: 0px;
          background: #FFF;
          padding: 0 12px 0 12px;
          z-index:100;
        }
        &::before{
            width: 100%;
            position: absolute;
            top: 12px;
            left: 0;
            content: ' ';
            height: 2px;
            background: #f2f2f2;
        }
        em{
         display: block;
         position: absolute;
         right: 8px;
         top: 0px;
         background: #FFF;
         padding: 0 12px 0 12px;
         z-index:100;
         i{
            position: absolute;
            right: -10px;
            top: 2px;
            display: block;
            width: 24px;
            height: 40px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABK0lEQVRYR+3WMU7EMBAF0G+bJqkB0SEBBWcAiRsgcZg06dylyalAULFXQGxBwQWSyjPI0q60WiFie8YsBemj/2x/2WNw4M8cOB9/H+C9t03TvAI4IqKHvu/fNHdtcQcioG3bGHrOzJ9EdKOJWATE1Q7DcOWcewJwpo1IAtREJANqIbIANRDZgC3CWvtijDmRdqIIEBHjOF6HEB6liGKAFkIE0ECIAVKECkCCUANsEUQUb8xjZn6f5/nSe08/vR2qgM2V/QzgFMB6mqaLXwOUvhcqO1AaHo9GDJCEiwHScBFAI7wYsBsO4COEcFc6JWV3YD/cWnvbdd26dE7MAmiHZx1BjfBkQK3wJMDuWB4LJz3z/a4sdmADWDGzc87dSwr3XVEXAaXtTv3vH/AFMjweMEm0PV4AAAAASUVORK5CYII=) no-repeat;
            background-size: 100%;
         }
        }
      }
      >p{
        width:100%;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        color: #FF6600;
        text-align: left;
        margin: 51px auto 34px auto;
        background: #fff;
        em{
          height: 24px;
          line-height: 24px;
          font-size: 24px;
          display: block;
          position: absolute;
          left: 0;
          top: 0px;
          background: #FFF;
          padding: 0 20px 0 12px;
          z-index:100;
        }
        &::before{
          width: 100%;
          position: absolute;
          top: 12px;
          left: 0;
          content: '';
          height: 2px;
          background: #f2f2f2;
        }
      }
      >ul{
        li{
          float: left;
          box-sizing: border-box;
          width: 33.33%;
          margin-top: 25px;
          &:after{
            content: '';
            overflow: hidden;
          }
          img{
            width: 103px;
            height: 103px;
            margin: 0 auto 8px auto;
            position: relative;
          }
          p{
            white-space: nowrap;
            font-size: 22px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #666;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>

<template>
    <section :class="$style.section">
        <header>
            <a href=""/>
            <h4>积分</h4>
        </header>
        <dl>
            <dd>我的积分</dd>
            <dd>10034</dd>
            <dt>即将过期：<span>1234个</span></dt>
        </dl>
        <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACo0lEQVRYR9WXO2zTYBSFz7VCoa3dFlCcIF5BILADEgwMLIgOLCxAt4oFBsQMIxMd2WBhZ2UpRUhIiAEqIbGB1CF2A1WRkBCxW6XICU0f9kW248ROY5RYdSsy5fHfe77/Po4Vwi6/aJf18X8D1A1lmoFjoqxfTFrJxBWoGWfegIVrnjDxnCjr55NAJAKom+o7ZlxFq4MMMEpiTjvbLwStVU9P7N1fftlroGUoHwh0pS0eRPYP0VhW7lGtoq5BIAOCc1c8qL+NA2EG1Qx1jgjn/DOdxeMg9OdwVjtChNYXnTlXl5Q7tk3PAAySVVFeEQnX3RoCXB7A5uSA/O1LOMgTN9WvBJzsLh6qgpsFbIlZfbQTYsMsjDd48DWBRD/C/kFWpThFxI/aiT3wzxlq3NqXXZx3xf+Y6gIDJ/4tHg+xvnz40ro9Mg3gUORiDmbJMpVxYuF9+4dm5Rggwidm5EG9ikfSux8sIqww01Gvwm5qr3N++2yyHxBXC2P1jaFqtE9B+9yD4fe9jqp7rqUWm2N4T7XgoViGukKg0S0QHcT9yPtnw3MYHVpmhpTTKABorlb/EkkjHDi/R2R9zAfwBhHNQUyasr84dnhWymvjHkB9Sb3JDvVsRv1JxZ12Houy/tADqBnFCwAiu789IvFZ2OFJKa+9aE1GzSjGOlcaMKJcCi2kvwk7NojBALYdwWuD+hyg22nctjMngxckWTsVBTDV+2B6siMAzDNSTpuIAGy15PRQXAsezc4/jQB0t+R0IIIBjAB461hRv4PoeDqyTXNmx5ZyeibQiBi0VSnOEOFGugD4JeVKrcdyJ0DqlhxYcNcK7Iwl+xbcFWC1qhTsDWExzRYImc3LQwfKH7sCNJ8LqVpyeAO2bEGaN4/LneiPyXaC7jrAX+XpCOsyHDQJAAAAAElFTkSuQmCC" alt="">
            <div>
                <h4>会员等级</h4>
                <p>黄金会员</p>
            </div>
        </div>
        <ul>
            <li>
                <p>本月</p>
                <span>获取：<i>5410</i></span>
            </li>
            <li>
                <p>交电费<em>2019年4月1号</em></p>
                <span>+10</span>
            </li>
            <li>
                <p>支付<em>2019年4月1号</em></p>
                <span>+500</span>
            </li>
            <li>
                <p>网上支出<em>2019年4月1号</em></p>
                <span>+5000</span>
            </li>
            <li>
                <p>门店买单<em>2019年4月1号</em></p>
                <span>+50</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "",
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
  header{
    width:100%;
    position: relative;
    background: #fff;
    @include list;
    flex-wrap:nowrap;
    >a{
      display: block;
      position: relative;
      left: 4px;
      top: 0;
      height: 75px;
      &:before{
        content: "";
        position: absolute;
        top: 25px;
        left: 20px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border: solid #353d44;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(-45deg);
      }
    }
    >h4{
      line-height: 75px;
      font-size: 26px;
      border-bottom: 1px solid #DCDCDC;
      color: #333;
      width:100%;
      text-align: center;
    }
  }
  dl{
    width:100%;
    height:194px;
    background: #4567ed;
    color:#fff;
    text-align: center;
    dd{
      font-size: 32px;
      padding-top: 30px;
    }
    dt{
      font-size: 24px;
      margin-top: 30px;
    }
  }
  >div{
    width:100%;
    height:110px;
    background: #fff;
    @include list;
    align-items: center;
    img{
      width:64px;
      height:64px;
      margin-left: 54px;
      margin-right: 26px;
    }
    h4{
      font-size: 28px;
      color:#4567ed;
    }
    p{
      font-size: 24px;
      color:#666;
      margin-top: 13px;
    }
  }
  ul{
    @include panel;
    padding-top: 20px;
    li{
       width:100%;
       height:108px;
       border-top: 1px solid #b7b7b7;
       font-size: 24px;
       @include list;
       justify-content: space-between;
       align-items: center;
       p{
         em{
           display: block;
           margin-top: 14px;
         }
       }
       span{
         i{
           color:#4567ed;
         }
       }
    }
  }
}
</style>

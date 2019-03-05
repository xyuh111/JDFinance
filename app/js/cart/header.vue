<template>
    <section :class="$style.section">
        <a href=""/>
        <h4>购物车</h4>
        <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkMwMDVBRjlFRDgzMTFFNDhBRkI4QUM4NjA2Qjk0M0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkMwMDVBRjhFRDgzMTFFNDhBRkI4QUM4NjA2Qjk0M0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUJDNTg4MEZEOUNCMTFFNDk4NDVFMTk2RUUzN0QzNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUJDNTg4MTBEOUNCMTFFNDk4NDVFMTk2RUUzN0QzNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63RxTUAAABQElEQVR42uyZv0rDUBTGm2ZyaIcKUnAo+g7pVgexW/MADm7SVcSxGS3dOjhl9R2yCQ5CB/+Ae97BDnVoSYf4HTlCKBZuQkjg8l34wb0kfIdf7r1niZOmacOG0WxYMihCEYpQhCIUoQhFKEIRilCEIhSxTMTxBhd/cx/cAk/X72AOooLZleS9vTxFWZF7MNkTMAVBzqKV5kEmkKM10pcScAMOQUfniT7zcxStPK9/NvTd495piMUJuAMPYA024BVsgWxZFzwaFq4lT47WCpOWmi53QsT8C3yDtmHhWvJMu5ZTdpMpO09EPnRx9c8L15kOYTpqyZM7Itt1Cc51G2NwAMZgBly9WLFh4VryrGm/siOyeAaf2k2OtBss9MuFBc5sZXmQ+M1z+FuBIhShCEUoQhGKUIQiFKEIRShil8iPAAMAn+B5xjiFvWsAAAAASUVORK5CYII=" alt="">
            <ul>
                <li>首页</li>
                <li>购物车</li>
                <li>搜索</li>
                <li>全部分类</li>
                <li>我的易购</li>
            </ul>
        </div>
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
.section{
  position: relative;
  // height: 75px;
  background: #fff;
  @include list;
  flex-wrap:nowrap;
  >a{
    display: block;
    position: relative;
    left: 4px;
    top: 0;
    width: 19%;
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
    width: 60%;
    margin: 0 auto;
    color: #333;
    text-align: center;
  }
  >div{
    width:19%;
    font-size: 26px;
    img{
      line-height: 75px !important;
      position:absolute !important;
      right:20px !important;
      top:12px !important;
    }
    >ul{
      // display: none;
      display: block;
      transform-origin: 0px 0px;
      opacity: 1;
      transform: scale(1, 1);
      position: fixed;
      top: 100px;
      right: 12px;
      background: #484F55;
      border: 1px solid transparent;
      border-radius: 2px;
      z-index: 100;
      border-radius: 4px;
      overflow: hidden;
      li{
        border-bottom: 1px solid #5B6166;
        width: 215px;
        height: 77px;
        line-height: 77px;
        text-align: left;
        text-indent: 2.7em;
        background: #484F55;
        color:#fff;
        position: relative;
        &::after{
          content: "";
          position: absolute;
          left: 12px;
          top: 50%;
          margin-top: -21px;
          width: 43px;
          height: 43px;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 43px;
          -webkit-mask-position: 0 0;
        }
        &:nth-child(1){
            &::after{
              -webkit-mask-image: url(data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABJQTFRFLo/9Lo/9Lo/9Lo/9AAAALo/9x5IphwAAAAV0Uk5TWOIgqQDx9kpIAAAA1ElEQVQ4y+2UQRKDIAxF4wzunU45QKd6ASt7GnWvYu5/lVKwIBJ7ArNA4OEnP4IwnAXs+volTogiw5MnAbUc0fI2PGbBEGXqAZXJSU9daBOCqnLPwr6ZkmL2MyinlESV0INNawo7l5ueJ/ts0WYfiN47tI5FIMoktfRDiItiNZwE+LKk4baFTOunB9aAyIi2pgBlxXxQWxJo5pohKBcoO/YU9BM0RGs2PxItgIolprZZjwxZnZ+LXOQ/eS8Zae6O9Mxd6BxBScf4nnV/546gPfzF0vgAsaxKR7EkvqwAAAAASUVORK5CYII=);
              background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#fff),color-stop(100%,#fff));
            }
        }
        &:nth-child(2){
            &::after{
              -webkit-mask-image: url(data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABhQTFRFLo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAALo/9QGDOBQAAAAd0Uk5TJJJ1tkXrAPzIW2oAAADnSURBVDjL7ZNNDoIwEIWJC44gJ0AuYOQABNyr0C0o1K1UcK5vM9NKQxlMXDsJi8eXaefnNUgBQC5FACzhc/SnSSbAiXH/ITnM4mJIA6fQPaiOYUskUvNL4p4IFHPSQoFE+ZUlFZKDT7oByc4n1yeS0Cf1aDr1A/7kdyJ4wm4hZTd3rLhtd6xD2gVXCXSV9J2YkBOl715B7pWs43Vkpfu/tK9Esi9rlWTiPFVOgkijD+8tMIJIpMKNLlS6Akk76ux8MO0bgeSmcLpErEDSPXAjZspGILm/5LR0K77k8PfwtfH9rMxgaW5vBXTrw52l9PkAAAAASUVORK5CYII=);
              background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#fff),color-stop(100%,#fff));
            }
        }
        &:nth-child(3){
            &::after{
              -webkit-mask-image: url(data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAABVQTFRFLo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAAhP0sDQAAAAd0Uk5TYzEWntv+AJnAin8AAAEGSURBVDjLjdTNDoMgDABgTaZnk02fwHDfIp43jTs7ofcJC+//CItWJyCN42LMZ5GftpGhRnQsWdXJNt6LqmAeLfNEcWhjprIKBHPlBFd8PcPdEb3CRLUlivfbjxNhiZbFJmNXb8If9j5y8ZM3FLaMkK5S9u7mk2YVXruixSLKnWyajqFo4Z8lThKZz8uX/ImCT3vgt5FJal90j8JTX94CpSt8GeUizBe1COxTAI6Eno1eAb1qeqf06dAnSt8CfXP0be8zZDjOKi8TL4LM3oHKeJCMqJJb14QrqzelZEQ1KgwKVTAGWVUPa9VjULBTzEFBmYPC3WUKCssURHSkUlKi2n+62G58AagQzwmrsXO8AAAAAElFTkSuQmCC);
              background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#fff),color-stop(100%,#fff));
            }
        }
        &:nth-child(4){
            &::after{
              -webkit-mask-image: url(data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAAG5wVGOkIJ/OAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURQAAADU9RDU9RDU9RDU9RF2IWgwAAAAEdFJOUwAunmbKU26JAAABc0lEQVQ4y7VUbZaCMAxsCweoygFQcgBUDgAl9z/TNp+UXd/+2bd9KomTTJN0Sgi/rvh6PN25PaZsdod17eos5MzqIE5vwI3tAcv7hRjUmTmWOCLndhomj4hr/e0Zr8Gyi2w4UPQiwZFp+t3qoHzdeyGCYbVCZkFp9ZS7jMHjLD8kMsCK71f6KHU5IdvBfEYqgzMz4l6L8D7D9gHhP1P5gMDI/aqbagVmylyW8qM22HUs47dOkw1pQGHN/CXAioqI9xyBmys5XhH9uCOdMCcmtnIjEahpbNWEksN/LdpnNrndG6DzioZWlNrPhdqLuOULeKMBmClVdfRFGH2wYlQ6nSjojGHzM4FR6cdWo5TgJhfhGmsQUeSyHnoziYqKWyU6woLwmTdsUqTHtUh/QipDy9ywHZ0qm8VF1GvjFVjVpFXXq9zGckg5KnXCENyTS6s3WG+BSFU0LOo01Sbcc7QzAXyGG9p27RF3ZynWF83kmoA/SPELxo1H+loQseoAAAAASUVORK5CYII=);
              background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#fff),color-stop(100%,#fff));
            }
        }
        &:nth-child(5){
            &::after{
              -webkit-mask-image: url(data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAABGdBTUEAALGPC/xhBQAAAB5QTFRFAAAALo/9Lo/9Lo/9Lo/9Lo/9Lo/9Lo/9AAAALo/9MGF0hQAAAAl0Uk5TAHoyVr2f4hcACU70ZwAAAe1JREFUOMt1VEtPwzAMTrtHr9NASLsNIUC9VUKAehsTMOUGAoF647Wh3gqMSfwM1jaT/y1O7KQPIJe6sf3Zsf1ZCHs+bhewuDgV7RPsAJ3HrKnwE5gPD8X77h2U44ZHAjcsHkNZ9zqBeyd/wnOl6MGsZrYPVw5LfjeCjgorddW4mU46YUnOWk9YsVOPXYLjiy2GTylSvLaZA5SkCnMyGBAEXB9tc5Ke0m/qlYygLw84QqLhwg1FK+oAXzqCpGhsEE6cXQBUphEZdHPCxluP05GUuv1NBqJPRoJdfU4hfBBfD6zhRyr69jci5sKm5NOxhck1oAU2cbjsGE9GJMaEuloLG49RRJeMJTfAV07jg4b7VJnLBGxTQnUq3tIn+wuVxpfYhSKrNKmTO5cwj9xsqJpGiJqIGhmJvw6+2L60rSltdTq3c/O9exna6lBFPUxMv3GJ+U25oqYLgSyGK8w4SKZ7O2Z4sQumVUsV4QigPY5eMCqpwKbbySsj6fnpoJO5xQnxVINoOJpmksKN6zgfr6CpwkkcTZqcTSMziQEMZJMlIj4j+DhXrQL0IWeWfLc0nuWjXP/DLGRj1mLjzDH4qcXgrGJ9vRXLivW4KWrsfqtvCqxxEbk90dgueiNda7eP7dZGoi22OF/83mJ/bL4fUySQ/0TSZf8AAAAASUVORK5CYII=);
              background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#fff),color-stop(100%,#fff));
            }
        }
      }
    }
  }
}
</style>

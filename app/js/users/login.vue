<template>
    <section :class="$style.section">
        <header><img src="http://web.web3n.com/currant-1496075_1920.jpg" alt=""></img>
            <h4>hudy</h4>
        </header>
        <ul>
            <li><input type="number" placeholder="请输入手机号码" value=""><span>获取验证码</span></li>
            <li><input type="number" placeholder="请输入验证码"></li>
            <li>绑定手机号</li>
        </ul>
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
  @include flex;
  align-items: center;
  header{
    width:100%;
    height:390px;
    background: #6462e9;
    text-align: center;
    @include flex;
    align-items: center;
    box-sizing: border-box;
    padding-top: 80px;
    img{
       width:147px;
       height:147px;
       border-radius: 50%;
    }
    h4{
      font-size: 32px;
      color:#fff;
      margin-top: 28px;
    }
  }
  ul{
    width:calc(100vw - 42px);
    background: #fff;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 55px 35px;
    position: relative;
    top:-80px;
    li{
      border-bottom: 1px solid #b7b7b7;
      height:60px;
      input{
        border: none;
        font-size: 22px;
      }
      &:nth-child(1){
        input{
          width:380px;
          box-sizing: border-box;
          padding-right: 20px;
        }
      }
      span{
        font-size: 22px;
        color:#6462e9;
        border:1px solid #6462e9;
        padding:6px 14px;
        border-radius: 20px;
      }
      &:nth-child(2){
        margin-top: 35px;
        input{
          width:100%;
          box-sizing: border-box;
          padding-right: 20px;
        }
      }
      &:last-child{
        border:none;
        font-size: 26px;
        width:100%;
        background: linear-gradient(to right, #5d5fe2, #8d75ed);
        border-radius: 30px;
        margin-top: 88px;
        line-height: 64px;
        height: 64px;
        text-align: center;
        color:#fff;
      }
    }
  }
}
</style>

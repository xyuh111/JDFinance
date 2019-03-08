<template>
    <section :class="$style.section">
        <header>
            <img src="http://web.web3n.com/currant-1496075_1920.jpg" alt=""></img>
            <h4>更换头像</h4>
        </header>
        <ul>
            <li><p>用户名</p><input type="text" placeholder="请输入手机号码" value="huidy"></li>
            <li><p>手机号码</p><input type="number" placeholder="请输入验证码" value="15888888888"></li>
            <li><h4 @>{{ add?"编辑个人信息":"提交" }}</h4></li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "",
    data: () => ({
        add: true,
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
      margin-top: 20px;
      p{
        font-size: 24px;
        display: inline-block;
        width:120px;
      }
      input{
        border: none;
        font-size: 24px;
        width:380px;
        box-sizing: border-box;
        padding-right: 20px;
      }
      &:last-child{
        border:none;
        font-size: 26px;
        position: fixed;
        bottom:0px;
        left:0;
        width:100%;
        height:100px;
        background: #fff;
        box-sizing: border-box;
        padding:20px 25px;
        margin-top: 1px solid auto #a5a5a5;
        z-index:100;
        h4{
          background: linear-gradient(to right, #5d5fe2, #8d75ed);
          border-radius: 30px;
          line-height: 64px;
          height: 64px;
          text-align: center;
          color:#fff;
        }
      }
    }
  }
}
</style>

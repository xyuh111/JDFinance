
<template>
    <section :class="$style.section">
        <aside>
            <h4>品牌评分</h4>
            <div>
                <img v-for="(star,index) in stars" :src="star.src" alt="星星图片" @click="rating(index,'starts')" >
            </div>
            <p>{{ scoreInfo }}</p>
        </aside>
        <textarea :maxlength="Surplus" v-model="inputText" class="input" name="abstract" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧！" @input="descArea"/>
        <input id="fileavatar" ref="avatarInput" type="file" multiple="multiple" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)"><label for="fileavatar"/>
        <div>
            <h4>服务态度</h4>
            <div><img v-for="(star,index) in severceStarts" :src="star.src" alt="星星图片" @click="rating(index,'severce')" ></div>
        </div>
    </section>
</template>
<script>
const starOnImg = "http://web.web3n.com/star@2x.png"
const starOffImg = "http://web.web3n.com/star02@2x.png"
export default {
    name: "",
    data: () => ({
        scoreInfo: "很满意",
        inputText: "",
        Surplus: 140,
        newTitle: "商品评价",
        scoreStartNum: 5, // 商品评分
        severStartNum: 5, // 服务评分
        newSet: "     ",
        isBack: true,
        isSet: true,
        stars: [{
                    src: starOnImg,
                    active: true,
                }, {
                    src: starOnImg,
                    active: true,
                }, {
                    src: starOnImg,
                    active: true,
                },
                {
                    src: starOnImg,
                    active: true,
                }, {
                    src: starOnImg,
                    active: true,
                },
        ],
        severceStarts: [{
                            src: starOnImg,
                            active: true,
                        }, {
                            src: starOnImg,
                            active: true,
                        }, {
                            src: starOnImg,
                            active: true,
                        },
                        {
                            src: starOnImg,
                            active: true,
                        }, {
                            src: starOnImg,
                            active: true,
        }],
    }),
    methods: {
        // 评分
        rating(index, string) {
            if (string === "starts") {
                const total = this.stars.length // 星星总数
                const idx = index + 1 // 这代表选的第idx颗星-也代表应该显示的星星数量
                // 进入if说明页面为初始状态
                if (this.scoreStartNum === 0) {
                    this.scoreStartNum = idx
                    for (let i = 0; i < idx; i++) {
                        this.stars[i].src = starOnImg
                        this.stars[i].active = true
                    }
                }
                else {
                    // 如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                    if (idx == this.scoreStartNum) {
                        for (let i = index; i < total; i++) {
                            if (i != 0) {
                                this.stars[i].src = starOffImg
                                this.stars[i].active = false
                            }
                        }
                    }
                    // 如果小于当前最高星级，则直接保留当前星级
                    if (idx < this.scoreStartNum) {
                        for (let i = idx; i < this.scoreStartNum; i++) {
                            if (i != 0) {
                                this.stars[i].src = starOffImg
                                this.stars[i].active = false
                            }
                        }
                    }
                    // 如果大于当前星级，则直接选到该星级
                    if (idx > this.scoreStartNum) {
                        for (let i = 0; i < idx; i++) {
                            this.stars[i].src = starOnImg
                            this.stars[i].active = true
                        }
                    }

                    let count = 0 // 计数器-统计当前有几颗星
                    for (let i = 0; i < total; i++) {
                        if (this.stars[i].active) {
                            count++
                        }
                    }
                    this.scoreStartNum = count
                }
                if (this.scoreStartNum === 1) {
                    this.scoreInfo = "很差"
                }
                else if (this.scoreStartNum === 2) {
                    this.scoreInfo = "差"
                }
                else if (this.scoreStartNum === 3) {
                    this.scoreInfo = "一般"
                }
                else if (this.scoreStartNum === 4) {
                    this.scoreInfo = "满意"
                }
                else if (this.scoreStartNum === 5) {
                    this.scoreInfo = "很满意"
                }
            }
            else {
                const total = this.severceStarts.length // 星星总数
                const idx = index + 1 // 这代表选的第idx颗星-也代表应该显示的星星数量
                // 进入if说明页面为初始状态
                if (this.severStartNum == 0) {
                    this.severStartNum = idx
                    for (let i = 0; i < idx; i++) {
                        this.severceStarts[i].src = starOnImg
                        this.severceStarts[i].active = true
                    }
                }
                else {
                    // 如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                    if (idx === this.severStartNum) {
                        for (let i = index; i < total; i++) {
                            if (i != 0) {
                                this.severceStarts[i].src = starOffImg
                                this.severceStarts[i].active = false
                            }
                        }
                    }
                    // 如果小于当前最高星级，则直接保留当前星级
                    if (idx < this.severStartNum) {
                        for (let i = idx; i < this.severStartNum; i++) {
                            if (i != 0) {
                                this.severceStarts[i].src = starOffImg
                                this.severceStarts[i].active = false
                            }
                        }
                    }
                    // 如果大于当前星级，则直接选到该星级
                    if (idx > this.severStartNum) {
                        for (let i = 0; i < idx; i++) {
                            this.severceStarts[i].src = starOnImg
                            this.severceStarts[i].active = true
                        }
                    }

                    let count = 0 // 计数器-统计当前有几颗星
                    for (let i = 0; i < total; i++) {
                        if (this.severceStarts[i].active) {
                            count++
                        }
                    }
                    this.severStartNum = count
                }
            }
        },
        descArea() {
            const textVal = this.introduct.length
            this.Surplus = 200 - textVal
        },
        // 发布评论
        publicComment() {
            // this.scoreStartNum 代表商品评分
            // this.severStartNum 代表服务态度
            // this.inputText  代表心得
            // base64的图片流直接传给服务端，服务端传给阿里云，也可前端直接上传，拿到url链接上传到服务端。

        },
    },


}
</script>
<style lang="scss" module>
@import "../../../../css/element.scss";
.section{
   background: #fff;
   aside{
     font-size: 30px;
     @include list;
     flex-wrap: nowrap;
     height:84px;
     line-height: 84px;
     // background: #fff;
     box-sizing: border-box;
     padding: 0 20px;
     border-bottom: 1px solid #b7b7b7;
     div{
       @include list;
       height:84px;
       line-height: 84px;
       img{
          width:36px;
          height:36px;
          margin-top: 24px;
          margin-left: 36px;
       }
     }
    p{
      color:#a5a5a5;
      width:120px;
      text-align: right;
    }
  }
  textarea{
    width:600px;
    margin: 20px;
    height: 158px;
    font-size: 26px;
    border: 2px solid transparent !important;
    box-sizing: border-box;
    padding:10px;
    resize:none;
    &:focus{
       border: 2px solid #f60 !important;
    }
  }
  input{
    width:140px;
    height:140px;
    display:none;
    &+label{
      width:142px;
      height:142px;
      background: url(http://web.web3n.com/imagebj.jpg) center center no-repeat;
      background-size:100% 100%;
      display:block;
      margin-left:20px;
      margin-bottom:30px
    }
  }
  >div{
    font-size: 30px;
    @include list;
    flex-wrap: nowrap;
    height:126px;
    line-height: 100px;
    box-sizing: border-box;
    padding: 0 20px;
    border-top: 20px solid #eee;
    >div{
      @include list;
      height:100px;
      line-height: 100px;
      img{
         width:36px;
         height:36px;
         margin-top: 32px;
         margin-left: 36px;
      }
    }
   p{
     color:#a5a5a5;
     width:120px;
     text-align: right;
   }
  }
}
</style>

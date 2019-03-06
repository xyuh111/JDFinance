<template>
    <section :class="$style.section">
        <a href=""/>
        <h4>购物车</h4>
        <div>
            <p @click="oneditor">{{ editor?'编辑':'完成' }}</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkMwMDVBRjlFRDgzMTFFNDhBRkI4QUM4NjA2Qjk0M0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkMwMDVBRjhFRDgzMTFFNDhBRkI4QUM4NjA2Qjk0M0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUJDNTg4MEZEOUNCMTFFNDk4NDVFMTk2RUUzN0QzNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUJDNTg4MTBEOUNCMTFFNDk4NDVFMTk2RUUzN0QzNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63RxTUAAABQElEQVR42uyZv0rDUBTGm2ZyaIcKUnAo+g7pVgexW/MADm7SVcSxGS3dOjhl9R2yCQ5CB/+Ae97BDnVoSYf4HTlCKBZuQkjg8l34wb0kfIdf7r1niZOmacOG0WxYMihCEYpQhCIUoQhFKEIRilCEIhSxTMTxBhd/cx/cAk/X72AOooLZleS9vTxFWZF7MNkTMAVBzqKV5kEmkKM10pcScAMOQUfniT7zcxStPK9/NvTd495piMUJuAMPYA024BVsgWxZFzwaFq4lT47WCpOWmi53QsT8C3yDtmHhWvJMu5ZTdpMpO09EPnRx9c8L15kOYTpqyZM7Itt1Cc51G2NwAMZgBly9WLFh4VryrGm/siOyeAaf2k2OtBss9MuFBc5sZXmQ+M1z+FuBIhShCEUoQhGKUIQiFKEIRShil8iPAAMAn+B5xjiFvWsAAAAASUVORK5CYII=" alt="">
        </div>
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
    p{
      position: absolute;
      top:23px;
      right:80px;
      z-index:100;
    }
    img{
      line-height: 75px !important;
      position:absolute !important;
      right:20px !important;
      top:12px !important;
    }
  }
}
</style>

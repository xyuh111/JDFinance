<template>
    <section :class="$style.section">
        <dl>
            <dt>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAENUlEQVRYR+2WbWibVRTH/ydPonUVaQeitGinuDoFYbiKDiftB2FWkTE1G6NO2zy592nZQNkXnSBEERmIKBZKc+/zpBVWfAmDCnMwpsMX2KQyRXFuIJOtI4KIiy+rsiXPPXJHKm2TNGks9IvnU5J7z/n/cu695xzCChutsD7+B1g0A8lkcgsRPQngegB/EdF3AD7N5/NHstns5bnHJ6W8i5mfAtBV+n2aiE4R0ZfpdPrjakddEcB13Q7Hcd4BsJGZ/wTwFYBriegOAKsAnDfGbPN9/wsbWAixl4heBhBl5hkApwFcJKIOAGsAHA/DcEcQBOcWgpQBeJ53pzHmEyK6GkAqGo3qkZGRi9axp6cn2tnZ6QJ4BcBqZh4EcAsR7WXmEwCeb29vP5pKpcyskJTyEQATzHw5Eon0pNPp7+dCzAOIx+NXtba2fg3gBgCblFL2n5TZwMDATdFo9HApI3bdHo3d/3ul/VLKdcw8BWC6qalpw/Dw8KXZffMAPM8bYOYMMz+qtT642BMdHBxcE4ahhYUxZn2l9C64I7sBDAPYo5R6oyKAEOK4XdBab6ynPiQSiVvtvkwm82Ot/fF43GlpafmBiIpKqc4ygP7+/pZYLHaBiF5QSu2rFbCRdSHEPiJ6zhhzo+/7P9sY/x6BlPJuACeYebvW+v1GBGr5CCH6iGi/MabL9317aecBbALwOYCtSqnJWsEaWfc87zFmPsDM92utj80DKL39s8y8S2s90ohALR8hxDNE9GahULh5bGzs/DwA+0UIkSOiKaXU1lrBGlmXUh4GsEEpZSsrVwJ4jYieLRaLHZlM5qdGRKr5eJ63lplPM3OgtZYVn6Hruqsjkcg0gEmtte0By2ZCiA+IqDcMw7Vza0ZZKRZC7CGi14loZzqd3r8cBEKIbUT0ni3tSqmX5sYsA0ilUpFcLjdly2wYhvcGQWDLbMNWyqotQGfb2trumdsnyu7ArIrrurc5jvMNgF/DMLRl9kIjBFLKVcxsW/E6IupSSp1ZGKfqPJBMJp+IRCJZAJ/l8/mHstns30uBKDW2Q/bNG2O6gyCwzajMFh1IpJS2x7/IzMdisdjm2bZcBwgJISaJ6GFjzBbf9w9V86k5EwohholoNzN/WygUusfHx3+rAWDFMwCeJqLtSimbxapWE8CWaynlq3bYYOaTjuNsHh0dzVWKWBpY3mbmHQB2aq0namWrHoArMaSUuwC8xcy/GGN6gyC4MgvM2tDQUGuxWDxIRPcxs6u1Hq8lXvUVVHMUQjxIRAcARAB0K6XsrIhEInG74zh2Qmpl5se11h/VI75kAOsghFhPREeZ+Ro7CxLRGWZ+F8AlZn5Aa32yXvGGAKyTHVyZ+cPSxAtmPsfMvb7vn1qKeMMA1rGvr++65uZmYT/PzMzoiYmJP5Yq/p8AGhGr5FP3K1guwYVxVhzgH69ytDCNWHwgAAAAAElFTkSuQmCC" alt="">
                <p>品牌号</p>
            </dt>
            <dd>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAENUlEQVRYR+2WbWibVRTH/ydPonUVaQeitGinuDoFYbiKDiftB2FWkTE1G6NO2zy592nZQNkXnSBEERmIKBZKc+/zpBVWfAmDCnMwpsMX2KQyRXFuIJOtI4KIiy+rsiXPPXJHKm2TNGks9IvnU5J7z/n/cu695xzCChutsD7+B1g0A8lkcgsRPQngegB/EdF3AD7N5/NHstns5bnHJ6W8i5mfAtBV+n2aiE4R0ZfpdPrjakddEcB13Q7Hcd4BsJGZ/wTwFYBriegOAKsAnDfGbPN9/wsbWAixl4heBhBl5hkApwFcJKIOAGsAHA/DcEcQBOcWgpQBeJ53pzHmEyK6GkAqGo3qkZGRi9axp6cn2tnZ6QJ4BcBqZh4EcAsR7WXmEwCeb29vP5pKpcyskJTyEQATzHw5Eon0pNPp7+dCzAOIx+NXtba2fg3gBgCblFL2n5TZwMDATdFo9HApI3bdHo3d/3ul/VLKdcw8BWC6qalpw/Dw8KXZffMAPM8bYOYMMz+qtT642BMdHBxcE4ahhYUxZn2l9C64I7sBDAPYo5R6oyKAEOK4XdBab6ynPiQSiVvtvkwm82Ot/fF43GlpafmBiIpKqc4ygP7+/pZYLHaBiF5QSu2rFbCRdSHEPiJ6zhhzo+/7P9sY/x6BlPJuACeYebvW+v1GBGr5CCH6iGi/MabL9317aecBbALwOYCtSqnJWsEaWfc87zFmPsDM92utj80DKL39s8y8S2s90ohALR8hxDNE9GahULh5bGzs/DwA+0UIkSOiKaXU1lrBGlmXUh4GsEEpZSsrVwJ4jYieLRaLHZlM5qdGRKr5eJ63lplPM3OgtZYVn6Hruqsjkcg0gEmtte0By2ZCiA+IqDcMw7Vza0ZZKRZC7CGi14loZzqd3r8cBEKIbUT0ni3tSqmX5sYsA0ilUpFcLjdly2wYhvcGQWDLbMNWyqotQGfb2trumdsnyu7ArIrrurc5jvMNgF/DMLRl9kIjBFLKVcxsW/E6IupSSp1ZGKfqPJBMJp+IRCJZAJ/l8/mHstns30uBKDW2Q/bNG2O6gyCwzajMFh1IpJS2x7/IzMdisdjm2bZcBwgJISaJ6GFjzBbf9w9V86k5EwohholoNzN/WygUusfHx3+rAWDFMwCeJqLtSimbxapWE8CWaynlq3bYYOaTjuNsHh0dzVWKWBpY3mbmHQB2aq0namWrHoArMaSUuwC8xcy/GGN6gyC4MgvM2tDQUGuxWDxIRPcxs6u1Hq8lXvUVVHMUQjxIRAcARAB0K6XsrIhEInG74zh2Qmpl5se11h/VI75kAOsghFhPREeZ+Ro7CxLRGWZ+F8AlZn5Aa32yXvGGAKyTHVyZ+cPSxAtmPsfMvb7vn1qKeMMA1rGvr++65uZmYT/PzMzoiYmJP5Yq/p8AGhGr5FP3K1guwYVxVhzgH69ytDCNWHwgAAAAAElFTkSuQmCC" alt="">
                <p>收藏</p>
            </dd>
            <Btn :cname="$style.btn">立即购买</Btn>
        </dl>
    </section>
</template>
<script>
import Btn from "../components/core/btn.vue"
export default {
    name: "",
    components: {
        Btn,
    },
    data: () => ({

    }),
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.section{
   position: fixed;
   bottom:0;
   left: 0;
   right:0;
   background: #fff;
   dl{
     height:84px;
     border-top: 1px solid #ddd;
     @include list;
     justify-content: space-around;
     align-items: center;
     dt{
       font-size: 22px;
       color:#838383;
       img{
         width:32px;
         height:32px;
         margin: auto;
       }
       p{
         margin-top: 5px;
       }
     }
     dd{
       font-size: 22px;
       color:#838383;
       img{
         width:32px;
         height:32px;
         margin: auto
       }
       p{
         margin-top: 5px;
       }
     }
     .btn{
        margin-top: 12px;
        margin-bottom: 12px;
        width:430px;
        border-radius: 30px;
        font-size: 24px;
        height: 60px;
        line-height: 60px;
        padding: 0;
        background: linear-gradient(to right, #fe5900, #ff7901, #fe5900);
     }
   }
}
</style>

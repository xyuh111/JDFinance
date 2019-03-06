<template lang="html">
    <!--btnClass为默认类名   cname是传进来的一个类名 .  1. 允许自定义类。 2. 通过 html 的方式去填写文本-->
    <div :class="[btnClass, cname]">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            btnClass: "btn",
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../../css/element.scss";
.btn {
    @include btn;
}
</style>

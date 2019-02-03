<template lang="html">
    <div :class="$style.home">
        <h1>Home</h1>
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "xieyuhui",
        }
    },
}
</script>

<style lang="scss" module>
@import '../../css/reset.scss';
.home {
    color: red;
    font-size: 60px;
}
</style>

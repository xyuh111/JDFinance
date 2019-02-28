<template lang="html">
    <div>
        <Heador />
    </div>
</template>

<script>
import Heador from "../public/header.vue"
export default {
    components: {
        Heador,
    },
    data() {
        return {
            name: "xieyuhui",
        }
    },
}
</script>

<style lang="scss" scoped>
.home {
    color: red;
    font-size: 60px;
}
</style>

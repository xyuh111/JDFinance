<template lang="html">
    <div>
        <Heador />
        <Slider />
        <Novice />
        <Borrow/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
export default {
    name: "Home",
    components: {
        Heador,
        Slider,
        Novice,
        Borrow,
    },
    data() {
        return {
            name: "xieyuhui",
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div id="">
        <!-- 幻灯片 -->
        <Slider/>
        <!-- 评价 -->
        <Evaluation/>
        <!-- footer -->
        <Buy/>
    </div>
</template>
<script>
import Slider from "./hslider.vue"
import Evaluation from "./evaluation.vue"
import Buy from "./footerbuy.vue"
export default {
    name: "",
    components: {
        Slider,
        Evaluation,
        Buy,
    },
    data: () => ({

    }),
}
</script>
<style lang="scss" scoped>
</style>

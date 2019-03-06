<template>
    <div id="">
        <Header/>
        <!-- 评价 -->
        <Evaluation/>
        <!-- footer -->
    </div>
</template>
<script>
import Header from "./header.vue"
import Evaluation from "./evaluation.vue"
export default {
    name: "",
    components: {
        Evaluation,
        Header,
    },
    data: () => ({

    }),
}
</script>
<style lang="scss" scoped>
</style>

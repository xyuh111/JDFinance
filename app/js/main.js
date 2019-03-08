import Vue from "vue"
import store from "./stors"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

store.commit("increment")
store.commit("increment")

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */

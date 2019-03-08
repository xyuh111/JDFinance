export default {
    /* getters可以帮我们从state中进一步过滤我们需要的一些状态条件 */

    /* 判断商品是否已经在购物车内 */
    hasGoods: (state) => (goods) => `p${goods.id}` in state.cart,
    /* 返回购物车的数量 */
    cartNum(state) {
        const cart = state.cart
        return Object.keys(cart).length
    },
    /* 计算购物车的金额 */
    cartsMoney(state) {
        const cart = state.cart
        let money = 0
        for (const item in cart) {
            money += cart[item].money * cart[item].num
        }
        return Number(money)
    },
}

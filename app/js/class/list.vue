<template>
    <section :class="$style.section">
        <article v-for="item in items" :key="item.title">
            <!-- <h4 v-if="item.id==1">{{ item.titel }}</h4> -->
            <div v-if="item.id==2"><span>{{ item.titel }}</span><em>{{ item.sup }}<i /></em></div>
            <p v-if="item.id==3"><em>{{ item.titel }}</em></p>
            <ul>
                <li v-for="list in item.shop" :key="list.text">
                    <img :src="list.img" alt="">
                    <p>{{ list.text }}</p>
                </li>
            </ul>
        </article>
    </section>
</template>
<script>
export default {
    name: "",
    data: () => ({
        items: [
            // {
            //     id: 1,
            //     titel: "热销大牌",
            //     href: "",
            //     shop: [
            //         {
            //             img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
            //         },
            //         {
            //             img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
            //         },
            //         {
            //             img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
            //         },
            //     ],
            // },
            {
                id: 2,
                titel: "手机",
                sup: "热销榜",
                href: "",
                shop: [
                    {
                        img: "//image3.suning.cn/uimg/asbs/ad/1550828788252_imgWap_tmndir.jpg",
                        text: "全部手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "全面屏手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "游戏手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "长续航手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "以旧换新",
                    },
                ],
            },
            {
                id: 3,
                titel: "手机",
                href: "",
                shop: [
                    {
                        img: "//image3.suning.cn/uimg/asbs/ad/1550828788252_imgWap_tmndir.jpg",
                        text: "全部手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "全面屏手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "游戏手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "长续航手机",
                    },
                    {
                        img: "//image2.suning.cn/uimg/asbs/ad/1551089575252_imgWap_tmndir.jpg",
                        text: "以旧换新",
                    },
                ],
            },
        ],
    }),
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
</style>

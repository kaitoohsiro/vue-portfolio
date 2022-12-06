<template>
    <div id="products">
        <div class="products-title">
            <h2 class="color-t">Products</h2>
        </div>
        <v-container
                py-7
                px-6>
            <v-row
                    justify="center"
                    align-content="center">
                <v-col
                        cols="12"
                        xs="12"
                        sm="6"
                        md="6"
                        lg="6"
                        v-for="product in products"
                        :key="product.title">
                    <template>
                        <v-hover>
                            <v-card
                                    slot-scope="{ hover }"
                                    class="text-xs-center ma-4"
                                    :class="`elevation-${hover ? 12 : 4}`"
                                    color="grey darken-4">
                                <a target="blank" :href="product.link" class="border">
                                    <v-card-title class="p-title">
                                        <div class="mx-auto">
                                            <img
                                                size="100"
                                                class="img"
                                                width="100%"
                                                :src="product.img_url"
                                            >
                                        </div>
                                    </v-card-title>

                                    <v-card-actions>
                                        <v-layout justify-space-around>
                                            <div class="headline">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on }">
                                                        <span
                                                                :color="product.color"
                                                                :class="`${product.color}--text`"
                                                                class="subtitle-1"
                                                                v-on="on">
                                                            {{ product.title }}
                                                        </span>
                                                    </template>
                                                    <span>{{ product.duration }}</span>
                                                </v-tooltip>
                                            </div>
                                        </v-layout>
                                    </v-card-actions>
                                </a>
                            </v-card>
                        </v-hover>
                    </template>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    {
                        title: "Math Challenge",
                        color: "yellow",
                        link: "https://proq.herokuapp.com/",
                        img_url: require("@/assets/mc.png"),
                        show: false,
                    },
                    {
                        title: "Natural Science Lab",
                        color: "yellow",
                        link: "http://ok-nsl.herokuapp.com/",
                        img_url: require("@/assets/nsl.png"),
                        show: false,
                    },
                    {
                        title: "Okinawa Quiz",
                        color: "yellow",
                        link: "https://ok-okinawa-quiz.herokuapp.com/",
                        img_url: require("@/assets/ok.png"),
                        show: false,
                    },
                    {
                        title: "chat app",
                        color: "yellow",
                        link: "#",
                        img_url: require("@/assets/ca.png"),
                        show: false,
                    },
                    {
                        title: "intern project",
                        color: "yellow",
                        link: "https://sartus.herokuapp.com/",
                        img_url: require("@/assets/in.png"),
                        show: false,
                    },
                    {
                        title: "Kaifolio.ver1",
                        color: "yellow",
                        link: "https://kaitoohsiro.github.io/KaiFolio/index.html",
                        img_url: require("@/assets/pf2.png"),
                        show: false,
                    },
                    {
                        title: "Kaifolio.ver2",
                        color: "yellow",
                        link: "https://kaifolio.web.app/",
                        img_url: require("@/assets/pf1.png"),
                        show: false,
                    },
                    {
                        title: "music research",
                        color: "yellow",
                        link: "https://music-search-c6162.web.app/",
                        img_url: require("@/assets/ms.png"),
                        show: false,
                    },
                    {
                        title: "ToDoリスト",
                        color: "yellow",
                        link: "#",
                        img_url: require("@/assets/td.png"),
                        show: false,
                    },
                    {
                        title: "みんなの料理",
                        color: "yellow",
                        link: "https://dev.d18pk3xlx7hz0o.amplifyapp.com/",
                        img_url: require("@/assets/mr.png"),
                        show: false,
                    },
                    {
                        title: "amplify入門",
                        color: "yellow",
                        link: "https://zenn.dev/o_kai/books/f042f15bcdb006",
                        img_url: require("@/assets/am.png"),
                        show: false,
                    },
                    {
                        title: "顔認識",
                        color: "yellow",
                        link: "https://zenn.dev/o_kai/articles/bd63a6a8aa5cf8",
                        img_url: require("@/assets/pk.png"),
                        show: false,
                    },
                    {
                        title: "ディープラーニングフレームワークCyeld",
                        color: "yellow",
                        link: "https://github.com/kaitoohsiro/Cyeld",
                        img_url: require("@/assets/cy.jpg"),
                        show: false,
                    },

                    // {
                    //     title: "FireBase",
                    //     color: "amber",
                    //     show: false,
                    //     duration: "1 years",
                    // },
                ],
                interval: {},
                expand: false,
            }
        },
    };
</script>

<style scoped>
.p-title {
    padding: 0;
}
.img {
    border-radius: 5px;
    height: 200px;
}
.border {
    text-decoration: none;
}
#products {
    margin: 10px 0;
}
.products-title {
    text-align: center;
}
</style>
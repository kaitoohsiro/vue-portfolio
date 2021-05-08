<template>
    <v-app>
        <v-container grid-list-xl>
            <v-layout row wrap>
                <PostCard
                        v-for="post in posts"
                        v-bind:key="post.id"
                        :post=post
                ></PostCard>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import PostCard from '../components/PostCard'
    import {ALL_POSTS} from "../constants/graphql"

    export default {
        name: 'Blog',
        components: {
            PostCard,
        },
        apollo: {
            posts: ALL_POSTS
        },

        created() {
            console.log(this.posts)
        }
    }
</script>

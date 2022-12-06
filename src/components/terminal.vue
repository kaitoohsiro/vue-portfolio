<template>
    <div id="terminal">
        <div class="terminal-title">
            <h1 class="color-t">Welcome to KaiFolio!!!</h1>
        </div>
        <v-card
                class="mx-auto height"
                dark
                max-width="800"
        >
            <v-card-title>
                <v-icon
                        large
                        left
                >
                    mdi-call-split
                </v-icon>
                <span class="title font-weight-light"></span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
                <vue-typed-js :strings="word" :loop="false">
                    <p class="font-weight-light"><span class="typing"></span></p>
                </vue-typed-js>
            </v-card-text>
    </v-card>
    </div>
</template>


<script>
    export default {
        data: function() {
            return {
                word: [
                    "$ Hello, Who I am?",
                    "$ My info install" + "<br>" + "..............." + "<br>" + "..............." + "<br>" + "Complete!!",
                    '<pre><span class="color-r">&lt;?php</span></pre>' +
                    '<br>' +
                    '<span class="color-r">class</span>&nbsp;<span class="color-p">MyInfo</span>' +
                    '<br>' +
                    '{' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<span class="color-r">public function</span>&nbsp;<span class="color-p">User</span>()' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;{' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color-b">$userInfo</span> = [' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name" => "kaito",\n' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"age"  => 24,\n' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;];' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color-r">return</span>&nbsp;<span class="color-b">$userInfo</span>;' +
                    '<br>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;}' +
                    '<br>' +
                    '}'
                ]
            }
        }
    }
</script>



<style>
    .terminal-title {
        text-align: center;
        margin:50px auto 10px auto;
    }
    .height{
        height: 500px;
    }
    .color-t {
        color: #ffffff;
    }
    .color-r {
        color: #f47f1c;
    }
    .color-p {
        color: #ec3f3c;
    }
    .color-b {
        color: #3799ff;
    }
</style>

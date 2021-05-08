<template>
    <div id="skills">
        <div class="skills-title">
            <h2 class="color-t">Skills</h2>
        </div>
        <v-container
                py-6
                px-5>
            <v-row
                    justify="center"
                    align-content="center">

                <v-col
                        cols="12"
                        xs="12"
                        sm="12"
                        md="3"
                        lg="3"
                        v-for="skill in skills"
                        :key="skill.title">
                    <template>
                        <v-hover>
                            <v-card
                                    slot-scope="{ hover }"
                                    class="text-xs-center ma-4"
                                    :class="`elevation-${hover ? 12 : 4}`"
                                    color="grey darken-4">
                                <v-card-title>
                                    <div class="mx-auto">
                                        <v-progress-circular
                                                :value="skill.value"
                                                :color="skill.color"
                                                :rotate="-90"
                                                width="15"
                                                size="100">
                                            {{ skill.value }}
                                        </v-progress-circular>
                                    </div>
                                </v-card-title>

                                <v-card-actions>
                                    <v-layout justify-space-around>
                                        <div class="headline">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                    <span
                                                            :color="skill.color"
                                                            :class="`${skill.color}--text`"
                                                            class="subtitle-1"
                                                            v-on="on">
                                                        <v-icon size="18">
                                                            {{ skill.icon }}
                                                        </v-icon>
                                                        {{ skill.title }}
                                                    </span>
                                                </template>
                                                <span>{{ skill.duration }}</span>
                                            </v-tooltip>
                                        </div>
                                    </v-layout>
                                </v-card-actions>
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
                skills: [
                    {
                        title: "JavaScrpt",
                        value: 0,
                        absoluteValue: 80,
                        color: "yellow",
                        icon: "fab fa-javascript",
                        show: false,
                        duration: "2 years",
                    },
                    {
                        title: "Swift",
                        value: 0,
                        absoluteValue: 50,
                        color: "orange",
                        icon: "fab fa-swift",
                        show: false,
                        duration: "1 years",
                    },
                    {
                        title: "PHP",
                        value: 0,
                        absoluteValue: 80,
                        color: "purple",
                        icon: "fab fa-php",
                        show: false,
                        duration: "2 years",
                    },
                    {
                        title: "Python",
                        value: 0,
                        absoluteValue: 70,
                        color: "red",
                        icon: "fab fa-python",
                        show: false,
                        duration: "2 years",
                    },
                    {
                        title: "MATLAB",
                        value: 0,
                        absoluteValue: 60,
                        color: "green",
                        icon: "fab fa-matlab",
                        show: false,
                        duration: "2 years",
                    },
                    {
                        title: "C++",
                        value: 0,
                        absoluteValue: 50,
                        color: "blue",
                        icon: "fab fa-C++",
                        show: false,
                        duration: "2 years",
                    },
                    {
                        title: "Vue.js",
                        value: 0,
                        absoluteValue: 80,
                        color: "light-green",
                        show: false,
                        duration: "1.5 years",
                    },
                    {
                        title: "Laravel",
                        value: 0,
                        absoluteValue: 80,
                        color: "deep-orange",
                        show: false,
                        duration: "1.5 years",
                    },
                    {
                        title: "Django",
                        value: 0,
                        absoluteValue: 30,
                        color: "blue",
                        show: false,
                        duration: "1 years",
                    },

                    {
                        title: "PostgreSQL",
                        value: 0,
                        absoluteValue: 60,
                        color: "deep-purple",
                        show: false,
                        duration: "1 years",
                    },
                    {
                        title: "MySQL",
                        value: 0,
                        absoluteValue: 70,
                        color: "indigo",
                        show: false,
                        duration: "1 years",
                    },
                    {
                        title: "Docker",
                        value: 0,
                        absoluteValue: 60,
                        color: "blue",
                        show: false,
                        duration: "1 years",
                    },
                    {
                        title: "AWS Lambda",
                        value: 0,
                        absoluteValue: 30,
                        color: "red",
                        show: false,
                        duration: "1 years",
                    },
                    {
                        title: "FireBase",
                        value: 0,
                        absoluteValue: 30,
                        color: "amber",
                        show: false,
                        duration: "1 years",
                    },
                ],
                interval: {},
                expand: false,
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            let timesRun = 0;
            this.interval = setInterval(() => {
                if (timesRun === 10) {
                    clearInterval(this.interval);
                    return;
                }
                timesRun += 1;
                this.skills.forEach((skill) => {
                    if (skill.absoluteValue !== skill.value) {
                        skill.value += 10
                    }
                });
            }, 300)
        }
    };
</script>

<style>
    #skills {
        margin: 10px 0;
    }
    .skills-title {
        text-align: center;
    }
</style>

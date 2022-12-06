<template>
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">Thanks! This is my sns and blog.</strong>
  
          <v-spacer></v-spacer>
  
          <v-btn
            v-for="icon in icons"
            :key="icon.name"
            class="mx-4"
            dark
            icon
          >
          <a target="blank" class="link-class" :href="icon.url">
            <v-icon size="24px">
                {{ icon.name }}
            </v-icon>
        </a>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Kaifolio</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </template>


<script>
  export default {
    data: () => ({
      icons: [
        {url: 'https://github.com/kaitoohsiro', name: 'mdi-account'},
        {url: 'https://twitter.com/Kaito14123925', name: 'mdi-twitter'},
        {url: 'https://o-kailog.com/', name: 'mdi-post'},
    ],
    }),
  }
</script>

<style scoped>
.link-class {
    text-decoration: none;
    color: #ffffff;
}
</style>
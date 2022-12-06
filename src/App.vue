<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer><h2>KaiFolio</h2></v-spacer>

      <v-btn
        href="#"
        target="_blank"
        text
      >
        <span class="mr-2">kaito</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Terminal/>
      <Skills/>
      <Products/>
      <About/>
      <router-view/>
      <ffooter/>
    </v-main>
  </v-app>
</template>

<script>
import Terminal from "./components/terminal"
import Skills from "./components/skills"
import Products from "./components/products"
import About from "./components/about"
import ffooter from "./components/footer.vue"


  export default {
    name: 'App',

  components: {
    Terminal,
    Skills,
    Products,
    About,
    ffooter
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-color: rgba(0, 0, 0, 0.8);
}
ffooter {
  width : 100%;
}
</style>

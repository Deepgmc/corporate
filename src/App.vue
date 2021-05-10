<template>
  <v-app id="app">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="header_cnt">CORPORATE MANAGEMENT</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <navigation-panel />
        </v-col>
        <v-col cols="9" v-if="isAuthenticated">
          <router-view />
        </v-col>
        <v-col v-else cols="9">
          <login-page />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import NavigationPanel from "@/components/NavigationPanel";
import LoginPage from "@/components/LoginPage";
export default {

  data: () => ({
    loading: true
  }),

  mounted() {
    this.$store.dispatch('loadAuthenticate')
  },

  computed: {

    isAuthenticated() {
      console.log('Is authenticated call');
      return !!this.$store.getters.isAuthenticated
    },
  },

  components: {
    NavigationPanel,
    LoginPage,
  },
}
</script>


<style lang="scss">
#app {
  .header_cnt {
    border-bottom: 1px solid grey;
  }
}
</style>

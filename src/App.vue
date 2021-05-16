<template>
  <v-app id="app">
    <v-container fluid>
      <v-row>
        <v-btn class="mr-4" @click="handleLogoutSubmit"> Выйти </v-btn>
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


    <v-snackbar
      v-model="snackbar"
      :timeout="snackbarTimeout"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          snackbarText
          v-bind="attrs"
          @click="snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>


  </v-app>
</template>
<script>
import NavigationPanel from '@/components/NavigationPanel'

import LoginPage from '@/components/LoginPage'

export default {
  data: () => ({
    loading        : true,
    snackbar       : false,
    snackbarText   : 'Sample text',
    snackbarTimeout: 7000,
  }),

  provide() {
      return {
          showSnackbar: this.showSnackbar,
      }
  },

  mounted() {
    this.$store.dispatch('loadAuthenticate');
  },

  methods: {
    showSnackbar(snackbarText){
      this.snackbarText = snackbarText
      this.snackbar = true
    },
    async handleLogoutSubmit() {
      this.$store.dispatch('logout')
    }
  },

  computed: {
    isAuthenticated() {
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

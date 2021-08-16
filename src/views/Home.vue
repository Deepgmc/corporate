<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="text-center" cols="12" md="12">
        HOME
        Обязательно блок новостей (например с dp.ru), новости законов, судебные новости etc.
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" md="3">
        <CurrencyInfo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CurrencyInfo from '@/components/CurrencyInfo'

export default {
  name: 'Home',
  components: {
    CurrencyInfo
  }
};
</script>

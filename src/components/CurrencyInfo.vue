<template>
  <v-row>
    Плагин текущих курсов валют к рублю
    http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB
  </v-row>
</template>

<script>
export default {
  name: 'CurrencyInfo',
};
</script>

<template>
    <v-row align="center">
      <v-col class="text-center" cols="12" sm="12">
        <template v-if="!$route.meta.isChild">
            CompanyMain
            Общая выручка компании, количество и сумма продаж, графики
        </template>
        <router-view />
      </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'company',
}
</script>

<style>
</style>
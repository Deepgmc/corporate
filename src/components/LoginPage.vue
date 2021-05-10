<template>
  <v-form @submit.prevent="handleLoginSubmit">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >

        <v-alert
            border="left"
            color="indigo"
            dark
            >
            Если вы еще не зарегистрированы, то это же является и формой регистрации.
            Для логина введите только логин и пароль
        </v-alert>

          <v-text-field
            v-model="email"
            label="Email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Пароль"
          ></v-text-field>

          <v-text-field
            v-model="companyName"
            label="Название компании"
          ></v-text-field>

          <v-text-field
            v-model="companyInn"
            label="ИНН компании"
          ></v-text-field>

          <v-btn
            class="mr-4"
            @click="handleLoginSubmit"
          >
            Войти
          </v-btn>

        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
    name: 'LoginPage',

    data: () => ({
        email      : 'deepgmc_job@mail.ru',
        password   : '123456qwe',
        companyName: 'Sorera',
        companyInn : '1234567890'
    }),

    methods: {
        async handleLoginSubmit(){
            //Логиним или регаем юзера.
            //Если данные компании заполнены, то это регистрация, иначе это логин
            const operation = (!!this.companyInn.trim() && !!this.companyName.trim() ? 'register' : 'login')
            await this.$store.dispatch(operation, {
                email      : this.email,
                password   : this.password,
                companyName: this.companyName,
                companyInn : this.companyInn
            })
            await this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
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
            type="email"
            required
            label="Email"
            @blur="$v.email.$touch()"
            :error-messages="getErrors('email', $v.email)"
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            label="Пароль"
            required
            @blur="$v.password.$touch()"
            :error-messages="getErrors('password', $v.password)"
          ></v-text-field>
          

          <v-text-field
            v-model="companyName"
            label="Название компании"
          ></v-text-field>

          <v-text-field
            v-model="companyInn"
            label="ИНН компании"
            @blur="$v.companyInn.$touch()"
            :error-messages="getErrors('companyInn', $v.companyInn)"
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
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
    name: 'LoginPage',

    inject: ['showSnackbar'],

    data: () => ({
        email      : 'deepgmc_job@mail.ru',
        password   : '123456qwe',
        companyName: 'Sorera',//'',//
        companyInn : '1234567890'//'',//
    }),

    validations: {
      email   : {email, required},
      password: {required, minLength: minLength(3)},
      companyInn: {minLength: minLength(10)}
    },

    methods: {

        validate() {
          this.$v.$touch();
          if (this.$v.$invalid) {
            return
          }
        },

        getErrors(name, model) {
          const errors = []
          if (!model.$dirty) return errors
          switch (name) {
            case 'password':
              !model.required && errors.push('Придумайте пароль')
              model.required && !model.minLength && errors.push('Пароль должен быть не менее 2 символов')
              break
            case 'email':
              !model.required && errors.push('Укажите почту')
              !model.email && errors.push('Неверный формат почты')
              break
            case 'companyInn':
              !model.minLength && errors.push('ИНН 10 цифр')
              break
          }
          return errors

        },

        async handleLoginSubmit(){
            //Логиним или регаем юзера.
            //Если данные компании заполнены, то это регистрация, иначе это логин
            const operation = (!!this.companyInn.trim() && !!this.companyName.trim() ? 'register' : 'login')
            
            console.log('Requested operation:', operation)

            try{
              await this.$store.dispatch('auth/' + operation, {
                  email      : this.email,
                  password   : this.password,
                  companyName: this.companyName,
                  companyInn : this.companyInn
              })
            } catch (e){  
              //ошибки логина вываливаем в корневой компонент
              this.showSnackbar(e.message)
            }
        }
    }//methods end
}
</script>

<style>
</style>
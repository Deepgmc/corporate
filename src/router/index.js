import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },


  {
    path: '/company',
    name: 'company',
    meta: { isChild: false },
    component: () => import(/* webpackChunkName: "company_main" */ '@/views/CompanyMain.vue'),
    children: [
      {
        path: 'finance',
        meta: { isChild: true },
        component: () => import(/* webpackChunkName: "company_finance" */ '@/views/company/Finance.vue')
      },
      {
        path: 'banking',
        meta: { isChild: true },
        component: () => import(/* webpackChunkName: "company_finance" */ '@/views/company/Banking.vue')
      }
    ]
  },
  



  {
    path: '/employee',
    name: 'employee',
    component: () => import(/* webpackChunkName: "employee_main" */ '@/views/EmployeeMain.vue')
  }



]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

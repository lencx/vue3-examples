/**
 * @author: lencx
 * @create_at: Nov 23, 2020
 */

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import routes generated by Voie
import routes from 'voie-pages'

import App from './App.vue'
import './main.postcss'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')

import * as Vue from 'vue'
import App from './App.vue'
import Modal from '~/components/Modal'

const app = Vue.createApp(App)
app.component('Modal', Modal)
app.mount('#app')
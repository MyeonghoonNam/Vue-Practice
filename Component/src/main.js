import * as Vue from 'vue'
import App from '~/App'
import Button from '~/components/Button' // 컴포넌트의 전역 등록

const app = Vue.createApp(App)
app.component('Button', Button) // 컴포넌트의 전역 등록
app.mount('#app')
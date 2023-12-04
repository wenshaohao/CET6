import { createApp } from 'vue'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {WOW} from 'wowjs'
import ElementPlus from 'element-plus'
import axios from 'axios'



import VueCookies from 'vue-cookies'
// import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import 'element-plus/dist/index.css'
import router from './router/index.js' 
import App from './App.vue'

 


const app=createApp(App)





app.config.globalProperties.$cookies = VueCookies

import '../src/assets/css/animate.css';
import '../src/assets/css/bootstrap-5.0.0-alpha-1.min.css';
import '../src/assets/css/LineIcons.2.0.css';

import logo from '../src/assets/picture/logo.jpg';
import logo1 from '../src/assets/picture/logo1.jpg';
// import App from './view/login/login.vue'
// import App from './view/index/index.vue'
// import header from '../src/components/header.vue'
// import App from './view/word/word.vue'
// import App from './view/reading/reading.vue'
// import App from './view/person/person.vue'
// import App from './view/special_exercises/special_exercises.vue'

// const app=createApp()
app.use(router);
app.use(ElementPlus)
app.use(VueLazyload)
app.component('QuillEditor', QuillEditor)
// app.use(axios)
app.mount('#app')

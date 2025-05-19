import { createApp } from "vue";
import App from './App.vue'
import './assets/styles/main.css'
import './assets/styles/animations.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
const app = createApp(App)
app.mount('#app')
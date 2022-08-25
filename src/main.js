import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import HomeIndex from '@/components/HomeIndex.vue';
import RocketsIndex from '@/components/RocketsIndex.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomeIndex, name: 'Home'},
        {path: '/rockets', component: RocketsIndex, name: 'Rockets'},
    ]
})
createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import HomeIndex from '@/components/HomeIndex.vue';
import RocketsIndex from '@/components/RocketsIndex.vue';
import Rocket_Falcon1 from "@/components/Rocket_Falcon1";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomeIndex, name: 'Home'},
        {path: '/rockets/:id', component: RocketsIndex,
        children: [
            {
                path: '1',
                component: Rocket_Falcon1,
                name: 'fal1'
            },
        ]},
    ]
})
createApp(App).use(router).mount('#app')

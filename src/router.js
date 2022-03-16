import {createRouter, createWebHistory} from 'vue-router'
import GameView from "@/views/GameView";
import NotFound from "@/views/NotFound";
import VueView from "@/views/VueView";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'game',
            component: GameView
        },
        {
            path: '/dev',
            name: 'dev',
            component: VueView
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound
        }
    ]
})

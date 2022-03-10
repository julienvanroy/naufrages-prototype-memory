import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage";
import GamePage from "@/pages/GamePage";
import NotFound from "@/pages/NotFound";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/game',
            name: 'game',
            component: GamePage
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound
        }
    ]
})

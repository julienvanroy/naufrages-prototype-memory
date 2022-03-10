import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
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
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound
        }
    ]
})

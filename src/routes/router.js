import {createRouter, createWebHistory} from 'vue-router' 
import Home from '@/pages/home'
import Single from '@/pages/single'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/story/:id',
        name: 'Single',
        component: Single
    }
];

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
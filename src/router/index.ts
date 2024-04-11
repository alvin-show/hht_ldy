import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        //路由初始指向
        path: '/',
        name: 'home',
        component: () => import('../components/ads.vue'),
    },
    {
        //路由初始指向
        path: '/detail',
        name: 'detail',
        component: () => import('../components/detail.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
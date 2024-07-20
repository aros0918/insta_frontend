import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/public/home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/auth/layout.vue'),
            children: [
                {
                    path: '',
                    name: 'auth.login',
                    component: () => import('../views/auth/login.vue'),
                },
            ],
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/auth/layout.vue'),
            children: [
                {
                    path: '',
                    name: 'auth.register',
                    component: () => import('../views/auth/register.vue'),
                },
            ],
        },
        {
            path: '/app',
            name: 'app',
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('token');
                if (!token) {
                    return next('/login');
                }
                next();
            },
            component: () => import('../views/app/layout.vue'),
            children: [
                {
                    path: '',
                    name: 'app.lobby',
                    component: () => import('../views/app/lobby.vue'),
                },
            ],
        },
        {
            path: '/subscription',
            name: 'subscription',
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('token');
                if (!token) {
                    return next('/login');
                }
                next();
            },
            component: () => import('../views/app/layout.vue'),
            children: [
                {
                    path: '',
                    name: 'app.subscription',
                    component: () => import('../components/Subscription.vue'),
                },
            ],
        }
        
    ],
});

export default router;

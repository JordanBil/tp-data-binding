import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/tp1",
            name: "Tp1",
            component: () => import("../views/tp/Tp.vue")
        },
        {
            path: "/tp2",
            name: "Tp2",
            component: () => import("../views/tp/Tp2.vue")
        },
        {
            path: "/tp3",
            name: "Tp3",
            component: () => import("../views/tp/Tp3.vue")
        },
        {
            path: "/tp4",
            name: "Tp4",
            component: () => import("../views/tp/Tp4.vue")
        },
        {
            path: "/exo",
            name: "Exo",
            component: () => import("../views/exo/Exo.vue")
        },
        {
            path: "/exo2",
            name: "Exo2",
            component: () => import("../views/exo/Exo2.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

export default router;
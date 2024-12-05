import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/tp/tp",
            alias: "/tp/tp",
            name: "Tp",
            component: () => import("../views/tp/Tp.vue")
        },
        {
            path: "/tp/tp2",
            alias: "/tp/tp2",
            name: "Tp2",
            component: () => import("../views/tp/Tp2.vue")
        },
        {
            path: "/tp/tp3",
            alias: "/tp/tp3",
            name: "Tp3",
            component: () => import("../views/tp/Tp3.vue")
        },
        {
            path: "/tp/tp4",
            alias: "/tp/tp4",
            name: "Tp4",
            component: () => import("../views/tp/Tp4.vue")
        },
        {
            path: "/exo/exo",
            alias: "/exo/exo",
            name: "Exo",
            component: () => import("../views/exo/Exo.vue")
        },
        {
            path: "/exo/exo2",
            alias: "/exo/exo2",
            name: "Exo2",
            component: () => import("../views/exo/Exo2.vue")
        },
        {
            path: "/exo/exo3",
            alias: "/exo/exo3",
            name: "Exo3",
            component: () => import("../views/exo/Exo3.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

export default router;
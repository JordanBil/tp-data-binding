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
            path: "/tp",
            alias: "/tp",
            name: "Tp",
            component: () => import("../views/Tp.vue")
        },
        {
            path: "/tpDeux",
            alias: "/tpDeux",
            name: "TpDeux",
            component: () => import("../views/TpDeux.vue")
        },
        {
            path: "/exo",
            alias: "/exo",
            name: "Exo",
            component: () => import("../views/Exo.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

export default router;
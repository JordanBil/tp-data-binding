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
            path: "/tp5",
            name: "Tp5",
            component: () => import("../views/tp/Tp5.vue")
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
            path: "/lesson-vfor",
            name: "lesson-vfor",
            component: () => import("../views/lesson/LessonListRendering.vue")
        },
        {
            path: "/lesson-watchers",
            name: "lesson-watchers",
            component: () => import("../views/lesson/LessonWatchers.vue")
        },
        {
            path: "/lesson-text-interpolation",
            name: "lesson-text-interpolation",
            component: () => import("../views/lesson/LessonTextInterpolation.vue")
        },
        {
            path: "/lesson-methods",
            name: "lesson-methods",
            component: () => import("../views/lesson/LessonMethods.vue")
        },
        {
            path: "/lesson-vhtml",
            name: "lesson-vhtml",
            component: () => import("../views/lesson/LessonInlineTemplatingView.vue")
        },
        {
            path: "/lesson-vbind",
            name: "lesson-vbind",
            component: () => import("../views/lesson/LessonAttributeBindingView.vue")
        },
        {
            path: "/lesson-von",
            name: "lesson-von",
            component: () => import("../views/lesson/LessonEventBindingView.vue")
        },
        {
            path: "/lesson-vmodel",
            name: "lesson-vmodel",
            component: () => import("../views/lesson/LessonTwoWayBinding.vue")
        },
        {
            path: "/lesson-dynamic-style",
            name: "lesson-dynamic-style",
            component: () => import("../views/lesson/LessonDynamicStyling.vue")
        },
        {
            path: "/lesson-computed",
            name: "lesson-computed",
            component: () => import("../views/lesson/LessonComputedProperties.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

export default router;
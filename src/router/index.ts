import isAunthenticated from "@/modules/auth/guards/authenticadedGuard";
import NotFound from "@/modules/common/pages/notFound.vue";
import HomePage from "@/modules/landing/pages/homePage.vue";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landingLayout",
            component: () => import("@/modules/landing/layouts/landingLayouts.vue"),
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: HomePage,
                },
                {
                    path: "/features",
                    name: "Features",
                    component: () => import("@/modules/landing/pages/featuresPage.vue"),
                },
                {
                    path: "/pricing",
                    name: "Pricing",
                    component: () => import("@/modules/landing/pages/pricingPage.vue"),
                },
                {
                    path: "/contact",
                    name: "Contact",
                    component: () => import("@/modules/landing/pages/contactPage.vue"),
                },
                {
                    path: "/pokemons/:id",
                    name: "Pokemons",
                    beforeEnter: [isAunthenticated],
                    props: (route) => {
                        const id = Number(route.params.id);
                        return { id: isNaN(id) ? 1 : id };
                    },
                    component: () => import("@/modules/pokemon/pages/pokemonPage.vue"),
                },
            ],
        },
        {
            path: "/auth",
            redirect: { name: 'Login' },
            name: "Auth",
            component: () => import("@/modules/auth/layouts/authLayout.vue"),
            children: [
                {
                    path: '/login',
                    name: 'Login',
                    component: () => import("@/modules/auth/page/loginPage.vue"),
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: () => import("@/modules/auth/page/registerPage.vue"),
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ],
});
export default router;
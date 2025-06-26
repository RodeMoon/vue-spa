import HomePage from "@/modules/landing/pages/homePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/features",
            name: "Features",
            component: () => import ("@/modules/landing/pages/featuresPage.vue"),
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
    ],
});
export default router;
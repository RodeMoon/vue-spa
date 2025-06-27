import type { NavigationGuardNext, RouteLocationNormalizedGeneric, RouteLocationNormalizedLoadedGeneric } from "vue-router";

const isAunthenticated = (
    to: RouteLocationNormalizedGeneric,
    from: RouteLocationNormalizedLoadedGeneric,
    next: NavigationGuardNext
) => {
    const userId = localStorage.getItem("userId");
    localStorage.setItem('lastPath', to.path);
    if (!userId) {
        return next({ name: "Login" });
    }
    return next();
}

export default isAunthenticated;
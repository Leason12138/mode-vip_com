import Vue from "vue";
import VueRouter from "vue-router";
import Featured from "../views/Featured.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Featured",
        component: Featured,
        meta: { isShowNav: true },

    },

    {
        path: "/ThreeFold",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/ThreeFold.vue"),
        meta: { isShowNav: true },

    },
    {
        path: "/VipQuicklyRob",
        name: "VipQuicklyRob",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/VipQuicklyRob.vue"),
        meta: { isShowNav: true },

    },
    {
        path: "/VipAoLai",
        name: "VipAoLai",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/VipAoLai.vue"),
        meta: { isShowNav: true },

    },
    {
        path: "/Clearance",
        name: "Clearance",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Clearance.vue"),
        meta: { isShowNav: true },

    },
    {
        path: "/Shoper",
        name: "Shoper",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Shoper.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
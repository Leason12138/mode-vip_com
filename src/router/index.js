import Vue from "vue";
import VueRouter from "vue-router";
import Featured from "../views/Featured.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Featured",
        component: Featured,
    },

    {
        path: "/ThreeFold",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/ThreeFold.vue"),
    },
    {
        path: "/VipQuicklyRob",
        name: "VipQuicklyRob",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/VipQuicklyRob.vue"),
    },
    {
        path: "/VipAoLai",
        name: "VipAoLai",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/VipAoLai.vue"),
    },
    {
        path: "/Clearance",
        name: "Clearance",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Clearance.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
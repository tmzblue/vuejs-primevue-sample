import { createWebHistory, createRouter } from "vue-router";
import HomeWrapper from "@/views/HomeWrapper.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Subhome from "@/views/Subhome.vue";

const routes = [
    {
        path: "/",
        name: "HomeWrapper",
        component: HomeWrapper,
        children: [{
            path: "/home/subhome",
            name: "Subhome",
            component: Subhome
        }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact/:name",
        name: "Contact",
        component: Contact,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home/Home.vue";
import Information from "@/components/information/Information.vue"
import ProjectOverview from "@/components/projects/ProjectOverview.vue";
import Projects from "@/components/projects/Projects.vue";
import Responsables from "@/components/responsables/Responsables.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/projets",
            name: "Projects",
            component: Projects,
        },
        {
            path: "/projets/:projectIndex",
            name: "ProjectOverview",
            props: true,
            component: ProjectOverview,
        },
        {
            path: "/information",
            name: "Information",
            component: Information,
        },
        {
            path: "/responsables",
            name: "ResponsablesPage",
            component: Responsables
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 0 }
    }
});


export default router;
import contact from "@/components/contact/contact.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Evenements from "../components/evenements/Evenements.vue";
import Home from "../components/home/Home.vue"
import Information from "../components/information/Information.vue"
import ProjectOverview from "../components/projects/ProjectOverview.vue"
import Projects from "../components/projects/Projects.vue"
import Responsables from "../components/responsables/Responsables.vue"
import partenaires from "../components/partenaires/Partenaires.vue"


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
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
            path: "/projet/:projectHash",
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
        },
        {
            path: "/evenements",
            name: "EvenementsPage",
            component: Evenements
        },
        {
            path: "/partenaires",
            name: "PartenairesPage",
            component: partenaires
        },
        {
            path: "/contact",
            name: "ContactPage",
            component: contact
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { el: to.hash, behavior: "smooth" };
        }
        return { left: 0, top: 0 }
    },
});


export default router;
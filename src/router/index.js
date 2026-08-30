import { createRouter, createWebHashHistory } from "vue-router";
import Contact from "@/components/contact/contact.vue";
import Evenements from "../components/evenements/Evenements.vue";
import Home from "../components/home/Home.vue"
import Information from "../components/information/Information.vue"
import Partenaires from "../components/partenaires/Partenaires.vue"
import ProjectOverview from "../components/projects/ProjectOverview.vue"
import Projects from "../components/projects/Projects.vue"
import Responsables from "../components/responsables/Responsables.vue"

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
            path: "/Partenaires",
            name: "PartenairesPage",
            component: Partenaires
        },
        {
            path: "/Contact",
            name: "ContactPage",
            component: Contact
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
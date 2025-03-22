import * as peopleInfo from '../responsables/Responsables.js'
import * as projectsDataFile from "../projects/Projects.js";
import discordIcon from '@/assets/home/discord.jpg';
import facebookIcon from '@/assets/home/Facebook.svg.png';
import instagramIcon from '@/assets/home/Instagram.png';
import linkedInIcon from '@/assets/home/LinkedIn.png';
import logoPath from '@/assets/home/logo_cdjvul_1920x1080.png';
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      projects: [],
      logoPath,
      facebookIcon,
      discordIcon,
      linkedInIcon,
      instagramIcon,
      presidentInfo: [],
      eventsList: []
    };
  },

  created() {
    this.projects = projectsDataFile.projects;
    for (const element of peopleInfo.responsables) {
      if (element.isPresident === true) {
        this.presidentInfo = element;
      }
    }
    this.sortEvents()
    const {eventID} = useRoute().query;
    if (eventID) {
      this.$router.push({
          name: "EvenementsPage",
          query: {
            eventID
          }
        }
      )
    }
  },

  methods: {
    getImagePath(imageName, president = false) {
      if (!president) {
        return new URL(`../../assets/projects/${imageName}`, import.meta.url).href;
      }
        return new URL(`../../assets/responsables/${imageName}`, import.meta.url).href;
    },
    goToProject(index) {
      this.$router.push({
        name: "ProjectOverview",
        params: {
          projectIndex: index
        }
      });
    },
    sortEvents() {
      this.eventsList = []
      fetch("https://cdj-bot.onrender.com/getLastDB_URL")
      .then(response => {
        response.json().then(json => {
          fetch(json.URL).then(response2 => {
            response2.json().then(json2 => {
              for (const session of json2.data) {
                for (const element of session.events) {
                  const date = new Date(element.dateDebut.replace(" ", "T"))
                  if ( date.getTime() > Date.now() && element.visible === true) {
                    this.eventsList.push(element)
                  }
                }
              }
              this.eventsList.sort(this.compareEventsDate)
            })
            })
          })
      })
    },
    nextEventAvailable() {
      if (this.eventsList.length) {
        return true
      }
      return false
    },
    compareEventsDate(e1, e2)  {
      const date1 = new Date(e1.dateDebut.replace(" ", "T")),
        date2 = new Date(e2.dateDebut.replace(" ", "T")),
        equal = 0,
        inferior = -1,
        superior = 1;
      if (date1 > date2) {
        return superior
      } else if (date1 < date2){
        return inferior
      }
        return equal
    }
  }
};
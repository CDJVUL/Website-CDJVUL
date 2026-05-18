// Disabled new-cap error in this file beacuse of CryptoJS defines functions in uppercase without being constructors.
/*eslint new-cap: "warn"*/
import CryptoJS from 'crypto-js';
import logoClub from '../../assets/home/logo_cdjvul_1920x1080.png'
import { useRoute } from "vue-router";

export default {
    data: () => ({
        showInfo: false,
        currentEvent : [],
        events: [],
        logoClub,
        eventType: "google",
        showMenu: false,
        sortedEventList: [],
        eventID: ""
    }),
    beforeMount() {
      const {nextEvent} = useRoute().query,
       {eventID} = useRoute().query;
      this.init(nextEvent, eventID);
    },
    mounted() {
      this.$router.replace({ query: {} });
    },
    methods: {
        init(nextEvent, eventID) {
          fetch("https://cdj-bot.onrender.com/getLastDB_URL")
          .then(response => {
            response.json().then(json1 => {
              const repoURL = json1.URL
              fetch(repoURL).then(resp2 => {
                resp2.json().then(json2 => {
                  this.events = json2.data;
                  this.sortSessions(this.events);
                  this.sortEvents();
                  if (nextEvent) {
                    const firstIndex = 0
                    this.showInfosModal(this.sortedEventList.at(firstIndex))
                  } else if (eventID) {
                    const foundEvent = this.findEventByID(eventID);
                    if (foundEvent) {
                      this.showInfosModal(foundEvent);
                    }
                  }
                })
              })
            })
          })
        },
        sortSessions(list) {
          list.sort((session1, session2) => {
            const indexSessionName = 0,
                  indexYear = 1,
                  inferior = -1,
                  partsSession1 = session1.sessionName.split(' '),
                  partsSession2 = session2.sessionName.split(' '),
                  sessionNames = [
                    "Automne",
                    "Été",
                    "Hiver"
                  ],
                  superior = 1;
            if (parseInt(partsSession1.at(indexYear), 10) < parseInt(partsSession2.at(indexYear), 10)) {
              return inferior;
            }
            if (partsSession1.at(indexYear) === partsSession2.at(indexYear)) {
              if (sessionNames.indexOf(partsSession1.at(indexSessionName)) > sessionNames.indexOf(partsSession2.at(indexSessionName))) {
                return superior;
              }
            }
            return inferior;
          })
        },
        showInfosModal(event) {
            document.body.style.overflow = "hidden";
            this.currentEvent = event;
            this.showInfo = true;
            const hash = CryptoJS.MD5(JSON.stringify(this.currentEvent));
            this.eventID = hash.toString(CryptoJS.enc.Hex);
        },
        hideInfosModal() {
            document.body.style.overflow = "auto";
            this.currentEvent = [];
            this.showInfo = false;
            this.eventID = "";
        },
        filterActive(eventsList, state) {
            const newEvents = [];
            for (const item of eventsList) {
              if (item.visible) {
                if (!item.dateDebut && !state) {
                  newEvents.push(item);
                } else {
                  const eventDate = new Date(item.dateFin.replace(" ",  "T"))
                  if (state && eventDate.getTime() > Date.now()) {
                    newEvents.push(item);
                  }
                  else if (!state && eventDate.getTime() < Date.now()) {
                    newEvents.push(item);
                  }
                }
              }
            }
            return newEvents.sort(this.compareEventsDate);
        },
        loadPage(url) {
          open(url, "_blank");
        },
        downloadCalendarEvent(event) {
          /*
            content = {
              "service": this.eventType,
              "title": event.name,
              "description": event.description,
              "start": event.dateDebut.replace(" ", "T"),
              "end": event.dateFin.replace(" ", "T"),
              "timezone": "America/Toronto"
            }
            */
            let link = encodeURI(`https://addcal.co/api/calndr/d/event?service=${  this.eventType  }&title=${  event.name  }&description=`)
            link = `${link}${encodeURI(event.description).replaceAll("&", "%26").replaceAll("#", "%23").replaceAll("\n", "")}&start=${  event.dateDebut.replace(" ", "T")  }&end=${event.dateFin.replace(" ", "T")}&timezone=America/Toronto`;
            open(link, "_blank")
        },
        sortEvents() {
          this.sortedEventList = []
          for (const session of this.events) {
            for (const element of session.events) {
              const date = new Date(element.dateDebut.replace(" ", "T"))
              if (date.getTime() > Date.now() && element.visible === true) {
                this.sortedEventList.push(element)
              }
            }
          }
          this.sortedEventList.sort(this.compareEventsDate)
        },
        compareEventsDate(e1, e2)  {
          const date1 = new Date(e1.dateDebut.replace(" ", "T")),
           date2 = new Date(e2.dateDebut.replace(" ", "T")),
           equal = 0,
           inferior = -1,
           superior = 1;
          if (date1 > date2) {
            return inferior 
            // date superior means date is more recent, so it should be first in the list
          } else if (date1 < date2){
            return superior
          }
            return equal
        },
        async shareLink(eventID) {
          const copyBtn = document.getElementById("copyButton"),
          timerDelay = 3000;
          try {
            await navigator.clipboard.writeText(`https://gamedev.fsg.ulaval.ca/#/?eventID=${eventID}`);
            copyBtn.innerText = "Lien copié avec succès !";

          } catch (error) {
            copyBtn.innerText = `La copie a échouée : ${error}`;
          }
          setTimeout(() => {
            copyBtn.innerText = "Partager...";
          }, timerDelay)
        },
        findEventByID(eventID) {
          for (const session of this.events) {
            for (const eventInfo of session.events) {
              if (CryptoJS.MD5(JSON.stringify(eventInfo)).toString(CryptoJS.enc.Hex) === eventID) {
                return eventInfo
              }
            }
          }
          return false
        }
    }
}

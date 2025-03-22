<script src="./Evenements.js">
export default {
    name: "EvenementsPage",
}
const mobileWidth = 640;
if (window.screen.availWidth <= mobileWidth) {
  document.getElementById("calendarBtn").disabled = false;
}
</script>
<template>
  <div class="container">
    <h1 style="padding-top: 10px;">
      Événements
    </h1>
    <p>
      Bienvenue sur la page des événements, retrouvez ici la liste des prochains prévus durant la session et les événements déjà passés !
    </p>
    <section>
      <h3 style="padding-bottom: 20px;">
        Prochains événements prévus
      </h3>
      <p>
        Si aucun événement n'est prévu, restez à l'affût sur nos <router-link to="/#events">
          réseaux sociaux
        </router-link> !
      </p>
      <div
        v-for="(element, index) in events"
        :key="index"
      >
        <h3
          v-if="filterActive(element.events, true).length >= 1"
          :innerText="element.sessionName"
          style="padding-bottom: 20px; padding-top: 30px;"
        />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="(event, _) in filterActive(element.events, true)"
            :key="_"
          >
            <div
              class="col"
              style="height: 420px;"
            >
              <div class="card bg-dark text-white h-100">
                <div class="card-body text-center">
                  <h3 :innerText="event.name" />
                  <p :innerText="event.date" />
                  <p :innerText="event.shortDescription" />
                  <img
                    :src="event.imageLink!=''?event.imageLink:logoClub"
                    class="imgEvent"
                  >
                  <br>
                  <button
                    class="eventsButton"
                    @click="showInfosModal(event)"
                  >
                    Plus d'infos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br>
    <hr>
    <h3 style="padding-bottom: 20px;">
      Ces événements sont désormais terminés
    </h3>
    <section>
      <div
        v-for="(element, index2) in events"
        :key="index2"
      >
        <h3
          v-if="filterActive(element.events, false).length >= 1"
          :innerText="element.sessionName"
          style="padding-bottom: 20px; padding-top: 10px;"
        />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="(event, _) in filterActive(element.events, false)"
            :key="_"
          >
            <div
              class="col"
              style="height: 420px;"
            >
              <div class="card bg-dark text-white h-100">
                <div class="card-body text-center">
                  <h3 :innerText="event.name" />
                  <p :innerText="event.date" />
                  <p :innerText="event.shortDescription" />
                  <img
                    :src="event.imageLink!=''?event.imageLink:logoClub"
                    class="imgEvent"
                  >
                  <br>
                  <button
                    class="eventsButton"
                    @click="showInfosModal(event)"
                  >
                    Plus d'infos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-if="showInfo">
    <div class="modal">
      <span
        class="close"
        style="cursor: pointer;"
        @click="hideInfosModal()"
      >&times;</span>
      <h3 :innerText="currentEvent.name" />
      <p :innerHTML="'Du : <u>'+currentEvent.dateDebut+'</u> au : <u>'+currentEvent.dateFin+'</u>'" />
      <p :innerHTML="currentEvent.description==''?currentEvent.shortDescription:currentEvent.description" />
      <img
        class="imgModal"
        :src="currentEvent.imageLink!=''?currentEvent.imageLink:logoClub"
        width="600px"
        height="400px"
      ><br><br>
      <div
        class="row row-cols-1 row-cols-md-3 g-4 buttonsDiv"
        style="width: 600px; justify-self: center; display: inline-flex; padding-bottom: 50px;"
      >
        <button
          id="copyButton"
          class="eventsButton col"
          style="margin-right: 10px;"
          @click="shareLink(eventID)"
        >
          Partager...
        </button>
        <button
          v-if="currentEvent.openInscription == true"
          class="eventsButton col"
          style="margin-right: 10px;"
          @click="loadPage(currentEvent.link)"
        >
          Je m'inscris !
        </button>
        <button
          v-if="currentEvent.openInscription == false"
          class="eventsButton col"
          disabled
        >
          Inscriptions fermées !
        </button>
        <div
          class="col"
          style="padding: 0px;"
        >
          <div
            class="menu-container"
            :style="{ pointerEvents: (new Date(currentEvent.dateFin).getTime() > Date.now())?'all':'none'}"
            @mouseenter="showMenu = true"
            @mouseleave="showMenu = false"
          >
            <div
              class="dropdown-menu"
              :class="{ active: showMenu }"
            >
              <button
                class="eventsButton"
                @click="eventType = 'apple'; downloadCalendarEvent(currentEvent)"
              >
                Apple
              </button>
              <button
                class="eventsButton"
                @click="eventType = 'office365'; downloadCalendarEvent(currentEvent)"
              >
                Office 365
              </button>
              <button
                class="eventsButton"
                @click="eventType = 'outlook'; downloadCalendarEvent(currentEvent)"
              >
                Outlook
              </button>
              <button
                class="eventsButton"
                @click="eventType = 'google'; downloadCalendarEvent(currentEvent)"
              >
                Google
              </button>
              <button
                class="eventsButton"
                @click="eventType = 'yahoo'; downloadCalendarEvent(currentEvent)"
              >
                Yahoo
              </button>
            </div>
            <button
              id="calendarBtn"
              class="menu-button"
              disabled
              :style="{color: (new Date(currentEvent.dateFin).getTime() > Date.now())?'aliceblue':'#78797b'}"
              style="padding: 5px;"
              @click="showMenu = !showMenu"
            >
              Ajouter au calendrier
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="./Evenements.css"></style>
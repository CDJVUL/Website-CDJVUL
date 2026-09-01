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
  <div class="container-events">
    <h1>Évènements</h1>
    <p>Bienvenue sur la page des événements, retrouvez ici la liste des prochains prévus durant la session et les événements déjà passés</p>
    <section>
      <h3>Prochains événements prévus</h3>
      <div v-for="(element, index) in events.toReversed()" :key="index">
        <h3 v-if="filterActive(element.events, true).length >= 1">{{ element.sessionName }}</h3>
        <div v-for="(event,_) in filterActive(element.events, true)" :key="_" class="event-card">
          <h3>{{ event.name }}</h3>
          <p>{{ event.date }}</p>
          <p>{{ event.shortDescription }}</p>
          <img :src="event.imageLink!=''?event.imageLink:logoClub">
          <button class="link-button" @click="loadPage(event.link)">Inscription</button>
        </div>
      </div>
    </section>
    <h3>Ces événements sont désormais terminés</h3>
    <section>
      <div v-for="(element, index2) in events" :key="index2">
        <h3 v-if="filterActive(element.events, false).length >= 1">{{ element.sessionName }}</h3>
        <div class="event-list">
          <div v-for="(event,_) in filterActive(element.events, false)" :key="_" class="event-card">
            <h3>{{ event.name }}</h3>
            <p>{{ event.date }}</p>
            <p>{{ event.shortDescription }}</p>
            <img :src="event.imageLink!=''?event.imageLink:logoClub">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.container-events {
  margin: 15px;
  padding: 25px;
  background-color: rgb(0 0 0 / 0.9);
  border: 2px solid #459A7B;

  & p {
    font-family: "Agency FB", sans-serif;
  }
}

.event-list {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
}

.event-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
  padding: 10px;
  border: 2px solid #459A7B;

  img {
    width: 256px;
  }

  button {
    margin: 10px;
  }
}

.link-button {
  background-color: #83FBD7;
  text-decoration: none;
  color: black;
  padding: 5px;
  transition: all 0.25s;
}

.link-button:hover {
    color: white;
    background-color: #B7431D;
}

</style>
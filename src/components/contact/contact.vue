<script setup>
</script>
<template>
  <div class="container-contact">
    <p>Si vous souhaitez rentrer en contact avec le club, vous pouvez nous contacter à travers notre adresse courriel, sur notre serveur discord ou en personne!</p>
    <p>Adresse: <span class="bold-text">1065, avenue de la Médecine, Local PLT-3778, Québec, QC, G1V 0A6</span></p>
    <div class="map">
      <Map v-model="location"/>
    </div>
    <div class="contact-links">
      <a class="contact-link" href="mailto:gamedev.admin@ift.ulaval.ca" target="_blank">Courriel</a>
      <a class="contact-link" href="https://discord.gg/FrShW8JQBm" target="_blank">Discord</a>
    </div>
  </div>
</template>
<script>
import Map from "../map/Map.vue";

export default {
  name: "ContactPage",
  components: { Map },
  data() {
    return {
      location: {
        center: {lng: -71.27519738144522, lat: 46.77866339706584},
        zoom: 15,
      },
    };
  }
};
</script>
<style scoped>
.container-contact {
  margin: 15px;
  padding: 25px;
  background-color: rgb(0 0 0 / 0.9);
  border: 2px solid #459A7B;

  p {
    font-family: Agency FB, sans-serif;
  }
}

.map {
  width: 100%;
  height: 50vh;
  margin-bottom: 25px;
}

.contact-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.contact-link {
  display: block;
  background-color: #83FBD7;
  text-decoration: none;
  color: black;
  padding: 10px;
  transition: all 0.25s;
}

.contact-link:hover {
  color: white;
  background-color: #B7431D;
}

.bold-text {
  font-weight: bold;
}
</style>
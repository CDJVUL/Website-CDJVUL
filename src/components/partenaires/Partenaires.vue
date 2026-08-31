<script setup>
  import PlanPartenariats from '@/assets/partenaires/PLAN-COMMANDITE-CDJ-2025-2026.pdf'
</script>
<template>
  <div class="container-partner">
    <h1 style="padding-top: 10px;">
      Partenaires du club 2026 - 2027
    </h1>
    <p>
      Voici la liste des partenaires qui soutiennent les activités du Club cette année ! Il existe 3 niveaux, 
      le niveau <span style="color: darkgoldenrod;">Bronze</span>, <span style="color:darkgrey;">Argent</span> et 
      <span style="color: red;">Rouge</span> & <span style="color: orange;">Or</span>.
      <br>Chaque niveau donne accès à des avantages supplémentaires.
      <br>Vous souhaitez nous soutenir ? Téléchargez notre 
      <a
        :href="PlanPartenariats"
        target="_blank"
      >document de partenariat</a> !
    </p>
    <div v-if="filterTiers('Rouge & Or').length >= 1">
      <h2>Partenaires <span style="color: red;">Rouge</span> & <span style="color: orange;">Or</span></h2>
      <div class="tier-section">
        <div v-for="(partner, index) in filterTiers('Rouge & Or')" :key="index" class="partner-card">
          <h3>{{ partner.name }}</h3>
          <img :src="partner.logo">
          <p>{{ partner.description }}</p>
          <button @click="goToWebsite(partner.website)" class="partner-website">Site web</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {partenaires} from "./Partenaires.js";

export default {
  name: "PartenairesPage",
  methods: {
    filterTiers(tier)
    {
      const filteredPartners = [];
      for (const partner of partenaires) {
        if (partner.tier === tier) {
          filteredPartners.push(partner);
        }
      }
      return filteredPartners;
    },
    goToWebsite(website) {
      window.open(website, '_blank');
    }
  }
}
</script>
<style scoped>
.container-partner {
  margin: 15px;
  padding: 25px;
  background-color: rgb(0 0 0 / 0.9);
  border: 2px solid #459A7B;

  p {
    font-family: Agency FB, sans-serif;
  }
}

.tier-section {
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
}

.partner-card {
  width: 100%;
  height: 100%;
  padding: 25px;
  background-color: rgb(0 0 0 / 0.9);
  border: 2px solid #459A7B;

  img {
    width: 250px;
    height: 205px;
  }
}

.partner-website {
  padding: 5px 10px 5px 10px;
  border: none;
  background-color: #83FBD7;
  transition: all 0.25s;
}

.partner-website:hover {
  background-color: #B7431D;
}

@media screen and (max-width: 750px) {
  .tier-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

</style>
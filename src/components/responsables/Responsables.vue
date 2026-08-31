<script setup>
import * as peopleInfo from './Responsables.js';
</script>

<template>
  <div class="container-staff">
    <h1 class="justify-content-center" style="padding-top: 10px;">L'équipe du club</h1>
    <p>Voici les responsables du club pour la session d'Automne 2026. Ces derniers sont des piliers importants au bon fonctionnement du club et de ses activités.<br></p>
    <div class="president-section">
      <div v-for="(president, _) in presidenceInfo" :key="_">
        <div class="president-section">
          <div>
            <div class="president-card">
              <h3 class="president-card-title">{{ president.role }}</h3>
              <img class="staff-img" alt="President" :src="getPersonImage(president.image)">
              <div class="president-card-info">
                <h3>{{ president.name }}</h3>
                <p class="president-card-domain">{{ president.domain }}</p>
              </div>
                <div class="linkedInButton">
                  <a :href="president.link" target="_blank"><i class="fa-brands fa-linkedin-in"/><span class="icon-box">LinkedIn</span></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2>Autres responsables</h2>
    <div class="staff-section">
      <div v-for="(person, _) in otherResponsables" :key="_">
        <div class="col" style="height: 500px;">
          <div>
            <div class="staff-card">
              <h3 class="staff-card-title">{{ person.role }}</h3>
              <img class="staff-img" alt="Image introuvable" :src="getPersonImage(person.image)">
              <div class="staff-card-info">
                <h3>{{ person.name }}</h3>
                <p class="staff-card-domain">{{ person.domain }}</p>
              </div>
              <a :href="person.link" target="_blank">
                <div class="linkedInButton">
                  <i class="fa-brands fa-linkedin-in"/>
                  <span class="icon-box">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoPath from '@/assets/home/logo_cdjvul_1920x1080.png';

export default {
  name: "ResponsablesPage",
  data() {
    return {
      logoPath,
      presidenceInfo : [],
      otherResponsables : []
    };
  },

  created() {
    for (const element of peopleInfo.responsables) {
      if (element.isPresident === true) {
        this.presidenceInfo.push(element);
      }
      else {
        this.otherResponsables.push(element)
      }
    }
  },

  methods: {
    getPersonImage(imageName) {
        return new URL(`../../assets/responsables/${imageName}`, import.meta.url).href;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-staff {
  margin: 15px;
  padding: 25px;
  background-color: rgb(0 0 0 / 0.9);
  border: 2px solid #459A7B;

  p {
    font-family: Agency FB, sans-serif;
  }
}

.staff-img {
  width: 100%;
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  object-position: top;
  margin-bottom: 2rem;
  border: 2px solid #B7431D;
}

.icons-link {
  width: 100%;
  max-width: 30px;
  object-fit: contain;
  display: inline-block;
}

.icon-box {
  display: inline-block;
  color: white;
  padding-left: 10px;
}

.president-section {
  margin-bottom: 25px;
}

.staff-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}

.president-card {
  background-color: rgb(0 0 0 / 0.95);
  padding: 10px;
  border: 2px solid #83FBD7;
  height: auto;

  h3 {
    font-size: 18px;
  }
}

.president-card-title {
  height: 20px;
}

.staff-card {
  background-color: rgb(0 0 0 / 0.95);
  padding: 10px;
  border: 2px solid #83FBD7;
  height: 475px;

  h3 {
    font-size: 18px;
  }
}

.staff-card-title {
  height: 40px;
}

.staff-card-info {
  height: 100px;
  margin-bottom: 20px;
}

.staff-card-domain {
  margin-top: -10px;
}

@media screen and (max-width: 750px) {
  .staff-section {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .staff-card {
    height: auto;
  }

  .staff-card-info {
    margin-bottom: 0;
  }
}
</style>

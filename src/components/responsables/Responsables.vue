<script setup>
import * as peopleInfo from './Responsables.js';
</script>

<template>
  <div class="container-staff">
    <h1 class="justify-content-center" style="padding-top: 10px;">L'équipe du club</h1>
    <p>Voici pour la session d'Automne 2025 les responsables du club. Ces derniers sont des piliers importants au bon fonctionnement du club et de ses activités.<br></p>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div v-for="(president, _) in presidenceInfo" :key="_">
        <div class="col" style="height: 500px;">
          <div>
            <div class="staff-body text-center">
              <h3 class="card-title" :innerText="president.role" style="height: 40px;"/>
              <img
                class="staff-img"
                alt="President"
                :src="getPersonImage(president.image)"
              >
              <p :innerText="president.name" style="font-size: 20px;"/>
              <p :innerText="president.domain" style="padding-top: 5px; height: 50px; padding-bottom: 5px;"/>
              <a :href="president.link" target="_blank">
                <div class="d-flex align-items-center justify-content-center" style="padding-top: 10px;">
                  <img
                    :src="linkedInIcon"
                    class="icons-link rounded-2"
                    width="30px"
                    height="30px"
                  >
                  <span class="icon-box">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 style="padding-top: 20px;">Autres responsables</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="(person, _) in otherResponsables" :key="_">
        <div class="col" style="height: 500px;">
          <div>
            <div class="staff-body text-center">
              <h3 class="card-title" :innerText="person.role" style="height: 40px;"/>
              <img
                class="staff-img"
                alt="Image introuvable"
                :src="getPersonImage(person.image)"
              >
              <p :innerText="person.name" style="font-size: 20px;"/>
              <p :innerText="person.domain" style="padding-top: 5px; height: 50px; padding-bottom: 5px;"/>
              <a :href="person.link" target="_blank">
                <div class="d-flex align-items-center justify-content-center" style="padding-top: 10px;">
                  <img
                    :src="linkedInIcon"
                    class="icons-link rounded-2"
                    width="30px"
                    height="30px"
                  >
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
import linkedInIcon from '@/assets/home/LinkedIn.png';
import logoPath from '@/assets/home/logo_cdjvul_1920x1080.png';

export default {
  name: "ResponsablesPage",
  data() {
    return {
      logoPath,
      linkedInIcon,
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
  width: 100%;
}

.row {
  margin: 0;
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
  margin-right: 30px;
}

.card {
  margin-bottom: 2rem;
}

.staff-img {
  width: 100%;
  max-width: 250px;
  max-height: 250px;
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

p {
  margin: 0;
}

.staff-body {
  background-color: rgb(0 0 0 / 0.95);
  padding: 10px;
  border: 2px solid #83FBD7;
  height: 475px;
}

.custom-indicators span {
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 10px;
  margin: 0 5px;
  width: 10px;
}
</style>

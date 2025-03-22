<template>
  <div>
    <h1
      class="justify-content-center"
      style="padding-top: 10px;"
    >
      L'équipe du club
    </h1>
    <p>
      Voici pour la session d'Hiver 2025 les responsables du club. Ces derniers sont des piliers importants au bon fonctionnement du club et de ses activités.<br>
      Si vous souhaitez rentrer en contact avec l'une de ces personnes en particulier, écrivez-lui à travers l'adresse du club :<br>
      <a href="mailto:gamedev.admin@ift.ulaval.ca">gamedev.admin@ift.ulaval.ca</a> en précisant à quelle personne s'adresse votre message. Merci !
    </p>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        class="col"
        style="height: 500px;"
      >
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3
              class="card-title"
              :innerText="presidentInfo.role"
              style="height: 40px;"
            />
            <br>
            <img
              class="spotlight"
              alt="Image introuvable"
              :src="getPersonImage(presidentInfo.image)"
            >
            <br><br>
            <p
              :innerText="presidentInfo.name"
              style="font-size: 20px;"
            />
            <p
              :innerText="presidentInfo.domain"
              style="padding-top: 5px; height: 50px; padding-bottom: 5px;"
            />
            <a
              :href="presidentInfo.link"
              target="_blank"
            >
              <div
                class="d-flex align-items-center justify-content-center"
                style="padding-top: 10px;"
              >
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
    <h2 style="padding-top: 20px;">
      Autres responsables
    </h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        v-for="(person, _) in people.slice(1)"
        :key="_"
      >
        <div
          class="col"
          style="height: 500px;"
        >
          <div class="card bg-dark text-white h-100">
            <div class="card-body text-center">
              <h3
                class="card-title"
                :innerText="person.role"
                style="height: 40px;"
              />
              <br>
              <img
                class="spotlight"
                alt="Image introuvable"
                :src="getPersonImage(person.image)"
              >
              <br><br>
              <p
                :innerText="person.name"
                style="font-size: 20px;"
              />
              <p
                :innerText="person.domain"
                style="padding-top: 5px; height: 50px; padding-bottom: 5px;"
              />
              <a
                :href="person.link"
                target="_blank"
              >
                <div
                  class="d-flex align-items-center justify-content-center"
                  style="padding-top: 10px;"
                >
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
import * as peopleInfo from './Responsables.js';
import linkedInIcon from '@/assets/home/LinkedIn.png';
import logoPath from '@/assets/home/logo_cdjvul_1920x1080.png';
export default {
  name: "ResponsablesPage",
  data() {
    return {
      people: [],
      logoPath,
      linkedInIcon,
      presidentInfo: []
    };
  },

  created() {
    for (const element of peopleInfo.responsables) {
      if (element.isPresident === true) {
        this.presidentInfo = element;
      }
    }
    this.people = peopleInfo.responsables;
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

.spotlight {
  border-radius: 50%;
  width: 100%;
  max-width: 250px;
  object-fit: contain;
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

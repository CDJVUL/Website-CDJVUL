<template>
  <div>
    <br>
    <h1>Bienvenue au club de développement de jeux vidéo de l'Université Laval</h1><br>
    <h4 style="text-align: left; margin-right: 30px; margin-left: 30px;">
      Le club de développement de jeux vidéo de l'Université Laval a pour objectif d'enrichir les connaissances en création de jeux vidéo
      des étudiants de la faculté des sciences et génie. Pour ce faire, le club propose des formations,
      des séances de travail et des conférences avec des professionnels de l'industrie. Ses membres sont encouragés à participer à des concours dans le but de réaliser des projets vidéoludiques.
    </h4><br>
    <!-- Carousel Wrapper -->
    <div class="carousel-wrapper">
      <div
        id="carousel-project-images"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <!-- Indicators -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel-project-images"
            data-bs-slide-to="0"
            class="active"
          />
          <button
            v-for="(project, index) in projects"
            :key="index"
            type="button"
            data-bs-target="#carousel-project-images"
            :data-bs-slide-to="index+1"
          />
        </div>
        <!-- Slides -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="ratio ratio-16x9">
              <img
                class="d-block w-100"
                :src="logoPath"
                alt="Image introuvable"
              >
            </div>
          </div>
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="carousel-item"
          >
            <div class="ratio ratio-16x9">
              <img
                class="d-block w-100"
                :src="getImagePath(project.mainImagePath)"
                alt="Image introuvable"
              >
            </div>
            <div style="background-color: gray; margin-bottom: 30px; height: 140px;">
              <a
                href="javascript:;"
                style="color: white;"
                @click="goToProject(index)"
              >
                <p style="padding-top: 20px; font-size: 30px;">{{ project.title }}</p>
              </a>
              <p
                :innerText="project.event"
                style="padding-top: 10px; font-size: 15px;"
              />
            </div>
          </div>
        </div>
        <!-- Controls -->
        <button
          type="button"
          class="carousel-control-prev"
          href="#carousel-project-images"
          role="button"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          type="button"
          class="carousel-control-next"
          href="#carousel-project-images"
          role="button"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <div
              display="block"
              style="margin: auto; height: 15%;"
            >
              <h3 class="card-title">
                Restez à jour sur les événements
              </h3>
            </div>
            <div style="display: block; margin: auto; height:85%">
              <div
                class="row"
                style="height: 50%;"
              >
                <div class="col">
                  <br>
                  <a
                    href="https://www.facebook.com/gamedevUlaval/"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="facebookIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">Facebook</span>
                    </div>
                  </a>
                </div>
                <div class="col">
                  <br>
                  <a
                    href="https://discord.gg/yFQpaspDFV"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="discordIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">Discord</span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="row"
                style="height: 50%;"
              >
                <div class="col">
                  <br>
                  <a
                    href="https://www.linkedin.com/company/club-de-d%C3%A9veloppement-de-jeux-vid%C3%A9o-de-l-universit%C3%A9-laval/"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="linkedInIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">LinkedIn</span>
                    </div>
                  </a>
                </div>
                <div class="col">
                  <br>
                  <a
                    href="https://www.instagram.com/cdjv.ul/"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="instagramIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">Instagram</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3 class="card-title">
              Responsable du club
            </h3><br>
            <img
              class="spotlight"
              alt="Image introuvable"
              :src="presidentImage"
            >
            <br><br>
            <p style="font-size: 20px;">
              Maxime Plourde
            </p>
            <p style="padding-top: 5px;">
              Étudiant au Baccalauréat en informatique
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3 class="card-title">
              Où nous trouver?
            </h3>
            <p>1065 avenue de la Médecine, Québec, Canada</p>
            <p>Pavillon Adrien-Pouliot</p>
            <p>Local PLT-3778</p><br><br>
            <h3>Heures d'ouverture du local</h3>
            <p>À déterminer</p><br><br>
            <h3>Pour nous contacter</h3>
            <p><a href="mailto:gamedev.admin@ift.ulaval.ca">gamedev.admin@ift.ulaval.ca</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as projectsDataFile from "../projects/Projects.js";
import discordIcon from '@/assets/home/discord.jpg';
import facebookIcon from '@/assets/home/Facebook.svg.png';
import instagramIcon from '@/assets/home/Instagram.png';
import linkedInIcon from '@/assets/home/LinkedIn.png';
import logoPath from '@/assets/home/logo_cdjvul_1920x1080.png';
import presidentImage from '@/assets/home/maxime_plourde_centered.png';
export default {
  name: "HomePage",
  data() {
    return {
      projects: [],
      logoPath,
      facebookIcon,
      discordIcon,
      linkedInIcon,
      instagramIcon,
      presidentImage,
    };
  },

  created() {
    this.projects = projectsDataFile.projects;
  },

  methods: {
    getImagePath(imageName) {
      return new URL(`../../assets/projects/${imageName}`, import.meta.url).href;
    },
    goToProject(index) {
      this.$router.push({
        name: "ProjectOverview",
        params: {
          projectIndex: index
        }
      });
    }
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Home.css">
</style>
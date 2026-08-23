<template>
  <div class="container-flex">
    <div class="projects-list">
      <div  v-for="(project, index) in projects" :key="index">
        <button class="project-button" @click="changeProject(index)">{{ project.title }}</button>
      </div>
    </div>
    <div class="project-container">
      <h1>Projets du club</h1>
      <p>Voici les projets réalisés par les membres du club récemment. Cliquez sur l'image ou sur le nom pour plus d'informations.</p>
      <div v-if="chosenProject != undefined">
        <div class="project-card">
          <button class="project-back" @click="removeProject()">Retour</button>
          <h1 class="project-title">{{ chosenProject.title }}</h1>
          <h3>{{ chosenProject.event }}</h3>
          <h4 class="project-description" :innerHTML="chosenProject.description"/>
          <div class="preview-wrapper">
            <div class="ratio ratio-16x9">
              <img v-if="chosenProject.gameplayTrailer == undefined" class="embed-responsive-item" :src="chosenProject.mainImagePath ? getImagePath(chosenProject.mainImagePath) : logoClub" alt="Image introuvable">
              <iframe v-else :src="chosenProject.gameplayTrailer" allowfullscreen/>
            </div>
          </div>
          <h3 v-if="chosenProjectImagesPaths.length > 0" class="project-title">
            Images et art conceptuel
          </h3>
          <div class="container">
            <div class="row">
              <div v-for="(image, index) in chosenProjectImagesPaths" :key="index" class="col-md-4 mb-3">
                <img class="img-fluid card-img" :src="image" alt="Image introuvable">
              </div>
            </div>
          </div>
          <h3>Participants</h3>
          <div class="container">
            <div class="list-group d-flex flex-row flex-wrap">
              <div v-for="participant in chosenProject.participants" :key="participant" class="w-50">{{ participant }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row row-cols-1 row-cols-md-3 g-4 default-project-list" style="margin-left: 10px;">
          <div v-for="(project, index) in projects" :key="index">
            <div class="project-small-card">
              <div class="card-body">
                <h2 class="card-title">
                  <a href="javascript:" class="project-title-link" @click="changeProject(index)">{{ project.title }}</a>
                </h2>
                <span class="project-bold-text">Événement : </span>
                {{ project.event }}<br><br>
                <img :src="project.mainImagePath ? getImagePath(project.mainImagePath) : logoClub" class="img-fluid" @click="changeProject(index)">
                <br><br>
                <span class="project-bold-text">Participants : </span>{{ project.participants.join(', ') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as projectsDataFile from "./Projects.js";
import { MD5 } from "crypto-js";
import logoClub from '../../assets/home/logo_cdjvul_1920x1080.png'

export default {
  name: "ProjectsPage",
  components: {},
  data: () => ({
    projects: [],
    chosenProject: null,
    chosenProjectImagesPaths: [],
    showModal: false,
    logoClub
  }),

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
          // eslint-disable-next-line new-cap
          projectHash: MD5(this.projects[index].title).toString()
        }
      });
    },
    changeProject(index){
      this.chosenProject = projectsDataFile.projects[index];
      this.chosenProjectImagesPaths = this.getAllImagesPath(this.chosenProject.imagesList, this.chosenProject.imagesFolder)
    },
    getAllImagesPath(imagesList, imagesFolder) {
      if (!imagesList) {
        return [];
      }
      return imagesList.map((imageName) => new URL(`../../assets/projects/${imagesFolder}/${imageName}`, import.meta.url).href);
    },
    showImageModal(selectedImage) {
      document.body.style.overflow = "hidden";
      this.currentImage = selectedImage;
      this.showModal = true;
    },
    hideImageModal() {
      document.body.style.overflow = "auto";
      this.showModal = false;
      this.currentImage = null;
    },
    removeProject() {
      this.chosenProject = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 1rem;
}

.container-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  margin: 15px;
  padding: 25px;
  background-color: rgb(0 0 0 / 0.9);
  border: 2px solid #459A7B;
}

.projects-list {
  width: 25%;
  height: 1000px;
  margin-top: 122px;
  overflow: scroll;
}

.project-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin: 0 0 15px 0;
  color: white;
  background-color: rgb(0 0 0 / 0.95);
  border: 2px solid #459A7B;
  transition: 0.25s;
}

.project-button:hover {
  background-color: #414042;
  border: 2px solid #83FBD7;
}

.project-container {
  width: 75%;
}

.img-fluid:hover {
  transform: scale(.95);
  opacity: 0.7;
}

hr {
  color: white;
  background-color: white;
  border-color: white;
  margin-bottom: 10px;
  opacity: 1;
}

img:hover {
  cursor: pointer;
}

.project-title {
  margin-bottom: 1rem;
}

.project-title-link {
  color: white;
}

.project-title-link:hover {
  color: gray;
}

.project-description {
  font-family: "Agency FB", sans-serif;
  text-align: left;
}

.project-participants {
  text-align: left;
}

.project-event {
  text-align: left;
}

.project-bold-text {
  font-weight: bold;
}

.project-card {
  width: 100%;
  height: 1000px;
  overflow: scroll;
  background-color: rgb(0 0 0 / 0.95);
  border: 2px solid #459A7B;
  margin: 0 15px 0 15px;
  padding: 10px;
}

.project-small-card {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgb(0 0 0 / 0.95);
  border: 2px solid #459A7B;
}

.default-project-list {
  height: 1000px;
  overflow: scroll;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  animation-name: zoom;
  animation-duration: 0.6s;
}

.modal-open {
  overflow: hidden;
}
.project-back {
  display: none;
}

@media screen and (max-width: 992px) {
  .projects-list {
    display: none;
  }
  .project-container {
    width: 100%;
  }

  .project-card {
    width: 100%;
  }
  .project-back {
    display: block;
    width: 100%;
    height: 5%;
    background-color: #B7431D;
    border: none;
    position: relative;
  }
}
</style>

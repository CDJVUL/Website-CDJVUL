<template>
  <div>
    <h1>Projets du club</h1>
    <p>Voici les projets réalisés par les membres du club récemment. Cliquez sur l'image ou sur le nom pour plus d'informations.</p>
    <div
      class="row row-cols-1 row-cols-md-3 g-4"
      style="margin-left: 10px;"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="card bg-dark text-white h-100">
          <div class="card-body">
            <h2 class="card-title">
              <a
                href="javascript:;"
                class="project-title-link"
                @click="goToProject(index)"
              >{{ project.title }}</a>
            </h2>
            <span class="project-bold-text">Événement : </span>
            {{ project.event }}<br><br>
            <img
              :src="project.mainImagePath ? getImagePath(project.mainImagePath) : logoClub"
              class="img-fluid"
              @click="goToProject(index)"
            >
            <br><br>
            <span class="project-bold-text">Participants : </span>{{ project.participants.join(', ') }}
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      v-for="(project, index) in projects"
      :key="index"
      class="project-container"
    >
      <hr>
      <div class="row">
        <div class="col-12 col-lg-4 col-xl-3 p-2">
          <div class="w-100 h-100 d-flex justify-content-center align-items-center">
            <div class="ratio ratio-16x9">
              <img
                class="img-fluid"
                :src="getImagePath(project.mainImagePath)"
                alt="Image introuvable"
                @click="goToProject(index)"
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 col-xl-9 p-2">
          <h2 class="project-title text-center text-lg-left">
            <a
              href="javascript:;"
              class="project-title-link"
              @click="goToProject(index)"
            >{{ project.title }}</a>
          </h2>
          <h5
            class="project-description"
            :innerHTML="project.description"
          />
          <br>
          <div
            v-if="project.participants"
            class="project-participants"
          >
            <span class="project-bold-text">Participants: </span>
            <span>{{ project.participants.join(", ") }}</span>
          </div>
          <br>
          <div
            v-if="project.event"
            class="project-event"
          >
            <span class="project-bold-text">Événement:</span>
            {{ project.event }}
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import * as projectsDataFile from "./Projects.js";
import { MD5 } from "crypto-js";
import logoClub from '../../assets/home/logo_cdjvul_1920x1080.png'

export default {
  name: "ProjectsPage",
  data: () => ({
    projects: [],
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 1rem;
}
.project-container {
  padding-left: 2rem;
  padding-right: 2rem;
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
</style>

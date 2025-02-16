<template>
  <div>
    <h1 class="project-title">
      {{ projectInfo.title }}
    </h1>
    <h3>{{ projectInfo.event }}</h3>
    <h4 class="project-description">
      {{ projectInfo.description }}
    </h4>

    <div class="preview-wrapper">
      <div class="ratio ratio-16x9">
        <img
          v-if="projectInfo.gameplayTrailer == undefined"
          class="embed-responsive-item"
          :src="getImagePath(projectInfo.mainImagePath)"
          alt="Image introuvable"
        >
        <iframe
          v-else
          :src="projectInfo.gameplayTrailer"
          allowfullscreen
        />
      </div>
    </div>

    <h3 class="project-title">
      Images et art conceptuel
    </h3>
    <div class="container">
      <div class="row">
        <div
          v-for="(image, index) in projectImagesPaths"
          :key="index"
          class="col-md-4 mb-3"
        >
          <img
            class="img-fluid card-img"
            :src="image"
            alt="Image introuvable"
            @click="showImageModal(image)"
          >
        </div>
      </div>
    </div>

    <h3>Participants</h3>
    <div class="container">
      <div class="list-group d-flex flex-row flex-wrap">
        <div
          v-for="participant in projectInfo.participants"
          :key="participant"
          class="w-50"
        >
          {{ participant }}
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div v-if="showModal">
      <div class="modal">
        <span
          class="close"
          @click="hideImageModal()"
        >&times;</span>
        <img
          class="modal-content img-fluid"
          :src="currentImage"
          alt="Image introuvable"
        >
      </div>
    </div>
  </div>
</template>

<script>
import * as projectsDataFile from "./Projects.js";

export default {
  name: "ProjectOverview",
  props: {
    projectIndex: {
      type: String,
      required: true
    }
  },
  data: () => ({
    projectInfo: null,
    showModal: false,
    currentImage: null,
    projectImagesPaths: []
  }),

  created() {
    this.projectInfo = projectsDataFile.projects[this.projectIndex];

    this.projectImagesPaths = this.getAllImagesPath(this.projectInfo.imagesList, this.projectInfo.imagesFolder)
  },

  methods: {
    getImagePath(imageName) {
      return new URL(`../../assets/projects/${imageName}`, import.meta.url).href;
    },
    getAllImagesPath(imagesList, imagesFolder) {
      return imagesList.map((imageName) => new URL(`../../assets/projects/${imagesFolder}/${imageName}`, import.meta.url).href)
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-title {
  padding-top: 2rem;
}
.project-description {
  display: inline-block;
  max-width: 1200px;
  text-align: left;
  padding: 2rem;
}
.preview-wrapper {
  display: inline-block;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 565px;
}
.container {
  padding: 1rem;
}
.card-img {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.card-img {
  max-height: 400px;
  object-fit: contain;
  background-color: black;
}
.card-img:hover {
  opacity: 0.7;
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
@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}
.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>

<script setup>
import * as webPages from './Home.js';
const pages = webPages.sections
import bgVideo from '@/assets/home/videoHome.mp4'
</script>

<template>
  <div class="home-menu">
    <img class="home-logo" src="../../assets/navigation/logo_cdjvul.png" alt="CDJVUL Logo">
    <div v-for="element of pages" :key="_" >
      <router-link class="nav-link" :to="element.link">
        <button class="home-nav-button">
          <img :src="getImage(element.image)" alt="CDJVUL Logo">
          {{ element.name }}
        </button>
      </router-link>
    </div>
  </div>
  <video autoplay muted loop id="myVideo">
    <source :src="bgVideo" type="video/mp4">
  </video>
</template>
<style scoped src="./Home.css"></style>
<script>
// eslint-disable-next-line func-style
function getImage(imageName) {
  return new URL(`../../assets/navigation/${imageName}`, import.meta.url).href;
}
</script>
<style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.home-logo {
  width: 150px;
  margin-bottom: 50px;
  transition: 0.25s;
  animation: 1s ease-out 0s 1 slideInFromBottom;
}
.home-menu {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -125px;
  z-index: 5;
}
.home-nav-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  width: 250px;
  height: 50px;
  margin: 15px 0 15px 0;
  padding: 25px 5px 25px 5px;
  background-color: #000000;
  border: 2px solid #459A7B;
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: 0.25s;
  animation: 1s ease-out 0s 1 slideInFromBottom;

  img {
    width: 48px;
    height: 48px;
  }
}
.home-nav-button:hover {
  background-color: #414042;
  border: 2px solid #83FBD7;
  font-weight: bolder;
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(25%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
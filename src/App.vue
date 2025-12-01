<template>
  <div
    id="app"
    class="container-custom"
  >
    <Navigation />
    <router-view class="container-custom" />

    <br>
    <hr class="version-separator">

    <div class="text-center version-container">
      Site web version : {{ version }}
      <br>
      <div
        class="row"
        style="display: inline-flex; padding-bottom: 10px;"
      >
        <div class="col">
          <a
            href="https://www.facebook.com/gamedevUlaval/"
            target="_blank"
          >
            <img
              src="../src/assets/home/Facebook.svg.png"
              width="20px"
              height="20px"
            >
          </a>
        </div>
        <div class="col">
          <a
            href="https://discord.gg/yFQpaspDFV"
            target="_blank"
          >
            <img
              src="../src/assets/home/discord.jpg"
              width="20px"
              height="20px"
            >
          </a>
        </div>
        <div class="col">
          <a
            href="https://www.instagram.com/cdjv.ul/"
            target="_blank"
          >
            <img
              src="../src/assets/home/Instagram.png"
              width="20px"
              height="20px"
            >
          </a>
        </div>
        <div class="col">
          <a
            href="https://www.linkedin.com/company/club-de-d%C3%A9veloppement-de-jeux-vid%C3%A9o-de-l-universit%C3%A9-laval/"
            target="_blank"
          >
            <img
              src="../src/assets/home/LinkedIn.png"
              width="20px"
              height="20px"
            >
          </a>
        </div>
      </div>
      <br>
      <p>Partenaires :</p>
      <div
        class="row"
        style="display: inline-flex; padding-bottom: 20px;"
      >
        <div class="col">
          <img
            :src="LogoASETIN"
            width="60px"
            height="50px"
          >
        </div>
        <div class="col">
          <img
            :src="LogoAESGUL"
            width="60px"
            height="50px"
          >
        </div>
        <div class="col">
          <img
            :src="UlLogo"
            style="width: 120px; height: 50px; margin: auto;"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoAESGUL from '@/assets/partenaires/AESGUL.png'
import LogoASETIN from '@/assets/partenaires/ASETIN.png'
import Navigation from "@/components/navigation/Navigation.vue";
import UlLogo from '@/assets/navigation/logoUL_250x104.png'


export default {
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return {
      version: __APP_VERSION__,
      UlLogo,
      LogoAESGUL,
      LogoASETIN
    };
  }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
}

.container-custom {
  color: white;
}

.version-separator {
  opacity: .5;
  margin: 10px auto;
  width: 250px;
}

.version-container {
  margin: 5px 0 10px;
}

html,
body {
  height: 100%;
  margin: 0;
  background-color: #282b2e;
}
</style>

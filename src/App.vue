<template>
  <div id="app" class="container-custom">
    <div v-if="this.$route.path != '/'">
      <nav class="navbar navbar-dark navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <router-link class="nav-img left-align" to="/">
          <img :src="cdjLogo" class="navbar-img">
        </router-link>
        <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link left-align" to="/information">
                <img :src="aboutIcon" class="navbar-link-img">
                À propos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link left-align" to="/projets">
                <img :src="projectsIcon" class="navbar-link-img">
                Projets
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link left-align" to="/responsables">
                <img :src="membresIcon" class="navbar-link-img">
                Responsables
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link left-align" to="/evenements">
                <img :src="eventsIcon" class="navbar-link-img">
                Événements
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link left-align" to="/partenaires">
                <img :src="sponsorsIcon" class="navbar-link-img">
                Partenaires
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link left-align" to="/contact">
                <img :src="contactIcon" class="navbar-link-img">
                Contact
              </router-link>
            </li>
            <li class="member-button">
              <a href="https://forms.gle/T7GeGy5awPoHb2yq5" target="_blank">Devenez membre!</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="socials-menu">
      <div class="social-button">
        <a href="https://discord.gg/FrShW8JQBm" target="_blank"><i class="fa-brands fa-discord"/></a>
      </div>
      <div class="social-button">
        <a href="https://www.facebook.com/gamedevUlaval" target="_blank"><i class="fa-brands fa-facebook-f"/></a>
      </div>
      <div class="social-button">
        <a href="https://www.instagram.com/cdj.ul" target="_blank"><i class="fa-brands fa-instagram"/></a>
      </div>
      <div class="social-button">
        <a href="https://www.linkedin.com/company/club-de-d%C3%A9veloppement-de-jeux-vid%C3%A9o-de-l-universit%C3%A9-laval/" target="_blank"><i class="fa-brands fa-linkedin-in"/></a>
      </div>
    </div>
    <transition name="fade">
      <router-view class="container-custom" />
    </transition>
  </div>
</template>
<script>
import aboutIcon from '@/assets/navigation/about.png'
import cdjLogo from '@/assets/navigation/logo.png'
import contactIcon from '@/assets/navigation/contact.png'
import eventsIcon from '@/assets/navigation/events.png'
import membresIcon from '@/assets/navigation/membres.png'
import projectsIcon from '@/assets/navigation/projets.png'
import sponsorsIcon from '@/assets/navigation/sponsors.png'
export default {
  name: "App",
  data() {
    return {
      aboutIcon,
      cdjLogo,
      contactIcon,
      eventsIcon,
      membresIcon,
      projectsIcon,
      sponsorsIcon
    };
  },
};
</script>
<style>
#app {
  font-family: "Yuanmo", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  background:
      radial-gradient(#000 0.5px,transparent 0.5px) 0   0   /3px 3px,
      radial-gradient(#000 0.5px,transparent 0.5px) 1px 1px /3px 3px,
      radial-gradient(#000 0.5px,transparent 0.5px) 2px 2px /3px 3px;
  background-image: url("assets/home/logo_cdjvul_1920x1080.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: 0.25s;
}
@font-face {
  font-family: "Yuanmo";
  src: url('assets/fonts/KNYuanmo-Regular.ttf') format('truetype');
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
  background-color: #000000;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.navbar {
  background-color: #000000;
  border: 2px solid #459A7B;
  font-weight: bold;
  padding-left: 25px;
}
.navbar-toggler {
  border: 1px solid rgba(183, 67, 29, 0.5);
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28183, 67, 29, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.nav-item {
  display: flex;
  align-items: center;
  margin: 0 0.5em 0 0.5em;
  border-bottom: 2px solid #000000;
  transition: 0.25s;
}
.nav-item:hover {
  border-bottom: 2px solid #83FBD7;
}
.nav-link {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 2px;
}
.navbar-img {
  margin: 0 15px 0 0;
  height: 42px;
}
.navbar-link-img {
  height: 42px;
}
.navbar-logo {
  width: 40px;
  height: 40px;
  margin-right: 25px;
}
.padding-left {
  padding-left: 10px;
}
.left-align {
  text-align: left;
}
p {
  font-size: 20px;
}
.socials-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 40vh;
  z-index: 5;
  a {
    color: white;
    text-decoration: none;
  }
}
.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: #459A7B;
  font-size: 48px;
  transition: all 0.25s;
  padding-top: 4px;
}
.social-button:hover {
  background-color: #83FBD7;
  a {
    color: black;
  }
}
.member-button {
  width: 200px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-left: 15px;
  background-color: #459A7B;
  font-size: 48px;
  transition: all 0.25s;
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  p {
    margin-bottom: 0;
  }
}
.member-button:hover {
  background-color: #83FBD7;
  a {
    color: black;
  }
}
@media screen and (max-width: 992px) {
  .socials-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 0;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 5;
    a {
      color: white;
      text-decoration: none;
    }
  }
  .social-button {
    width: 256px;
    height: 64px;
    background-color: #459A7B;
    font-size: 48px;
    transition: all 0.25s;
  }
  .social-button:hover {
    background-color: #83FBD7;

    a {
      color: black;
    }
  }
  .member-button {
    width: 256px;
    height: 64px;
    background-color: #459A7B;
    font-size: 48px;
    transition: all 0.25s;
  }
  .member-button:hover {
    background-color: #83FBD7;

    a {
      color: black;
    }
  }
}
</style>

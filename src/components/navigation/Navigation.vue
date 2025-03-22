<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding-left">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarNavAltMarkup"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto mt-lg-0">
        <li class="nav-item">
          <img
            :src="logoSrc"
            class="navbar-img"
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link left-align"
            to="/"
          >
            Club de Développement de Jeux Vidéo de l'UL
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link left-align"
            to="/"
          >
            Accueil
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link left-align"
            to="/projets"
          >
            Projets
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link left-align"
            to="/responsables"
          >
            Responsables
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link left-align"
            to="/evenements"
          >
            Événements
          </router-link>
        </li>
        <!-- Uncomment when needed
        <li class="nav-item">
          <router-link class="nav-link left-align" to="/information">Information</router-link>
        </li>
        -->
      </ul>
    </div>
  </nav>
</template>

<script>
import logoSrc from '@/assets/navigation/logoUL_250x104.png';

export default {
  name: "NavigationMenu",
  data() {
    return {
      logoSrc
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-img {
  width: 100px;
  height: 40px;
}
.padding-left {
  padding-left: 10px;
}
.left-align {
  text-align: left;
}
</style>

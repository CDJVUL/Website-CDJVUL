<template>
  <div
    id="app"
    class="container-custom"
  >
    <Navigation />
    <router-view class="container-custom" />

    <hr class="version-separator">

    <div class="text-center version-container">
      Site web version: {{ version }}
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "@/components/navigation/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return {
      version: __APP_VERSION__
    };
  },
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

<template>
  <div class="full-container">
    <p>Le Club de Développement de Jeux Vidéo de l'Université Laval est le club officiel de développement de jeux vidéo à l'université Laval à Québec.
      <br/>
      On accueil les développeurs et les artistes à participer! Chaque session, nous organisons des activités permettant aux étudiants de l'université Laval de pratiquer leurs talent de création de jeux vidéo, quel que soit leur niveau.
      <br/>
      <span class="bold-text">Joignez-nous!!</span></p>
  </div>
</template>

<script>
export default {
  name: "InformationPage",
  components: {},
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.full-container {
  margin: 15px;
  padding: 25px;
  background-color: rgb(0 0 0 / 0.9);
  border: 2px solid #459A7B;

  p {
    font-family: Agency FB, sans-serif;
  }
}

.bold-text {
  font-weight: bold;
}
</style>

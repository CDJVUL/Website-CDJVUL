<template>
  <div class="full-container">
    <p>Cette section du site web est en construction! N'hésitez pas à rejoindre le discord et suivre notre page facebook pour les activités à venir!</p>
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
  font-family: "Agency FB", sans-serif;
  margin: 20px;
  padding: 20px;
  background-color: rgb(40 43 46 / 0.75);
}
.card {
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: 100%;
}

.spotlight {
  border-radius: 50%;
  width: 100%;
  max-width: 250px;
  object-fit: contain;
}

p {
  margin: 0;
}

.carousel {
  padding-bottom: 15px;
}

.carousel .carousel-item img {
  height: 500px;
  object-fit: cover;
}
</style>

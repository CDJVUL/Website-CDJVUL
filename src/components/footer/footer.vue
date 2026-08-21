<script setup>

</script>

<template>
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
            href="https://discord.gg/FrShW8JQBm"
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
</template>

<style scoped>

</style>
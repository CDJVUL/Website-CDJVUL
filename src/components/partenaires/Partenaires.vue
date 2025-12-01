<script setup>

import LogoAESGUL from '@/assets/partenaires/AESGUL.png'
import LogoASETIN from '@/assets/partenaires/ASETIN.png'
import PlanPartenariats from '@/assets/partenaires/PLAN-COMMANDITE-CDJ-2025-2026.pdf'

</script>

<template>
  <div>
    <h1 style="padding-top: 10px;">
      Partenaires du club 2025 - 2026
    </h1>
    <p>
      Voici la liste des partenaires qui soutiennent les activités du Club cette année ! Il existe 3 niveaux, 
      le niveau <span style="color: darkgoldenrod;">Bronze</span>, <span style="color:darkgrey;">Argent</span> et 
      <span style="color: red;">Rouge</span> & <span style="color: orange;">Or</span>.
      <br>Chaque niveau donne accès à des avantages supplémentaires.
      <br>Vous souhaitez nous soutenir ? Téléchargez notre 
      <a
        :href="PlanPartenariats"
        target="_blank"
      >document de partenariat</a> !
    </p>
    <h2>Partenaires <span style="color: red;">Rouge</span> & <span style="color: orange;">Or</span></h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="col"
        style="height: 500px;"
      >
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3
              class="card-title"
              innerText="ASETIN"
              style="height: 40px;"
            />
            <img
              class="spotlight"
              alt="Image introuvable"
              :src="LogoASETIN"
              style="max-width: 300px;"
            >
            <br>
            <br>
            <p
              innerText="Association des étudiants en informatique et génie logiciel"
              style="font-size: 20px;"
            />
            <p
              innerText="Association départementale de la faculté des sciences et de génie de l'UL"
              style="padding-top: 5px; height: 50px; padding-bottom: 5px;"
            />
            
            <a
              href="https://asetin.ca/"
              target="_blank"
            >
              <div
                class="d-flex align-items-center justify-content-center"
                style="padding-top: 10px;"
              >
                🌐
                <span class="icon-box">Site WEB</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        class="col"
        style="height: 500px;"
      >
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3
              class="card-title"
              innerText="AESGUL"
              style="height: 40px;"
            />
            <img
              class="spotlight"
              alt="Image introuvable"
              :src="LogoAESGUL"
              style="max-width: 300px;"
            >
            <br>
            <br>
            <p
              innerText="Association des étudiants en sciences et génie de l'université laval"
              style="font-size: 20px;"
            />
            <p
              innerText="Association facultaire de la faculté des sciences et de génie de l'UL"
              style="padding-top: 5px; height: 50px; padding-bottom: 5px;"
            />
            
            <a
              href="https://www.aesgul.com/"
              target="_blank"
            >
              <div
                class="d-flex align-items-center justify-content-center"
                style="padding-top: 10px;"
              >
                🌐
                <span class="icon-box">Site WEB</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- à décommenter si on a des partenaires argent ou bronze dans le futur.-->
    <!-- <h2>Partenaires <span style="color: darkgray;">Argent</span></h2>
    <h2>Partenaires <span style="color: darkgoldenrod;">Bronze</span></h2> -->
  </div>
</template>

<script>

export default {
    name: "PartenairesPage",
}

</script>

<style scoped>

.row {
  margin: 0;
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
  margin-right: 30px;
}

.icons-link {
  width: 100%;
  max-width: 30px;
  object-fit: contain;
  display: inline-block;
}

.icon-box {
  display: inline-block;
  color: white;
  padding-left: 10px;
}

</style>
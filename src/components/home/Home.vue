<template>
  <div>
    <br>
    <h1>Bienvenue au club de développement de jeux vidéo de l'Université Laval</h1><br>
    <h4 style="text-align: left; margin-right: 30px; margin-left: 30px;">
      Le club de développement de jeux vidéo de l'Université Laval a pour objectif d'enrichir les connaissances en création de jeux vidéo
      des étudiants de la faculté des sciences et génie. Pour ce faire, le club propose des formations,
      des séances de travail et des conférences avec des professionnels de l'industrie. Ses membres sont encouragés à participer à des concours dans le but de réaliser des projets vidéoludiques.
    </h4><br>
    <!-- Carousel Wrapper -->
    <div
      class="row row-cols-1 row-cols-md-2 g-4 section1"
      style="/*align-items: center;*/"
    >
      <div
        class="col next-Available"
        :style="{width: nextEventAvailable()?'80%':'100%'}"
      >
        <div
          class="carousel-wrapper"
          :style="{justifyContent: nextEventAvailable()?'flex-end':'center'}"
        >
          <div
            id="carousel-project-images"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
            style="margin-bottom: 30px;"
          >
            <!-- Indicators -->
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carousel-project-images"
                data-bs-slide-to="0"
                class="active"
              />
              <button
                v-for="(project, index) in projects"
                :key="index"
                type="button"
                data-bs-target="#carousel-project-images"
                :data-bs-slide-to="index+1"
              />
            </div>
            <!-- Slides -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="ratio ratio-16x9">
                  <img
                    class="d-block w-100"
                    :src="logoPath"
                    alt="Image introuvable"
                  >
                </div>
              </div>
              <div
                v-for="(project, index) in projects"
                :key="index"
                class="carousel-item image-container"
              >
                <div class="ratio ratio-16x9">
                  <img
                    class="d-block w-100"
                    :src="getImagePath(project.mainImagePath)"
                    alt="Image introuvable"
                    @click="goToProject(index)"
                  >
                </div>
                <div
                  style="background-color: gray; height: 140px; flex-direction: column; cursor:default;"
                  class="overlay"
                >
                  <a
                    href="javascript:;"
                    style="color: white;"
                    @click="goToProject(index)"
                  >
                    <p style="font-size: 30px;">{{ project.title }}</p>
                  </a>
                  <p
                    :innerText="project.event"
                    style="padding-top: 10px; font-size: 15px;"
                  />
                </div>
              </div>
            </div>
            <!-- Controls -->
            <button
              type="button"
              class="carousel-control-prev"
              href="#carousel-project-images"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              type="button"
              class="carousel-control-next"
              href="#carousel-project-images"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              />
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="nextEventAvailable()"
        class="col next-Event"
        style="width: 20%; height: 400px; display: block;"
      >
        <h3>Prochain événement</h3>
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3 :innerText="eventsList.at(0).name" />
            <p :innerText="eventsList.at(0).date" />
            <p
              :innerText="eventsList.at(0).shortDescription"
              style="padding: 5px;"
            />
            <img
              :src="eventsList.at(0).imageLink!=''?eventsList.at(0).imageLink:logoPath"
              class="imgEvent"
            >
            <br>
            <button
              class="eventsButton"
              @click="$router.push({name: 'EvenementsPage', query: {nextEvent: true}})"
            >
              Plus d'infos
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        id="events"
        class="col"
      >
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <div
              display="block"
              style="margin: auto; height: 15%;"
            >
              <h3 class="card-title">
                Restez à jour sur les événements
              </h3>
            </div>
            <div style="display: block; margin: auto; height:85%">
              <div
                class="row"
                style="height: 50%;"
              >
                <div class="col">
                  <br>
                  <a
                    href="https://www.facebook.com/gamedevUlaval/"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="facebookIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">Facebook</span>
                    </div>
                  </a>
                </div>
                <div class="col">
                  <br>
                  <a
                    href="https://discord.gg/yFQpaspDFV"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="discordIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">Discord</span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="row"
                style="height: 50%;"
              >
                <div class="col">
                  <br>
                  <a
                    href="https://www.linkedin.com/company/club-de-d%C3%A9veloppement-de-jeux-vid%C3%A9o-de-l-universit%C3%A9-laval/"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="linkedInIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">LinkedIn</span>
                    </div>
                  </a>
                </div>
                <div class="col">
                  <br>
                  <a
                    href="https://www.instagram.com/cdjv.ul/"
                    target="_blank"
                  >
                    <div class="d-flex align-items-center justify-content-center">
                      <img
                        :src="instagramIcon"
                        class="icons-link rounded-2"
                      >
                      <span class="icon-box">Instagram</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3
              class="card-title"
              :innerText="presidentInfo.role"
            /><br>
            <img
              class="spotlight"
              alt="Image introuvable"
              :src="getImagePath(presidentInfo.image, true)"
            >
            <br><br>
            <p
              style="font-size: 20px;"
              :innerText="presidentInfo.name"
            />
            <p
              style="padding-top: 5px;"
              :innerText="presidentInfo.domain"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-dark text-white h-100">
          <div class="card-body text-center">
            <h3 class="card-title">
              Où nous trouver?
            </h3>
            <p>1065 avenue de la Médecine, Québec, Canada</p>
            <p>Pavillon Adrien-Pouliot</p>
            <p>Local PLT-3778</p><br>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.8227201095738!2d-71.2758229883652!3d46.77825462261336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb89780451e7bbb%3A0x89a343b60103826f!2sPavillon%20Adrien-Pouliot%20(PLT)%20-%20Universit%C3%A9%20Laval!5e1!3m2!1sfr!2sca!4v1740442946482!5m2!1sfr!2sca"
              width="350"
              height="220"
              style="border:0; padding-bottom: 10px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="mapsGoogle"
            />
            <h3>Heures d'ouverture du local</h3>
            <p>À déterminer</p><br><br>
            <h3>Pour nous contacter</h3>
            <p><a href="mailto:gamedev.admin@ift.ulaval.ca">gamedev.admin@ift.ulaval.ca</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Home.js">
export default {
  name: 'HomePage',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Home.css">
</style>
<script setup>
</script>
<template>
  <div class="container-contact">
    Si vous souhaitez rentrer en contact avec le club, écrivez-nous à travers l'adresse du club :<br>
    <a href="mailto:gamedev.admin@ift.ulaval.ca">gamedev.admin@ift.ulaval.ca</a> en précisant à quelle personne s'adresse votre message. Merci !
  </div>
</template>
<script>
export default {
  name: "ContactPage",
  components: {},
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped>
</style>
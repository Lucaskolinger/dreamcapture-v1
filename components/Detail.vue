<template>
  <div class="container">
    <nuxt-content :document="project"></nuxt-content>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.container {
  background-color: $dc-blue;
  overflow-y: scroll;
  grid-area: detail;
  display: block;
  color: white;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 4rem;

  @media (min-width: $bp-medium) {
    padding-inline: 1rem;
  }

  @media (min-width: $bp-large) {
    max-width: 80rem;
    margin-inline: auto;
  }
}
</style>

<template>
  <div class="main-grid">
    <navigation />
    <card-list class="cardlist" />
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.main-grid {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 4rem calc(100vh - 4rem);
  grid-template-areas:
    "navigation"
    "vcs";

  @media (min-width: $bp-medium) {
    grid-template-columns: 40% 1fr;
    grid-template-areas:
      "cardlist navigation"
      "cardlist home";
  }
  @media (min-width: $bp-large) {
    grid-template-rows: 100%;
    grid-template-columns: 10rem 30% 1fr;
    grid-template-areas: "navigation cardlist home";
  }
  @media (min-width: $bp-xxlarge) {
    grid-template-columns: 10rem 40% 1fr;
    grid-template-areas: "navigation cardlist home";
  }

  .cardlist {
    display: none;
    @media (min-width: $bp-medium) {
      display: grid;
    }
  }
}
</style>

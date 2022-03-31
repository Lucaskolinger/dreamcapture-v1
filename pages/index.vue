<template>
  <div>
    <var-content-sm />
    <home class="home" />
  </div>
</template>

<script>
import CardList from "~/components/CardList.vue";
export default {
  components: { CardList },
  layout: "MainGrid",
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.home {
  height: calc(100vh - 4rem);

  @media (min-width: $bp-medium) {
    display: flex;
  }

  @media (min-width: $bp-large) {
    height: 100vh;
  }
}
</style>

<template>
  <div>
    <var-content-sm></var-content-sm>
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
  display: none;
  width: 0;
  height: 0;

  @media (min-width: $bp-medium) {
    display: flex;
    width: 100%;
    height: 100vh;
  }
}
</style>

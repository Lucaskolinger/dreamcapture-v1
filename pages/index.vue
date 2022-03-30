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
  display: none;
  visibility: hidden;
  @media (min-width: $bp-medium) {
    display: block;
  }
}
</style>

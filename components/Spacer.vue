<template>
  <div class="spacer"></div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.spacer {
  width: 100%;
  height: 3px;
  opacity: 0.5;
  background-image: radial-gradient(
    circle at center,
    $dc-darker,
    $dc-darker,
    $dc-darker,
    $dc-darker,
    $dc-darker,
    $dc-darker,
    $dc-darker,
    rgba(0, 0, 255, 0)
  );
  margin-block: 2rem;
}
</style>

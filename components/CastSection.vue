<template>
  <div>
    <div class="spacer"></div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.container {
  font-size: 1rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  margin-inline: 1rem;

  @media (min-width: $bp-medium) {
    margin-inline: 0;
  }
}

.spacer {
  width: 100%;
  height: 2px;
  opacity: 0.5;
  background-image: radial-gradient(
    circle at center,
    $dc-dark,
    $dc-dark,
    $dc-dark,
    $dc-dark,
    rgba(0, 0, 255, 0)
  );
  margin-block: 2rem;
}
</style>

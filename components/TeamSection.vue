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
  width: 100%;
  color: white;
  font-size: 1rem;
  margin-bottom: 3rem;
}

.title {
  font-size: 1.75rem;
  margin-top: 3rem;
  margin-inline: 1rem;
  margin-bottom: 1rem;
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

<template>
  <div>
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
</style>

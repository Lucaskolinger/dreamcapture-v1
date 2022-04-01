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
  width: 100%;
  font-size: 1rem;
}
</style>

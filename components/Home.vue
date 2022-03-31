<template>
  <div class="container">Home content</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.container {
  grid-area: home;
  background-color: green;
  width: 100%;

  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

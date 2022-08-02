<template>
  <div class="container">
    <div class="card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      eligendi commodi quidem temporibus soluta, iure minima provident
      voluptates delectus natus.
    </div>
    <div class="card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique
      deserunt amet dicta quaerat ex porro, commodi officia ullam quos.
    </div>
    <div class="card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique
      deserunt amet dicta quaerat ex porro, commodi officia ullam quos.
    </div>
    <div class="card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique
      deserunt amet dicta quaerat ex porro, commodi officia ullam quos.
    </div>
    <div class="card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique
      deserunt amet dicta quaerat ex porro, commodi officia ullam quos.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.container {
  grid-area: home;
  width: 100%;
  height: 100vh;
  color: white;
  background-color: yellow;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1000px, 1fr));
  gap: 1rem;

  .card {
    background-color: red;
  }
}
</style>

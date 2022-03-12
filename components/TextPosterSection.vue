<template>
  <div>
    <div class="container">
      <img :src="poster" class="poster" />
      <div class="text-wrapper">
        <p class="description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "poster"],
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.container {
  height: 22rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #011a38;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .text-wrapper {
    overflow-y: scroll;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-left: 0.5rem;
    margin-bottom: 1rem;

    .description {
      line-height: 28px;
      color: #cad4e0;

      @media (min-width: $bp-large) {
      }
    }
  }

  .poster {
    height: 20rem;
    border-radius: 0.5rem;
  }
}
</style>

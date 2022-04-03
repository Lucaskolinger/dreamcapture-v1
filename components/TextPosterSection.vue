<template>
  <div class="container">
    <img :src="poster" class="poster" />
    <div class="text-wrapper">
      <p class="description">
        {{ description }}
      </p>
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
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #011a38;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 0px 34px 1px rgba(243, 111, 34, 0.51);

  @media (min-width: $bp-medium) {
    flex-direction: row;
    height: 22rem;
  }

  .text-wrapper {
    overflow-y: scroll;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
    max-width: 35rem;

    .description {
      line-height: 28px;
      color: #cad4e0;
    }
  }

  .poster {
    border-radius: 0.5rem;
    width: 100%;
    max-width: 35rem;
    margin-inline: auto;

    @media (min-width: $bp-medium) {
      width: auto;
      height: 20rem;
      max-width: auto;
      margin-inline: 0;
    }
  }
}
</style>

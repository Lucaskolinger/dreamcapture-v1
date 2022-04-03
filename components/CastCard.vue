<template>
  <div class="single-card">
    <img :src="img" />
    <div class="text-column">
      <h1>{{ rolename }}</h1>
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rolename: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.single-card {
  display: flex;
  background-color: $dc-dark;
  box-shadow: 0px 0px 34px 1px rgba(243, 111, 34, 0.51);
  color: #cad4e0;
  gap: 1.5rem;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  overflow-x: scroll;

  .text-column {
    h1 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
  }

  img {
    width: 6rem;
    border-radius: 0.5rem;
    aspect-ratio: 1;
  }
}
</style>

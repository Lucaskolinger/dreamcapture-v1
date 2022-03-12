<template>
  <nuxt-link
    :to="{ name: 'projekte-slug', params: { slug: project.slug } }"
    class="card"
  >
    <img :src="project.thumbnail" class="img" />
    <div class="content-wrapper">
      <h2 class="title">{{ project.title }}</h2>
      <p class="meta">
        {{ project.category }} · {{ project.date }} · {{ project.length }}
      </p>
      <p class="summary">
        {{ project.summary }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.card {
  width: 100%;
  border-radius: 1rem;
  background-color: $dc-blue;
  text-decoration: none;
  color: #cad4e0;
  font-family: sans-serif;
  z-index: 1000;

  .img {
    width: 100%;
    padding-top: 0.5rem;
    padding-inline: 0.5rem;
    border-radius: 1rem;
  }

  .content-wrapper {
    margin-inline: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 1rem;

    .title {
      margin-bottom: 0.5rem;
      font-size: 1.75rem;
      line-height: 1.25;

      &:hover {
        color: #fefeff;
      }
    }
    .meta {
      margin-bottom: 1rem;
      color: #f36f22;
    }
    .summary {
      font-size: 1.125rem;
      line-height: 24px;
      color: #93a2b7;
    }
  }
}
</style>

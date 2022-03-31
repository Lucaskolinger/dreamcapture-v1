<template>
  <div class="container">
    <card
      class="card"
      v-for="project of projects"
      :key="project.slug"
      :project="project"
    />
    <nuxt-link to="../contact" class="personal">
      <div class="question-mark">?</div>
      <h3 class="title">Dein Traum!</h3>
      <p class="subtitle">
        Kontaktiere uns und lass uns zusammen deinen Traum verwirklichen!
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  async fetch() {
    this.projects = await this.$content("projekte")
      .only([
        "title",
        "summary",
        "category",
        "slug",
        "length",
        "date",
        "thumbnail",
      ])
      .sortBy("title", "asc")
      .fetch();
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.container {
  background-color: #8eb5e6;
  grid-area: cardlist;
  width: 100%;
  height: calc(100vh - 9.125rem);
  overflow-y: scroll;
  z-index: 100;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding-inline: 1rem;
  padding-block: 1rem;
  align-content: start;

  @media (min-width: $bp-medium) {
    height: 100vh;
  }

  @media (min-width: $bp-large) {
  }

  /* .card:not(.nuxt-link-exact-active) {
    opacity: 0.5;
  } */

  .personal {
    height: 20rem;
    border-radius: 0.5rem;
    background-color: $dc-blue;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      text-align: center;
      line-height: 1.5;
      margin-inline: 1rem;
    }

    .question-mark {
      font-size: 8rem;
    }
  }
}
</style>

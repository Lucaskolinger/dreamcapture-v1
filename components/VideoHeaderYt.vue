<template>
  <div>
    <iframe
      class="video"
      :src="link"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="meta-container">
      <p class="meta">Kategorie: {{ category }}</p>
      <span class="meta">|</span>
      <p class="meta">Erschienen: {{ date }}</p>
      <span class="meta">|</span>
      <p class="meta">Spieldauer: {{ length }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "date", "length", "link"],
};
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.video {
  width: 100%;
  aspect-ratio: 16/9;

  @media (min-width: $bp-medium) {
    border-radius: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
}

.meta-container {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  .meta {
    color: $dc-orange;
    font-size: 0.8rem;
    display: inline-block;
  }
}
</style>

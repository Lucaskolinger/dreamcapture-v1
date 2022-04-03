<template>
  <div>
    <video
      class="video"
      :src="videosrc"
      controls="controls"
      :poster="thumbnail"
    />
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
  props: ["category", "videosrc", "date", "length", "thumbnail"],
};
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.video {
  width: 100%;
  box-shadow: 0px 0px 34px 1px rgba(243, 111, 34, 0.51);

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

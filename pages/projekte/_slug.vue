<template>
  <div class="detail-wrapper">
    <detail :project="project" />
  </div>
</template>

<script>
export default {
  layout: "MainGrid",

  async asyncData({ $content, params }) {
    const project = await $content("projekte", params.slug).fetch();
    return { project };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.detail-wrapper {
  height: 100%;
}
</style>

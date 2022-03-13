<template>
  <div>
    <div ref="card" class="about-card">
      <img class="img" :src="image" />
      <div class="content-column">
        <div class="head-row">
          <div class="head-column">
            <h1>{{ title }}</h1>
            <p class="subtitle">{{ subtitle }}</p>
          </div>
          <button
            v-if="hasfilmografie == 'true'"
            ref="btn"
            @click="showExtendedContent"
          >
            filmografie zeigen
          </button>
        </div>
        <p class="text">
          {{ text }}
        </p>
      </div>
    </div>
    <div v-if="showExtended" class="extended-content">{{ filmografie }}</div>
  </div>
</template>

<script>
import impressum from "~/pages/impressum.vue";
export default {
  components: { impressum },
  props: [
    "title",
    "subtitle",
    "text",
    "filmografie",
    "hasfilmografie",
    "image",
  ],
  data() {
    return {
      showExtended: false,
    };
  },
  methods: {
    showExtendedContent() {
      this.showExtended = !this.showExtended;
      if (this.showExtended) {
        this.$refs.btn.textContent = "Filmografie schließen";
        this.$refs.card.style.borderBottomLeftRadius = "0";
        this.$refs.card.style.borderBottomRightRadius = "0";
      } else {
        this.$refs.btn.textContent = "Filmografie zeigen";
        this.$refs.card.style.borderBottomLeftRadius = "1rem";
        this.$refs.card.style.borderBottomRightRadius = "1rem";
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.about-card {
  background-color: $dc-dark;
  color: #93a2b7;
  margin-top: 1rem;
  margin-inline: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 100%;

  .img {
    margin: 1rem;
    width: 10rem;
    border-radius: 1rem;
    aspect-ratio: 1;
  }

  .content-column {
    display: flex;
    margin-top: 1.5rem;
    flex-direction: column;
    padding-bottom: 2rem;
    padding-right: 2rem;

    h1 {
      color: #cad4e0;
      font-size: 1.5rem;
    }

    .subtitle {
      color: $dc-orange;
    }
    .text {
      font-weight: 500;
    }

    .head-row {
      display: flex;
      align-items: center;
      gap: 2rem;

      button {
        padding: 1rem;
        border: none;
        cursor: pointer;
        background-color: $dc-blue;
        color: $dc-orange;
        border-radius: 0.5rem;
      }
    }

    p {
      margin-top: 1rem;
      line-height: 1.5;
    }
  }
}

.extended-content {
  background-color: $dc-dark;
  color: aliceblue;
  margin-top: 0.5rem;
  height: 30rem;
  margin-inline: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
</style>

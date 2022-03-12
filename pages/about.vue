<template>
  <div class="container">
    <div ref="card" class="about-card">
      <div class="img"></div>
      <div class="content-column">
        <div class="head-row">
          <div class="head-column">
            <h1>Finn-Oliver Walter</h1>
            <p>Musik | Sound Design</p>
          </div>
          <button ref="btn" @click="showExtendedContent">
            Projekte zeigen
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          necessitatibus repellendus dolor corrupti reprehenderit nihil laborum
          ut minus ducimus obcaecati quidem quam incidunt sed omnis, velit odit,
          culpa vero veritatis?
        </p>
      </div>
    </div>
    <div v-if="showExtended" class="extended-content">Extended</div>
  </div>
</template>

<script>
export default {
  layout: "MainGrid",
  data() {
    return {
      showExtended: false,
    };
  },
  methods: {
    showExtendedContent() {
      this.showExtended = !this.showExtended;
      if (this.showExtended) {
        this.$refs.btn.textContent = "Projekte schließen";
        this.$refs.card.style.borderBottomLeftRadius = "0";
        this.$refs.card.style.borderBottomRightRadius = "0";
      } else {
        this.$refs.btn.textContent = "Projekte zeigen";
        this.$refs.card.style.borderBottomLeftRadius = "1rem";
        this.$refs.card.style.borderBottomRightRadius = "1rem";
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.container {
  background-color: $dc-blue;
  overflow-y: scroll;
  padding-bottom: 20rem;

  .about-card {
    background-color: $dc-dark;
    color: whitesmoke;
    margin-top: 1rem;
    margin-inline: 1rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-template-rows: 100%;

    .img {
      margin: 1rem;
      background-color: brown;
      border-radius: 2rem;
      aspect-ratio: 1;
    }

    .content-column {
      display: flex;
      margin-top: 1rem;
      flex-direction: column;

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
    margin-top: 0.5rem;
    height: 30rem;
    margin-inline: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
}
</style>

<template>
  <div class="container">
    <div class="button-section">
      <button ref="homebtn" @click="showHomeHandler" class="toggle-btn">
        Neues von Dreamcapture
      </button>
      <button ref="listbtn" @click="showListHandler" class="toggle-btn active">
        Dreamcapture Projekte
      </button>
    </div>
    <card-list v-if="showList" />
    <home v-if="showHome" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: true,
      showHome: false,
    };
  },
  methods: {
    showHomeHandler() {
      this.showHome = true;
      this.showList = false;
      this.$refs.homebtn.classList.add("active");
      this.$refs.listbtn.classList.remove("active");
    },
    showListHandler() {
      this.showList = true;
      this.showHome = false;
      this.$refs.homebtn.classList.remove("active");
      this.$refs.listbtn.classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.container {
  grid-area: vcs;
  background-color: $dc-dark;
  height: calc(100vh - 4rem);
  overflow-y: scroll;

  @media (min-width: $bp-medium) {
    display: none;
  }
  .button-section {
    margin-block: 1rem;
    display: flex;
    background-color: $dc-dark;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;

    .toggle-btn {
      display: block;
      width: 50%;
      padding: 1rem;
      background-color: $dc-dark;
      cursor: pointer;
      border-style: none;
      color: white;
    }

    .active {
      background-color: $dc-blue;
      border-radius: 0.5rem;
    }
  }
}
</style>

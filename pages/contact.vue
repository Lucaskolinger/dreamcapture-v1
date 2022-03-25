<template>
  <div class="container">
    <div ref="imgcontainer" class="img">Bild Platzhalter</div>
    <h2>Stay in touch!</h2>
    <div
      class="form-container"
      @mouseover="changePicture"
      @mouseleave="changePictureAgain"
    >
      <h1>Finn-Oliver Walter</h1>
      <div class="mail-row">
        <button ref="btn" @click="copyMailToClipboard">
          <svg
            v-if="mailbtnAlerted"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
        </button>
        <p ref="email">finn.walter@dreamcapture.de</p>
      </div>
      <div class="tel-row">
        <button ref="btn" @click="copyNumberToClipboard">
          <svg
            v-if="phonebtnAlerted"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
        <p-tel ref="number">013849120413908</p-tel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "MainGrid",
  data() {
    return {
      phonebtnAlerted: false,
      mailbtnAlerted: false,
    };
  },
  methods: {
    copyNumberToClipboard() {
      navigator.clipboard.writeText(this.$refs.number.textContent);
      this.phonebtnAlerted = true;
      setTimeout(() => {
        this.phonebtnAlerted = false;
      }, 1000);
    },
    copyMailToClipboard() {
      navigator.clipboard.writeText(this.$refs.email.textContent);
      this.mailbtnAlerted = true;
      setTimeout(() => {
        this.mailbtnAlerted = false;
      }, 1000);
    },
    changePicture() {
      this.$refs.imgcontainer.style.backgroundColor = "red";
    },
    changePictureAgain() {
      this.$refs.imgcontainer.style.backgroundColor = "orange";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

button {
  background-color: $dc-blue;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:active {
    background-color: $dc-dark;
  }
}

.container {
  background-color: $dc-blue;

  .img {
    background-color: orange;
    aspect-ratio: 16 / 9;
    border-radius: 1rem;
    margin-inline: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 0.397);
    align-items: center;
  }
  h2 {
    color: #cad4e0;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    margin-top: 1.5rem;
  }
  .form-container {
    margin-top: 2rem;
    color: #cad4e0b9;
    background-color: $dc-dark;
    padding: 2rem;
    border-radius: 1rem;
    width: max-content;
    margin-inline: auto;

    &:hover {
      transform: translateY(-1rem) scale(105%);
      margin-top: 4rem;
      box-shadow: 1px 1px $dc-orange;
    }

    h1 {
      margin-bottom: 1rem;
    }

    .mail-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;

      svg {
        width: 1.5rem;
        cursor: pointer;
        stroke: $dc-orange;

        &:hover {
          stroke: #cad4e0b9;
        }
      }
    }
    .tel-row {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 1.5rem;
        cursor: pointer;
        stroke: $dc-orange;

        &:hover {
          stroke: #cad4e0b9;
        }
      }
    }
  }
}
</style>

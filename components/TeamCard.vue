<template>
  <a :href="link" target="_blank" class="card">
    <div class="content-wrapper">
      <div class="role-row">
        <svg
          v-if="role === roleProduction"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#F36F22"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
          />
        </svg>
        <svg
          v-if="role === roleCamera"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#F36F22"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <p class="role-title">{{ role }}</p>
      </div>
      <h3 class="name" ref="nameString"></h3>
    </div>
  </a>
</template>

<script>
export default {
  props: ["role", "name"],
  data() {
    return {
      roleProduction: "Produktion",
      roleCamera: "Kamera",
    };
  },
  mounted() {
    const strings = this.$props.name.split(",");
    const nameString = this.$refs.nameString;

    for (const string of strings) {
      const linkElement = document.createElement("a");
      linkElement.textContent = string;
      linkElement.target = "_blank";
      linkElement.style.borderRadius = "1rem";
      linkElement.style.backgroundColor = "#01233f";
      linkElement.style.textDecoration = "none";
      linkElement.style.color = "#93a2b7";
      linkElement.style.paddingBlock = "0.25rem";
      linkElement.style.paddingInline = "0.5rem";
      linkElement.style.marginRight = "0.5rem";
      linkElement.style.lineHeight = "2.5";

      if (string.includes("Sonja Marschall")) {
        linkElement.href = "https://web.whatsapp.com";
      } else if (string.includes("Finn-Oliver Walter")) {
        linkElement.href = "https://css-tricks.com";
      } else if (string.includes("Lucas Kolinger")) {
        linkElement.href =
          "https://krutiepatel.com/diagrams/understanding-nuxt-2-12-lifecycle-hooks-1587304800";
      }
      nameString.appendChild(linkElement);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.card {
  background-color: $dc-dark;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: start;
  border-radius: 0.5rem;
  padding-block: 0.5rem;
  color: #cad4e0;

  .content-wrapper {
    display: flex;
    align-items: center;

    .role-row {
      display: flex;
      min-width: 150px;
      height: 100%;
      align-items: center;
      background-color: $dc-blue;
      padding: 0.5rem;
      margin-left: 0.5rem;
      border-radius: 0.5rem;
      gap: 0.5rem;
      margin-right: 1rem;

      .role-title {
        font-weight: 500;
      }

      .icon {
        aspect-ratio: 1;
        width: 1.5rem;
      }
    }

    .name {
      font-weight: 400;
    }
  }
}
</style>

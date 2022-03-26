<template>
  <nav class="navigation">
    <div class="spacer"></div>
    <nuxt-link to="/" class="logo">
      <logo />
    </nuxt-link>
    <div class="nav-items">
      <nuxt-link to="/" class="nav-item"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#cad4e0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          /></svg
      ></nuxt-link>
      <nuxt-link to="../about" class="nav-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#cad4e0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link to="../contact" class="nav-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#cad4e0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </nuxt-link>
      <div class="nav-item placeholder"></div>
      <nuxt-link to="../contact" class="nav-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#cad4e0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link to="../contact" class="nav-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#cad4e0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </nuxt-link>
    </div>
    <div class="spacer"></div>
  </nav>
</template>

<script>
export default {};
</script>

<style Logo lang="scss" scoped>
@import "~assets/scss/variables";

.navigation {
  background-color: $dc-blue;
  grid-area: navigation;

  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: 100%;

  @media (min-width: $bp-large) {
    flex-direction: column;
    grid-template-columns: 100%;
    grid-template-rows: 12rem 1fr 6rem;
  }

  .nav-items {
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (min-width: $bp-large) {
      flex-direction: column;
      width: 6rem;
      gap: 3rem;
    }
  }

  .nav-item {
    svg {
      width: 1.75rem;
    }

    svg {
      stroke: $dc-orange;
      &:hover {
        stroke: orange;
      }
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 8rem;
    }
    @media (max-width: $bp-large) {
      display: none;
    }
  }

  .spacer {
    @media (min-width: $bp-large) {
      display: none;
    }
  }
}

.placeholder {
  width: 100%;
  height: 0.25rem;
  background-color: $dc-blue;
  display: none;

  @media (min-width: $bp-large) {
    display: block;
  }
}
</style>

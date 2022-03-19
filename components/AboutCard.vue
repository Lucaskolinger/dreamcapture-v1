<template>
  <div>
    <div ref="card" class="about-card">
      <div class="left-column">
        <img class="img" :src="image" />
        <button
          v-if="hasfilmografie == 'true'"
          ref="btn"
          @click="showExtendedContent"
        >
          Filmografie zeigen
        </button>
        <a href="https://www.instagram.com/dreamcapture_de/" target="_blank">
          <img
            src="https://res.cloudinary.com/doojtvxwn/image/upload/v1647731337/instagram_y2fyih.png"
            alt="instagram"
            class="instagram-logo"
          />
        </a>
      </div>

      <div class="right-column">
        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
        <p class="text">
          {{ text }}
        </p>
      </div>
    </div>
    <ul v-if="showExtended" class="extended-content">
      <li>
        <a
          href="https://www.crew-united.com/en/Hope-and-Glory-A-Mad-Max-Fanfilm__292913.html#!searchterm=hope%20and%20glor"
          target="_blank"
        >
          01/2022 „MadMax Fanfilm: Hope and Glory“ (Mittellanger Spielfilm,
          45min) - Oberbeleuchter (4DT – Block 3)
        </a>
      </li>
      <li>
        12/2021 „Sonntag auf dem Mond“ (Bewerbungsfilm, 5min) - Oberbeleuchter
        (1DT)
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/5-Finger__295223.html#!searchterm=f%C3%BCnf%20finger"
          target="_blank"
        >
          11+12/2021 „Fünf Finger“ (Kurzfilm, 15min) -
          Produktionassistenz/Set-Aufnahmeleitung (4DT)
        </a>
      </li>
      <li>11/2021 „Stinkfrucht“ (Kurzfilm, 30min) - Set-Runner (1DT)</li>
      <li>
        <a
          href="https://www.crew-united.com/en/Das-Ersatzteil__283194.html#!searchterm=ersatzteile"
          target="_blank"
        >
          10,11/2021 „Ersatzteile“ (Kurzfilm, 15min) -
          Produktionsleiter/Beleuchter (2DT)
        </a>
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/Hope-and-Glory-A-Mad-Max-Fanfilm__292913.html#!searchterm=hope%20and%20glor"
          target="_blank"
        >
          10/2021 „MadMax Fanfilm: Hope and Glory“ (Mittellanger Spielfilm,
          45min) - Oberbeleuchter (3DT – Block 2)
        </a>
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/Agent-Echo-und-die-Firecard-Verschwoerung__290007.html#!searchterm=agent%20echo"
          target="_blank"
        >
          08,09/2021 „Agent Echo und die Firecard Verschwörung“ (Kurzfilm,
          20min) - Produktionsleiter
        </a>
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/Timewarp__289691.html#!searchterm=timewarp"
          target="_blank"
        >
          08/2021 „Timewarp“ – Eyewall-Productions (Kurzfilm, 13min) -
          Beleuchter (2DT)
        </a>
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/Bis-es-mich-gibt__273571.html#!searchterm=bis%20es%20mich"
          target="_blank"
        >
          06,07/21 „Bis es mich gibt“ – Elfenholz Film (Spielfilm, 100min) -
          Licht-Praktikant (31DT) 2020 –
        </a>
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/Blaue-Briefe__274261.html#!searchterm=blaue%20briefe"
          target="_blank"
        >
          03/21 „Blaue Briefe“ (Kurzfilm, 20min) - Produktion/Regie/Schnitt</a
        >
      </li>
      <li>
        2019 - 2020 „Das Leben ist kein Wunschkonzert“ (Kurzfilm, 35min) -
        Buch/Produktion/Regie/Schnitt
      </li>
      <li>
        <a href="https://youtu.be/LMXpgmlkn1A" target="_blank">
          2019 - 2020 „The beauty of yellow” (Kurzfilm, 7min) -
          Buch/Produktion/Regie/Kamera/Schnitt
        </a>
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/Old-Wounds__273752.html#!searchterm=alte%20wunden"
          target="_blank"
        >
          07/2020 „Alte Wunden soll man aufreißen“ (Kurzfilm, 17min) -
          Beleuchter (4DT)
        </a>
      </li>
      <li>
        2018 – 2019 „Aufmerksamkeit, bitte!“ (Kurzfilm, 5min) -
        Buch/Produktion/Regie
      </li>
      <li>
        <a
          href="https://www.crew-united.com/en/DB-Regio-Willkommen-an-Bord-des-neuen-Flughafenexpress__248879.html"
          target="_blank"
        >
          10/2018 „Deutsche Bahn Üfex“ Regensburg - Set-Praktikant (1DT)</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import impressum from "~/pages/impressum.vue";
export default {
  components: { impressum },
  props: ["title", "subtitle", "text", "hasfilmografie", "image"],
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

  .left-column {
    margin: 1rem;

    button {
      padding-inline: 1rem;
      padding-block: 1.5rem;
      border: none;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      background-color: $dc-blue;
      color: $dc-orange;
      border-radius: 0.5rem;
      width: 100%;
      margin-bottom: 1rem;
    }

    .instagram-logo {
      width: 30%;
      cursor: pointer;
    }

    .img {
      border-radius: 1rem;
      margin-bottom: 1rem;
      width: 100%;
      aspect-ratio: 1;
    }
  }

  .right-column {
    margin-top: 1.5rem;
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

    p {
      margin-top: 1rem;
      line-height: 1.5;
    }
  }
}

// Filmografie

.extended-content {
  background-color: $dc-dark;
  color: aliceblue;
  padding-inline: 2rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  margin-top: 0.5rem;
  margin-inline: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  li {
    margin-block: 1rem;
    line-height: 1.5;
    list-style: none;
    background-color: $dc-blue;
    padding: 1rem;
    color: #93a2b7;
    border-radius: 1rem;

    a {
      text-decoration: none;
      color: #93a2b7;
    }
  }
}
</style>

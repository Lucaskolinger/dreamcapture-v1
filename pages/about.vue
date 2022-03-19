<template>
  <div class="container">
    <about-card
      hasfilmografie="true"
      image=https://res.cloudinary.com/doojtvxwn/image/upload/v1640821328/About/finn_wqx1so.jpg
      title="Finn-Oliver Walter"
      subtitle="Kreative Produktion - Regie - Licht - Ton - Postproduktion"
      text="Hi! Ich bin Finn, Gründer von dreamcapture und davon überzeugt, dass beim Filmemachen nicht nur das Endergebnis, sondern der gesamte Prozess das Kunstwerk ausmacht. Probleme sehe ich als Möglichkeit für neue, kreative Wege und das Medium Film als wertvolles Werkzeug, um unglaubliche, in den Bann ziehende Geschichten zu erzählen, mit denen die Welt ein kleines Stückchen besser gemacht werden kann. Medien sind mein Alltag und das gemeinsame Schaffen mit anderen meine Leidenschaft. Welches Traumprojekt von dir können mein Team und ich verwirklichen?"
    ></about-card>
    <about-card
      image=https://res.cloudinary.com/doojtvxwn/image/upload/v1641325625/About/leon_abiqrf.jpg
      hasfilmografie="false"
      title="Leon Markl"
      subtitle="Kamera - Licht - Postproduktion"
      text="Hallo, Ich bin Leon, leidenschaftlicher Filmemacher aus dem Raum Rosenheim. Meine Begeisterung besteht darin, fesselnde Geschichten mit eindrucksvollen, emotionalen, schönen oder auch bedrückenden Bildern zu erzählen, um Zuschauenden einen visuellen als auch emotionalen Einstieg in das Werk zu ermöglichen. Der Weg,  beziehungsweise der künstlerische Prozess zum fertigen Film ist das, was mich meine Kreativität ausleben lässt, - von den vielen Bildern im Kopf bei der ersten Idee bis hin zur Umsetzung, egal ob in der Vorproduktion oder am Set hinter der Kamera. Das künstlerische, kreative Handwerk des Filmemachens, das kommunikative Arbeiten mit anderen Filmschaffenden ist meine Leidenschaft und fasziniert mich jeden Tag aufs neue."
    ></about-card>
    <about-card
      image=https://res.cloudinary.com/doojtvxwn/image/upload/v1645618620/About/florian_nxrfbo.jpg
      hasfilmografie="false"
      title="Florian Dennerlein"
      subtitle="Musik - Sounddesign"
      text="Hallo, ich bin Flo. Schon als kleines Kind fühlte ich mich zur Musik hingezogen. Jedoch habe ich damals die Musik nie so richtig als „Musik im eigentlichen Sinne“ verstanden, sondern als eine Art Sprache. Das tue ich bis heute. Für mich ist Musik eine Sprache der Emotionen, die weltweit verstanden wird. Kein Wort vermag es, uns in kurzer Zeit so tief unter die Haut zu fahren, dass wir erzittern, uns freuen oder weinen müssen. Im Film schafft es die Musik, eine Szene ganz anders darzustellen, als es der Regisseur vielleicht intendieren wollte.
Meiner Meinung nach erzählt bereits jeder Film eine Geschichte, doch die Filmmusik kann (unterschwellig) noch eine zweite Story erzählen, die das Innere einer Figur mehr beleuchtet.
"
    ></about-card>
  </div>
</template>

<script>
export default {
  layout: "MainGrid",
};
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.container {
  background-color: $dc-blue;
  overflow-y: scroll;
  padding-bottom: 1rem;
}
</style>

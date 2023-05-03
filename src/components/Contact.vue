<template>
  <v-row class="vh-85 my-5 py-5" id="contact">
    <v-col cols="5" class="p-0">
      <v-img class="vh-85" src="/contacto.jpg" cover></v-img>
    </v-col>
    <v-col cols="7" class="bg-gray text-white p-0">
      <div
        class="d-flex flex-column justify-content-center align-items-center vh-85 gap-4 position-relative"
      >
        <h2 class="fw-bolder">CONTACTANOS</h2>
        <p class="px-5 mx-5 text-center">
          Quien diría que un solo sorbo del aromático fruto tostado puede
          generar tantas emociones. Su accidental descubrimiento en la Etiopia
          del s.IX d.C., nos ha dejado a todos los amantes del café, siguiéndole
          en todas sus formas, respirando su profundo aroma y despertando con
          gusto por las mañanas. Pero nosotros queremos ir más allá de ello.
        </p>
        <v-btn id="btn" rounded="xl" variant="outlined" color="#754319">
          <a
            :href="this.wa"
            target="_blank"
            class="text-decoration-none text-white a-large"
          >
            <v-icon>mdi-whatsapp</v-icon>
            COTIZA POR WHATSAPP
          </a>

          <a
            :href="this.wa"
            target="_blank"
            class="text-decoration-none text-white a-small"
          >
            <v-icon>mdi-whatsapp</v-icon>
            COTIZA POR <br />
            WHATSAPP
          </a>
        </v-btn>
        <img
          src="/marca-de-agua.png"
          class="position-absolute bottom-0 start-0 w-50"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    wa: String,
  },
  data() {
    return {
      whatsapp: "https://wa.me/c/5214421681339",
    };
  },
};
</script>

<style>
</style>
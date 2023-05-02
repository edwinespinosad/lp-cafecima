<template>
  <div
    id="banner-1"
    style="position: relative; height: 400px"
    class="text-white py-5 my-5"
  >
    <div
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        filter: brightness(50%);
      "
      :style="backgroundImage"
    ></div>
    <div
      style="position: relative; z-index: 1; height: 400px"
      class="container py-5 d-flex flex-column justify-content-center"
    >
      <h2 class="fw-bold w-50">
        Descubre el sabor del mejor <br />
        café mexicano
      </h2>
      <span class="line-under-text my-2"></span>
      <div class="w-50">
        <p>
          Tenemos por objetivo dignificar a los productores, por lo que cada
          cosecha es seleccionada con base en altos parámetros de expertos que
          toman en cuenta la tierra y la altura, el entorno que absorben las
          raíces de la planta, la cosecha manual, el lavado y secado cuidadoso.
        </p>
      </div>
      <div>
        <v-btn id="btn" rounded="xl" variant="outlined" color="#754319">
          <a
            :href="this.wa"
            target="_blank"
            class="text-decoration-none text-white"
          >
            <v-icon>mdi-whatsapp</v-icon>
            COTIZA POR WHATSAPP
          </a>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wa: String,
  },
  data() {
    return {
      banner: "banner-1.jpg",
      whatsapp: "https://wa.me/c/5214421681339",
    };
  },
  computed: {
    backgroundImage() {
      return `background-image: url("${this.banner}")`;
    },
  },
};
</script>

<style scoped>
.line-under-text {
  width: 5%;
  height: 5px;
  display: block;
  background-color: #bb916d;
}
</style>
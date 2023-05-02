<template>
  <v-carousel
    v-model="model"
    class="position-relative vh-85 mb-5"
    cycle
    interval="3000"
    hide-delimiter-background
    hide-delimiters
    color="#BB916D"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
      <div
        style="height: 100%"
        class="d-flex justify-content-center flex-column text-white container align-items-xs-center align-items-lg-start"
      >
        <h2 class="fw-bold w-50">{{ item.title }}</h2>
        <span class="line-under-text my-2"></span>
        <div class="w-50">
          <p>{{ item.p }}</p>
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
        </div>
      </div>
    </v-carousel-item>

    <v-radio-group
      inline
      v-model="selected"
      class="position-absolute bottom-0 end-0 pr-5"
      style="z-index: 1"
    >
      <v-radio value="0" color="#BB916D"></v-radio>
      <v-radio value="1" color="#BB916D"></v-radio>
      <v-radio value="2" color="#BB916D"></v-radio>
    </v-radio-group>
  </v-carousel>
</template>
<script >
export default {
  props: {
    wa: String,
  },
  data() {
    return {
      selected: 0,
      model: 0,
      whatsapp: "https://wa.me/c/5214421681339",
      items: [
        {
          src: "/inicio.jpg",
          title: "CIMA 99 Sentimientos hechos café",
          p: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción",
        },
        {
          src: "/banner-3.png",
          title: "CIMA 99 Sentimientos hechos café",
          p: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción",
          button: "CONTACTANOS",
        },
        {
          src: "/banner-1.jpg",
          title: "CIMA 99 Sentimientos hechos café",
          p: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción",
        },
      ],
    };
  },
  watch: {
    model(newVal, oldVal) {
      this.selected = newVal.toString();
    },
    selected(newVal, oldVal) {
      this.model = parseInt(newVal);
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
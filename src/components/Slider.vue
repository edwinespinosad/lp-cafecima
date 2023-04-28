<template>
  <!-- <div class="d-flex justify-space-around align-center py-4">
    <v-btn
      variant="text"
      icon="mdi-minus"
      @click="model = Math.max(model - 1, 0)"
      >-</v-btn
    >
    {{ model }}
    <v-btn
      variant="text"
      icon="mdi-plus"
      @click="model = Math.min(model + 1, 2)"
      >+</v-btn
    >
  </div> -->

  <v-carousel
    v-model="model"
    class="carousel"
    cycle
    interval="3000"
    height="600"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
      <div
        style="height: 100%"
        class="d-flex justify-content-center flex-column text-white container"
      >
        <h2 class="fw-bold w-50">{{ item.title }}</h2>
        <span class="line-under-text my-2"></span>
        <div class="w-50">
          <p>{{ item.p }}</p>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script >
export default {
  data() {
    return {
      model: 0,
      model2: "0",
      items: [
        {
          src: "src/assets/image/inicio.jpg",
          title: "CIMA 99 Sentimientos hechos café",
          p: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción",
        },
        {
          src: "src/assets/image/banner-2.jpg",
          title: "CIMA 99 Sentimientos hechos café",
          p: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción",
          button: "CONTACTANOS",
        },
        {
          src: "src/assets/image/banner 1.jpg",
          title: "CIMA 99 Sentimientos hechos café",
          p: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción",
        },
      ],
    };
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
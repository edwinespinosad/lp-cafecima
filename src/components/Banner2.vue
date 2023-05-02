<template>
  <div
    id="banner-2"
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
        background-position: center bottom 30%;
        background-size: cover;
        filter: brightness(50%);
      "
      :style="backgroundImage"
    ></div>
    <div
      style="position: relative; z-index: 1; height: 400px"
      class="container-grid container py-5"
    >
      <div></div>
      <div>
        <h2 class="fw-bold text-end">
          Café mexicano, sentimientos <br />
          en cada trago
        </h2>
        <span class="line-under-text my-2 text-end float-end"></span>
      </div>
      <div></div>
      <div class="text-end">
        <p>
          Quien diría que un solo sorbo del aromático fruto tostado puede
          generar tantas emociones. Su accidental descubrimiento en la Etiopia
          del s.IX d.C., nos ha dejado a todos los amantes del café, siguiéndole
          en todas sus formas, respirando su profundo aroma y despertando con
          gusto por las mañanas.
        </p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      banner: "banner-2.jpg",
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
  width: 10%;
  height: 5px;
  display: block;
  background-color: #bb916d;
}

</style>
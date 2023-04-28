<script setup>
import Navbar from "./components/Navbar.vue";
import Slider from "./components/Slider.vue";
import Slider2 from "./components/Sliuder2.vue";
import Banner from "./components/Banner.vue";
import Banner2 from "./components/Banner2.vue";
import SliderBag from "./components/SliderBag.vue";
import Img from "./components/Img.vue";
import videoCafeSrc from "./components/VideoCafe.vue";
import FooterPage from "./components/FooterPage.vue";
</script>

<template>
  <v-app>
    <Navbar></Navbar>
    <Slider2 />
    <Slider />
    <SliderBag />
    <Banner />
    <videoCafeSrc />
    <Banner2 />
    <FooterPage />
  </v-app>
</template>
    
<script>
export default {
  data() {
    return {
      radios: 'radio-1',
    };
  },
};
</script>

<style scoped>
</style>
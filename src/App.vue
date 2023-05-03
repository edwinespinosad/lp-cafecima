<script setup>
import Navbar from "./components/Navbar.vue";
import Slider from "./components/Slider.vue";
import Banner from "./components/Banner.vue";
import Banner2 from "./components/Banner2.vue";
import SliderBag from "./components/SliderBag.vue";
import SliderBag2 from "./components/Sliderbag2.vue";
import Img from "./components/Img.vue";
import videoCafeSrc from "./components/VideoCafe.vue";
import FooterPage from "./components/FooterPage.vue";
import Contact from "./components/Contact.vue";
import ButtonWA from "./components/ButtonWA.vue";
</script>

<template>
  <v-app class="bg-app m-0 p-0">
    <Navbar></Navbar>
    <Slider :wa="whatsapp" />
    <SliderBag />
    <SliderBag2 />
    <Banner />
    <videoCafeSrc />
    <Banner2 :wa="whatsapp"/>
    <Contact></Contact>
    <FooterPage />
    <ButtonWA></ButtonWA>
  </v-app>
</template>
    
<script>
export default {
  data() {
    return {
      whatsapp: "https://wa.me/c/5214421681339",
    };
  },
};
</script>

<style scoped>
</style>
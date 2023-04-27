<script setup>
import Navbar from './components/Navbar.vue';
//import Slider from './components/Slider.vue';
import Slider2 from './components/Sliuder2.vue';
import 'bootstrap/dist/css/bootstrap.css'
import Banner from "./components/Banner.vue";
import Banner2 from "./components/Banner2.vue";
</script>

<template>
     <v-app>
        <Navbar></Navbar>
        
        <Slider2/>
        <OurProducts></OurProducts>
        <Banner/>
        <Banner2/>
    </v-app>
</template>
    

<style scoped>
</style>
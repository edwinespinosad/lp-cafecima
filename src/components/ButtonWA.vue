<template>
  <div class="btn-wa" @mouseover="hover = true" @mouseout="hover = false">
    <a :href="whatsapp" target="_blank" class="text-decoration-none text-white d-flex justify-content-center align-items-center">
      <v-icon size="x-large" :class="{ 'd-none': !hover }">mdi-whatsapp</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whatsapp: "https://wa.me/c/5214421681339",
      hover: false,
    };
  },
};
</script>

<style scoped>
.btn-wa a {
  width: 70px;
  height: 70px;
}
.btn-wa {
  position: fixed;
  bottom: 10%;
  right: 0;
  background-color: #74431a;
  color: white;
  border: none;
  border-radius: 50% 0 0 50%;
  width: 70px;
  height: 70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.2s;
}

.btn-wa:hover {
  width: 140px;
  border-radius: 50px 0 0 50px;
}

.btn-wa a:hover {
  width: 140px;
  border-radius: 50px 0 0 50px;
}
</style>
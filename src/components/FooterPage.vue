<template >
  <div
    class="position-relative bgFooter text-white d-inline-flex justify-content-center align-items-center p-4"
  >
    {{ new Date().getFullYear() }} <span class="m-1">&#169;</span> CIMA
    <Span class="position-relative m-1 top-3px">99</Span> Todos los derechos
    reservados
  </div>
</template>
<script>
</script>
<style scoped>
.bgFooter {
  background: #0c0b0b;
}
.top-3px{
  top: 3px;
}
</style>
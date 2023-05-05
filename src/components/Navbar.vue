<template>
  <nav
    class="navbar navbar-expand-lg background-primary"
  >
  <!-- <nav
    class="navbar navbar-expand-lg background-primary"
    :class="{ 'fixed-top': !isNavHidden, 'navbar-hidden': isNavHidden }"
  > -->
    <div class="container">
      <a class="navbar-brand text-white" href="#">
        <v-img :width="100" aspect-ratio="1/1" cover src="logo.png"></v-img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-5">
          <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="#"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#our-products"
              >Nuestros Productos</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavHidden: false,
      lastScrollTop: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const st = window.scrollY;
      if (st > this.lastScrollTop) {
        this.isNavHidden = true;
      } else {
        this.isNavHidden = false;
      }
      this.lastScrollTop = st;
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1.5rem;
}
</style>
<template>
    <div id="carouselExampleCaptions" class="carousel slide colorSlider">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner d-flex align-items-end ">
        <div class="carousel-item active  text-white">
            <img src="../assets/image/banner-2.jpg" class="card-img w-100" alt="...">

            <div class="card-img-overlay" style="width: 619px;">
            
                <div class="card-body p-5">
                    <h2 class="card-title p-0 fw-bold">CIMA 99 Sentimientos hechos café</h2>
                    <div class="boxColor"></div>
                    <p class="card-text">Tenemos por objetivo dignificar a los productores, por lo que cada cosecha es seleccionada con la base en altos parámetros de expertos que toman en cuanta la tierra y la altura, entorno que se absorven las raices de la planta, la cosecha manual, el lavado y secado cuidadoso.  </p>
                    <button class="bootonBorder border border-primary border-2 rounded-4 p-2">
                        <v-icon>
                            mdi-whatsapp
                        </v-icon>
                        CONTACTANOS
                    </button>
                </div>
            </div>
              
        </div>
        <div class="carousel-item px-1 text-white " >
            <img src="../assets/image/contacto.jpg" class="card-img" alt="...">
            <div class="card-img-overlay" style="width: 619px;">
            
            <div class="card-body p-5">
                <h2 class="card-title p-0">CIMA 99 Sentimientos hechos café</h2>
                <div class="boxColor"></div>
                <p class="card-text">Tenemos por objetivo dignificar a los productores, por lo que cada cosecha es seleccionada con la base en altos parámetros de expertos que toman en cuanta la tierra y la altura, entorno que se absorven las raices de la planta, la cosecha manual, el lavado y secado cuidadoso.  </p>
                <button class="bootonBorder border border-primary border-2 rounded-4 p-2">
                        <v-icon>
                            mdi-whatsapp
                        </v-icon>
                    CONTACTANOS
                </button>
            </div>
        </div>
            
        </div>
        <div class="carousel-item text-white">
            <img src="../assets/image/inicio.jpg" class="d-block w-100" alt="...">
            <div class="card-img-overlay" style="width: 619px;">
            
            <div class="card-body p-5">
                <h2 class="card-title p-0">CIMA 99 Sentimientos hechos café</h2>
                <div class="boxColor"></div>
                <p class="card-text">Tenemos por objetivo dignificar a los productores, por lo que cada cosecha es seleccionada con la base en altos parámetros de expertos que toman en cuanta la tierra y la altura, entorno que se absorven las raices de la planta, la cosecha manual, el lavado y secado cuidadoso.  </p>
                <button class="bootonBorder border border-primary border-2 rounded-4 p-2">
                        <v-icon>
                            mdi-whatsapp
                        </v-icon>
                    CONTACTANOS
                </button>
            </div>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</template>
<script>

</script>
<style scoped >
    .bootonBorder{
        border:3px solid #754319 !important;
    }
    .colorSlider{
    background:#0C0B0B;
  }
  .backgroundImg{
    background-image:url(../assets/image/banner-2.jpg)
  }
  .boxColor{
    width: 97px;
    height: 7px;
    background: #754319;
  }
</style>
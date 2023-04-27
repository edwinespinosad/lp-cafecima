<template>
    <div id="carouselExampleCaptions" class="carousel slide bg-primary">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active d-flex align-items-center justify-content-center">
            <img src="../assets/image/banner 1.jpg" class="d-block w-100 " alt="...">
            <div class="carousel-caption d-none d-md-block ">
                <h2 class=""> CIMA 99 Sentimientos hechos café</h2>
                <p>Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción</p>
            </div>
        </div>
        <div class="carousel-item px-1 text-secondary d-flex align-items-center justify-content-center" >
            <div class="row">
                <img src="../assets/image/banner-2.jpg" class="col-5 d-block w-100" alt="...">
            </div>
            <div class="row">
                <div class="col-4 padding-left-0 carousel-caption d-none d-md-block">
                    <h2 class="fs-1 fw-bold">CIMA 99 Sentimientos hechos café</h2>
                    <p class="text-start">Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción</p>
                    <button class="bootonBorder border border-primary border-2 rounded-4 p-2">CONTACTANOS</button>
                </div>
            </div>
            
        </div>
        <div class="carousel-item">
            <img src="../assets/image/inicio.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>CIMA 99 Sentimientos hechos café</h5>
                <p>Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales, que son cuidadosamente analizados, y que cuentan con tres elementos en cómun: amor por el cáfe y cuidado en su producción</p>
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
        border:1px solid #754319 !important;
    }
</style>
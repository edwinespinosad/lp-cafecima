<template>
  <div id="our-products" class="my-5 py-5">
    <v-carousel
      v-model="model"
      class="h-auto"
      hide-delimiter-background
      hide-delimiters
    >
      <h1 class="py-5 my-5 text-white text-center">Nuestros productos</h1>
      <template v-slot:prev="{ props }">
        <v-btn
          variant="plain"
          class="text-brown"
          @click="props.onClick"
          size="50"
        >
          <span class="fs-100">&#8249;</span>
        </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          variant="plain"
          class="text-brown"
          @click="props.onClick"
          size="50"
        >
          <span class="fs-100">&#8250;</span>
        </v-btn>
      </template>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-row>
          <v-col cols="10" sm="10" md="4" lg="4" offset="1">
            <v-card color="#000000" theme="dark" :height="300">
              <v-row>
                <v-col cols="6" class="bg-products">
                  <div class="d-grid center-grid h-300">
                    <v-img :src="item.src1" class="w-img" cover />
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex flex-column justify-content-center">
                    <h3>{{ item.title1 }}</h3>
                    <p>{{ item.description1 }}</p>
                    <p>{{ item.weight1 }}</p>
                    <p>{{ item.price1 }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="10" sm="10" md="4" lg="4" offset="1">
            <v-card color="#000000" theme="dark" :height="300">
              <v-row>
                <v-col cols="6" class="bg-products">
                  <div class="d-grid center-grid h-300">
                    <v-img :src="item.src2" class="w-img" cover />
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex flex-column justify-content-center">
                    <h3>{{ item.title2 }}</h3>
                    <p>{{ item.description2 }}</p>
                    <p>{{ item.weight2 }}</p>
                    <p>{{ item.price2 }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="10" sm="10" md="4" lg="4" offset="1">
            <v-card color="#000000" theme="dark" :height="300">
              <v-row>
                <v-col cols="6" class="bg-products">
                  <div class="d-grid center-grid h-300">
                    <v-img :src="item.src3" class="w-img" cover />
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex flex-column justify-content-center">
                    <h3>{{ item.title3 }}</h3>
                    <p>{{ item.description3 }}</p>
                    <p>{{ item.weight3 }}</p>
                    <p>{{ item.price3 }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="10" sm="10" md="4" lg="4" offset="1">
            <v-card color="#000000" theme="dark" :height="300">
              <v-row>
                <v-col cols="6" class="bg-products">
                  <div class="d-grid center-grid h-300">
                    <v-img :src="item.src4" class="w-img" />
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex flex-column justify-content-center">
                    <h3>{{ item.title4 }}</h3>
                    <p>{{ item.description4 }}</p>
                    <p>{{ item.weight4 }}</p>
                    <p>{{ item.price4 }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-sheet color="#333333" height="100%">
          <v-row>
            <v-col cols="4" offset="1" md="6">
              <v-card color="#0C0B0B" theme="dark">
                <v-card-text>
                  <v-row>
                    <v-col cols="6" class="bg-products">
                      <v-img :src="item.src1" max-height="300"> </v-img>
                    </v-col>
                    <v-col cols="6">
                      <h3>{{ item.title1 }}</h3>
                      <p>{{ item.describe1 }}</p>
                      <p>{{ item.weight1 }}</p>
                      <p>{{ item.price1 }}</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4" offset="1" md="6">
              <v-card color="#0C0B0B" theme="dark">
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <v-img :src="item.src2" max-height="300"> </v-img>
                    </v-col>
                    <v-col cols="6">
                      <h3>{{ item.title2 }}</h3>
                      <p>{{ item.describe2 }}</p>
                      <p>{{ item.weight2 }}</p>
                      <p>{{ item.price2 }}</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="m-0">
            <v-col cols="12" md="6">
              <v-card color="#0C0B0B" theme="dark">
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <v-img :src="item.src1" max-height="300"> </v-img>
                    </v-col>
                    <v-col cols="6">
                      <h3>{{ item.title1 }}</h3>
                      <p>{{ item.describe3 }}</p>
                      <p>{{ item.weight3 }}</p>
                      <p>{{ item.price3 }}</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card color="#0C0B0B" theme="dark">
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <v-img :src="item.src2" max-height="300"> </v-img>
                    </v-col>
                    <v-col cols="6">
                      <h3>{{ item.title2 }}</h3>
                      <p>{{ item.describe4 }}</p>
                      <p>{{ item.weight4 }}</p>
                      <p>{{ item.price4 }}</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
    <v-radio-group
      inline
      v-model="selected"
      class="d-flex justify-content-center"
      unselected-color="#BB916D"
    >
      <v-radio value="0" color="#BB916D"></v-radio>
      <v-radio value="1" color="#BB916D"></v-radio>
    </v-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 0,
      model: 0,
      model2: "0",
      whatsapp: "https://wa.me/c/5214421681339",
      items: [
        {
          src1: "/bolsas-cafe.png",
          src2: "/bolsas-cafe.png",
          src3: "/bolsas-cafe.png",
          src4: "/bolsas-cafe.png",

          title1: "Café de especialidad",
          title2: "Café regular",
          title3: "Café regular",
          title4: "Café regular",

          description1:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          description2:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          description3:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          description4:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",

          weight1: "1.2 kg",
          weight2: "1.2 kg",
          weight3: "1.2 kg",
          weight4: "1.2 kg",

          price1: "$100.00",
          price2: "$100.00",
          price3: "$100.00",
          price4: "$100.00",
        },
        {
          src1: "/bolsas-cafe.png",
          src2: "/bolsas-cafe.png",
          src3: "/bolsas-cafe.png",
          src4: "/bolsas-cafe.png",

          title1: "Café de especialidad",
          title2: "Café regular",
          title3: "Café regular",
          title4: "Café regular",

          description1:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          description2:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          description3:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          description4:
            "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",

          weight1: "1.2kg",
          weight2: "1.2kg",
          weight3: "1.2kg",
          weight4: "1.2kg",

          price1: "$100.00",
          price2: "$100.00",
          price3: "$100.00",
          price4: "$100.00",
        },
      ],
    };
  },
  watch: {
    model(newVal, oldVal) {
      this.model2 = newVal;
      this.selected = newVal.toString();
    },
    selected(newVal, oldVal) {
      this.model = parseInt(newVal);
    },
  },
};
</script>
<style>
</style>
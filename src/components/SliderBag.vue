<template>
  <div id="our-products" class="my-5 py-5">
    <h1 class="py-5 my-5 text-white text-center">Nuestros productos</h1>
    <div class="products-phone-view text-white">

      <v-carousel
        v-model="modelPhoneView"
        class="h-auto"
        hide-delimiter-background
        hide-delimiters
      >
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
        <v-carousel-item v-for="(item, i) in itemsPhoneView" :key="i" class="">
          <v-row>
            <v-col cols="10" offset="1">
              <v-card color="#000000" theme="dark" :height="300">
                <v-row>
                  <v-col cols="6" class="bg-products">
                    <div class="d-grid center-grid h-300">
                      <v-img :src="item.src" class="w-img" cover />
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="d-flex flex-column justify-content-center">
                      <h3>{{ item.title }}</h3>
                      <p>{{ item.description }}</p>
                      <p>{{ item.weight }}</p>
                      <p>{{ item.price }}</p>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <v-radio-group
        inline
        v-model="selectedPhoneView"
        class="d-flex justify-content-center"
      >
        <v-radio
          :value="(index - 1).toString()"
          color="#BB916D"
          v-for="index in itemsPhoneViewLength"
          :key="index"
        ></v-radio>
      </v-radio-group>
    </div>

    <div class="products-full-view">
      <v-carousel
        v-model="modelFullView"
        class="h-auto"
        hide-delimiter-background
        hide-delimiters
      >
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
        <v-carousel-item v-for="(item, i) in itemsFullView" :key="i" class="">
          <v-row>
            <v-col cols="4" offset="2">
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

            <v-col cols="4" offset="">
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

            <v-col cols="4" offset="2">
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

            <v-col cols="4" offset="">
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
        </v-carousel-item>
      </v-carousel>
      <v-radio-group
        inline
        v-model="selectedFullView"
        class="d-flex justify-content-center"
      >
        <v-radio
          :value="(index - 1).toString()"
          color="#BB916D"
          v-for="index in itemsFullViewLength"
          :key="index"
        ></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedPhoneView: "0",
      modelPhoneView: 0,
      itemsPhoneViewLength: 0,
      itemsPhoneView: [
        {
          src: "/bolsas-cafe.png",
          title: "Café Regular",
          description: "Lorem ipsum dolor sit",
          weight: "1.2kg",
          price: "$100.00 MXN",
        },
        {
          src: "/bolsas-cafe2.png",
          title: "Café Regular",
          description: "Lorem ipsum dolor sit",
          weight: "1.2kg",
          price: "$120.00 MXN",
        },
        {
          src: "/bolsas-cafe2.png",
          title: "Café Regular",
          description: "Lorem ipsum dolor sit",
          weight: "1.2kg",
          price: "$130.00 MXN",
        },
        {
          src: "/bolsas-cafe.png",
          title: "Café Regular",
          description: "Lorem ipsum dolor sit",
          weight: "1.2kg",
          price: "$140.00 MXN",
        },
      ],
      selectedFullView: "0",
      modelFullView: 0,
      itemsFullViewLength: 0,
      itemsFullView: [
        {
          src1: "/bolsas-cafe.png",
          src2: "/bolsas-cafe.png",
          src3: "/bolsas-cafe2.png",
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

          price1: "$100.00 MXN",
          price2: "$100.00 MXN",
          price3: "$100.00 MXN",
          price4: "$100.00 MXN",
        },
        {
          src1: "/bolsas-cafe2.png",
          src2: "/bolsas-cafe.png",
          src3: "/bolsas-cafe2.png",
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

          price1: "$100.00 MXN",
          price2: "$100.00 MXN",
          price3: "$100.00 MXN",
          price4: "$100.00 MXN",
        },
      ],
    };
  },
  mounted() {
    this.itemsFullViewLength = this.itemsFullView.length;
    this.itemsPhoneViewLength = this.itemsPhoneView.length;
    console.log(this.itemsFullViewLength);
  },
  watch: {
    modelFullView(newVal, oldVal) {
      this.selectedFullView = newVal.toString();
    },
    selectedFullView(newVal, oldVal) {
      this.modelFullView = parseInt(newVal);
      console.log(newVal);
      console.log(this.modelFullView);
      console.log(typeof this.modelFullView);
    },
    modelPhoneView(newVal, oldVal) {
      this.selectedPhoneView = newVal.toString();
    },
    selectedPhoneView(newVal, oldVal) {
      this.modelPhoneView = parseInt(newVal);
      console.log(newVal);
      console.log(this.modelPhoneView);
      console.log(typeof this.modelPhoneView);
    },
  },
};
</script>
<style>
</style>
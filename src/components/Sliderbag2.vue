<template lang="">
    <div>
        <v-carousel
      v-model="model"
      
      cycle
      interval="3000"
      class="h-auto"
      hide-delimiter-background
      hide-delimiters
      color="#1A1A1A"

    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        
      >
      <v-sheet 
      color="#1A1A1A"
      height="100%"
      
      > 
        <v-row class="m-0">
            <v-col cols="12"
            md="6"
            >
                <v-card
                color="#1A1A1A"
                theme="dark"
                
                >
                <v-card-text>
                    <v-row>
                       <v-col 
                       cols="6"
                       >
                        <v-img
                        :src="item.src1"
                        max-height='300'
                        >
                        </v-img>
                       </v-col>
                       <v-col
                       cols="6"
                       >
                            <h3>{{item.title1}}</h3>
                            <p >{{item.describe1}}</p>
                            <p>{{item.weight1}}</p>
                            <p>{{item.price1}}</p>

                       </v-col>
                    </v-row>
                </v-card-text>
                </v-card>  
            </v-col>
            <v-col cols="12"
            md="6"
            >
                <v-card
                color="#1A1A1A"
                theme="dark"  
                >
                <v-card-text>
                    <v-row>
                       <v-col cols="6">
                        <v-img
                        :src="item.src2"
                        max-height='300'
                        >
                        </v-img>
                       </v-col>
                       <v-col cols="6">
                            <h3>{{item.title2}}</h3>
                            <p>{{item.describe2}}</p>
                            <p>{{item.weight2}}</p>
                            <p>{{item.price2}}</p>
                       </v-col>
                    </v-row>
                </v-card-text>
                </v-card>  
            </v-col>

        </v-row> 
        <v-row class="m-0">
            <v-col cols="12"
            md="6"
            >
                <v-card
                color="#1A1A1A"
                theme="dark"
                >
                <v-card-text>
                    <v-row>
                       <v-col cols="6">
                        <v-img
                        :src="item.src1"
                        max-height='300'
                        >
                        </v-img>
                       </v-col>
                       <v-col cols="6">
                            <h3>{{item.title1}}</h3>
                            <p>{{item.describe3}}</p>
                            <p>{{item.weight3}}</p>
                            <p>{{item.price3}}</p>
                       </v-col>
                    </v-row>
                </v-card-text>
                </v-card>  
            </v-col>      
            <v-col cols="12"
            md="6"
            >
                <v-card
                color="#1A1A1A"
                theme="dark"
                >
                <v-card-text>
                    <v-row >
                       <v-col cols="6">
                        <v-img
                        :src="item.src2"
                        max-height='300'
                        >
                        </v-img>
                       </v-col>
                       <v-col cols="6">
                            <h3>{{item.title2}}</h3>
                            <p>{{item.describe4}}</p>
                            <p>{{item.weight4}}</p>
                            <p>{{item.price4}}</p>
                       </v-col>
                    </v-row>
                </v-card-text> 
                </v-card>  
            </v-col>
        </v-row>         
          
        
    </v-sheet>  
      </v-carousel-item>

      <v-radio-group
        inline
        v-model="selected"
        class="position-absolute bottom-0 end-0 pr-5"
        style="z-index: 1"
      >
        <v-radio value="0" color="#BB916D"></v-radio>
        <v-radio value="1" color="#BB916D"></v-radio>
        <v-radio value="2" color="#BB916D"></v-radio>
      </v-radio-group>
    </v-carousel>
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
          src1: "src/assets/image/bolsas-café.png",
          src2: "src/assets/image/bolsas-café.png",
          title1: "Café de especialidad",
          title2: "Café de regular",
          describe1: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          describe2: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          describe3: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          describe4: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          weight1:"1.2kg",
          weight2:"1.2kg",
          weight3:"1.2kg",
          weight4:"1.2kg",
          price1:"$100.00",
          price2:"$100.00",
          price3:"$100.00",
          price4:"$100.00"
        },
        {
          src1: "src/assets/image/bolsas-café.png",
          src2: "src/assets/image/bolsas-café.png",
          title1: "Café de especialidad",
          title2: "Café de regular",
          describe1: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          describe2: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          describe3: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          describe4: "Somos una empresa boutique enfocada en selección de pequeños lotes de cafetales",
          weight1:"1.2kg",
          weight2:"1.2kg",
          weight3:"1.2kg",
          weight4:"1.2kg",
          price1:"$100.00",
          price2:"$100.00",
          price3:"$100.00",
          price4:"$100.00"
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
<style lang="">
    
</style>
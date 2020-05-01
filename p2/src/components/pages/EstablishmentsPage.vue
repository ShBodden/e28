<!-- src/components/ShowEstablishments.vue -->
<template>
  <div id="establishments">
    <h2>Establishments</h2>
    <show-establishment v-for="establishment in establishments" :key="establishment.id" :establishment="establishment"></show-establishment>
  </div>
</template>


<script>
import ShowEstablishment from "@/components/ShowEstablishment.vue";
import * as app from '@/common/app.js'


export default {
  name: "",

  components: {
    'show-establishment': ShowEstablishment
  },

  data: function() {
    return {
        establishments: []
    };

    
  },
  mounted: 
  
  
  function(){
      app.api.all('establishments').then(response => {
        this.establishments = response;
      })
    },

  props: []
};
</script>
<style></style>
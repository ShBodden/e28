
<template>
  <div id="establishment-page">
    <h1>Under Construction</h1>
    
  </div>
</template>

<script>

import * as app from '@/common/app.js'
export default {
  name: "establishmentPage",

  components: {
  
  },
  
 
 

 data: function() {
    return {
     

    };

    
    
  },

mounted:

function(){
    app.api.get('establishments', 'slug', 'legal-sea-foods')
    }


};
</script>
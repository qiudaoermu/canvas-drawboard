<template>
  <div>
    <drawboard :url="url" @updateData="updateData" :labelDataOrigin=labelDataOrigin></drawboard>
  </div>
</template>

<script>
export default {
  name:'example',
  data(){
    return {
      url:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      labelDataOrigin:[ 
        { 
          "type":"rectangle",
          "points":
            [
              {"x":320,"y":168},
              {"x":434,"y":168},
              {"x":434,"y":355},
              {"x":320,"y":355}
            ]
        }
       ],
      loadingData:false
    }
  },
  methods:{
    updateData(data) {
      console.log(JSON.stringify(data));
    }
  }
}
</script>
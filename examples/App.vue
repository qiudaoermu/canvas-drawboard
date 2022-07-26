<template>
  <div>
    <drawboard :url="url" @updateData="updateData"></drawboard>
  </div>
</template>

<script>
export default {
  name:'example',
  data(){
    return {
      url:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      labelDataOrigin:[],
      loadingData:false
    }
  },
  methods:{
    updateData(data) {
      console.log(data);
    }
  }
}
</script>
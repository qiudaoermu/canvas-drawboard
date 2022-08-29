<template>
  <div>
    <drawboard
      :url="url"
      @updateData="updateData"
      style="width:350px;height:400px"
      :labelDataOrigin="labelDataOrigin"
    ></drawboard>
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      labelDataOrigin: [
        {
          type: "point",
          points: [{ x: 320, y: 168 }],
        },
        {
          type: "point",
          points: [{ x: 390, y: 368 }],
        },
      ],
      loadingData: false,
    };
  },
  methods: {
    updateData(data) {
      // console.log(JSON.stringify(data));
    },
  },
};
</script>

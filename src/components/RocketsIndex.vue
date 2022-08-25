<template>
<div @click="rocketInfo">RocketsInfo</div>
  <div id="container_grid">
  <div class="container">
    <img :src="this.rockets.rocket1" class="rocket_image" alt="rocket">
    <p class="text_img">{{this.info.name1}}</p>
  </div>
  <div class="container">
    <img :src="this.rockets.rocket2" class="rocket_image" alt="rocket">
    <p class="text_img">{{this.info.name2}}</p>
  </div>
    <div class="container">
      <img :src="this.rockets.rocket3" class="rocket_image" alt="rocket">
      <p class="text_img">{{this.info.name3}}</p>
    </div>
    <div class="container">
      <img :src="this.rockets.rocket4" class="rocket_image" alt="rocket">
      <p class="text_img">{{this.info.name4}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name1: '',
        name2: '',
        name3: '',
        name4: ''
      },
      rockets:{
       rocket1: '',
       rocket2: '',
       rocket3: '',
       rocket4: ''
      },
    }
  },
  methods: {
    rocketInfo() {
      fetch(`https://api.spacexdata.com/v4/rockets/`)
          .then(response => response.json())
          .then(data => {
            this.info.name1 = data[0].name;
            this.info.name2 = data[1].name;
            this.info.name3 = data[2].name;
            this.info.name4 = data[3].name;
            this.rockets.rocket1 = data[0].flickr_images[0];
            this.rockets.rocket2 = data[1].flickr_images[0];
            this.rockets.rocket3 = data[2].flickr_images[0];
            this.rockets.rocket4 = data[3].flickr_images[0];
            console.warn(data);
            console.warn(this.info);
          });
    },
  }
}
</script>

<style scoped>
#container_grid{
  display: grid;
  grid-template-columns: repeat(2, 30%);
  grid-template-rows: repeat(2, 50%);
  justify-content: center;
}
.container {
  position: relative;
  text-align: center;
  color: navajowhite;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
}
.rocket_image{
  width: 100%;
  height: 100%;
}
.text_img{
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
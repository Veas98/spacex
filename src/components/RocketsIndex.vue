<template>
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
<router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      info: {
        name1: '',
        name2: '',
        name3: '',
        name4: ''
      },
      rockets: {
        rocket1: '',
        rocket2: '',
        rocket3: '',
        rocket4: ''
      },
    }
  },
  methods: {
    async rocketInfo() {
      await fetch(`https://api.spacexdata.com/v4/rockets/`)
          .then(response => response.json())
          .then(data => {
            this.items = data;
            console.warn(data);
            console.warn(this.info);
          });
    },
    itemsSort() {
      this.info.name1 = this.items[0].name;
      this.info.name2 = this.items[1].name;
      this.info.name3 = this.items[2].name;
      this.info.name4 = this.items[3].name;
      this.rockets.rocket1 = this.items[0].flickr_images[0];
      this.rockets.rocket2 = this.items[1].flickr_images[0];
      this.rockets.rocket3 = this.items[2].flickr_images[0];
      this.rockets.rocket4 = this.items[3].flickr_images[0];
    },
  },
  async mounted() {
    await this.rocketInfo();
    this.itemsSort();
  },
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
.container:hover{
  transform: scale(1.1);
  transition: transform .4s;
}
</style>
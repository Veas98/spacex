<template>
  <div id="container_grid" v-if="showAll">
  <div class="container">
     <img :src="this.rockets.rocket1" class="rocket_image" alt="rocket" @click="handleClick(0)">
    <p class="text_img">{{this.info.name1}}</p>
  </div>
  <div class="container">
    <img :src="this.rockets.rocket2" class="rocket_image" alt="rocket" @click="handleClick(1)">
    <p class="text_img">{{this.info.name2}}</p>
  </div>
    <div class="container">
      <img :src="this.rockets.rocket3" class="rocket_image" alt="rocket" @click="handleClick(2)">
      <p class="text_img">{{this.info.name3}}</p>
    </div>
    <div class="container">
      <img :src="this.rockets.rocket4" class="rocket_image" alt="rocket" @click="handleClick(3)">
      <p class="text_img">{{this.info.name4}}</p>
    </div>
  </div>

  <Rocket_Falcon1 :value='items[this.choice]' v-if="!showAll"></Rocket_Falcon1>
</template>

<script>
import Rocket_Falcon1 from "@/components/Rocket_Falcon1";
export default {
  data() {
    return {
      showAll: true,
      choice: 0,
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
    handleClick(x){
      this.showAll = ! this.showAll;
      this.choice = x;
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
  components:{
    Rocket_Falcon1,
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
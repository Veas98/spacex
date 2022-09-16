<template>
<div id="container">
  <div class="go-back"><i class="bi-arrow-left" @click="handleShowAll"></i> </div>
  <div class="grid">
    <img :src="this.info.img" class="rocket_image" alt="rocket">
    <div class="company"> {{info.company}}</div>
    <div class="name"> {{ displayName }}</div>
    <div class="information">
      <p>Cost per launch: {{info.cost_p}}$ </p>
      <p>Mass: {{info.mass}}kg</p>
      <p>Height: {{info.height}}m</p>
    </div>
    <div class="description"> {{info.description}}</div>
    <div class="activity"> <p>{{info.active_text}}</p></div>
    <div class="country"> Country: {{info.country}}</div>

  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      items: [],
      info: {
        cost_p: 0,
        company: '',
        description: '',
        mass: 0,
        country: '',
        height: 0,
        img: '',
        active: '',
        active_text: '',
      }
    }
  },
  props:{
    value:{
      type: Object,
      required: true,
    },
  },
  computed:{
    displayName(){
      return `${this.value.name}`
    },
  },
  methods:{
    handleComposition(){
      this.info.cost_p = this.value.cost_per_launch;
      this.info.company = this.value.company;
      this.info.description = this.value.description;
      this.info.mass = this.value.mass.kg;
      this.info.country = this.value.country;
      this.info.height = this.value.height.meters;
      this.info.img = this.value.flickr_images[0];
      this.info.active = this.value.active;
      console.log(this.info);
    },
    handleActivity(){
      if (this.info.active === true){
        this.info.active_text = 'This rocket is actually in space.';
      }
      else{
        this.info.active_text = 'This rocket is actually on earth waiting for launch.';
      }
    },
    handleShowAll(){
      this.$emit('showAll', true);
    }
  },
  mounted() {
   this.items = this.value;
   console.log(this.items);
   this.handleComposition();
   this.handleActivity();
  }
}
</script>

<style scoped>
#container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100vh;
  flex-direction: column;
  border: solid 1px wheat;
  backdrop-filter: blur(32px);
  color: #dcc7a1 !important;
}
.grid{
  display: grid;
  grid-template-columns: 60vh 40vh;
  justify-items: center;
  margin: 10px;
  padding: 10px;
}
.rocket_image{
  width: 100%;
  height: 100%;
  margin: 0 0 10px 10px;
}
.company, .name{
font-size: 36px;
}
.description{
  margin-left: 15px;
  font-size: 18px;
}
.country{
  margin-top: 10px;
}
p{
  margin: 0;
}
.information{
 font-size: 18px;
  margin-bottom: 10px;
}
.go-back{
 position: absolute;
  top: 5px;
  left: 15px;
  font-size: 20px;
  cursor: pointer;
}
.activity{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 18px;
}
</style>
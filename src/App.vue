<template>
  <div @click="latestStart">Latest Start</div>
  <router-view></router-view>
  <drop-down></drop-down>
</template>

<script>
import DropDown from "./components/DropDown";
export default {
  data(){
    return{
    }
  },
  methods: {
    latestStart(){
      fetch("https://api.spacexdata.com/v5/launches/latest")
          .then(response => response.json())
          .then(data => {
            console.warn(data);
          });
    },
  },
  components:{
    DropDown,
  }
}
</script>

<style>
body, html{
  background-image: url("/img/background.jpg");
  background-repeat:no-repeat;
  background-size:100%;
  background-position:center;
  background-attachment: fixed;
  color: wheat;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
}

</style>

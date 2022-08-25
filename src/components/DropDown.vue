<template>
<div class="dropdown" @click="btnDrop">
  <i class="bi-list"></i>
</div>
  <div id="drop-menu">
    <div @click="handleHome">Home <i class="bi-house"></i> </div>
    <div @click="handleRockets">Rockets <i class="bi-screwdriver"></i> </div>
    <div> <a href="https://github.com/Veas98" target="_blank">GitHub <i class="bi-github"></i></a> </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      btnDropClick: false,
    }
  },
  methods:{
    btnDrop(){
      this.btnDropClick = !this.btnDropClick;
      if (this.btnDropClick === true) document.getElementById("drop-menu").style.display = 'inline-block';
      else document.getElementById("drop-menu").style.display = 'none';
    },
    handleHome(){
      this.$router.push({name:'Home'});
    },
      handleRockets(){
        this.$router.push({name:'Rockets'});
      },
    handleGitHub(){

    }
  }
}
</script>

<style scoped>
.dropdown{
  position: absolute;
  top: 36px;
  right: 36px;
  border-radius: 50%;
  border: 1px solid wheat;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}
.bi-list{
  font-size: 24px;
}
.dropdown:hover{
  background-color: wheat !important;
  color: black;
}
#drop-menu{
  display: none;
  position: absolute;
  top: 50px;
  right: 100px;
  font-size: 24px;
  box-sizing: border-box;
  width: 110px;
  height: 110px;
  background-color: wheat;
  color: black;
  text-align: center;
  border: 1px solid black;
}
a{
  color: black;
  text-decoration: none;
}
</style>
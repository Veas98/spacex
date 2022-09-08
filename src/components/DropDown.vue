<template>
<div
    :class="{'dropdown-hidden' : error,
    'dropdown-open': btnDropClick}"
    @click="btnDrop">
  <i class="bi-list"></i>

    <div @click="handleHome"
         :class="{'drop-menu': btnDropClick,
         'drop-menu-hide': error}">
      Home <i class="bi-house"></i> </div>

    <div @click="handleRockets(1)"
         :class="{'drop-menu': btnDropClick,
         'drop-menu-hide': error}">
      Rockets <i class="bi-screwdriver"></i> </div>

    <div> <a href="https://github.com/Veas98" target="_blank"
             :class="{'drop-menu': btnDropClick,
              'drop-menu-hide': error}">
      GitHub <i class="bi-github"></i></a> </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      btnDropClick: false,
      error: true,
    }
  },
  methods:{
    btnDrop(){
      this.btnDropClick = !this.btnDropClick;
      this.error = !this.error;
    },
    handleHome(){
      this.$router.push({name:'Home'});
    },
      handleRockets(x){
        this.$router.push({name:'Rockets', params: {
            id: x,
          }});
      },
    handleGitHub(){

    }
  }
}
</script>

<style scoped>
.dropdown-hidden{
  position: absolute;
  top: 36px;
  right: 36px;
  border: 1px solid wheat;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.dropdown-open{
  position: absolute;
  top: 36px;
  right: 36px;
  border: 1px solid wheat;
  padding: 10px;
  margin: 5px;
}
.bi-list{
  font-size: 24px;
}
.drop-menu:hover{
  background-color: wheat !important;
  color: black;
  cursor: pointer;
}
.drop-menu{
  display: block;
  font-size: 24px;
  box-sizing: border-box;
  color: black;
  text-align: center;
  border: 1px solid wheat;

}
.drop-menu-hide{
  display: none;
}
a{
  color: black;
  text-decoration: none;
}
</style>
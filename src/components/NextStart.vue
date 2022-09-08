<template>
  <div class="container">
    <div class="item1">Next start in: </div>
    <div class="item2">Days {{nextStartDate_Day}}</div>
    <div class="item3">Hours {{nextStartDate_Hour}}</div>
    <div class="item4">Min {{nextStartDate_Min}}</div>
    <div class="item5">Sec {{nextStartDate_Sec}}</div>
    <div class="item6">Next Launch: {{nextLaunch}}</div>
  </div>

</template>

<script>


export default {
  data(){
    return{
      StartDate: 0,
      nextStartDate_Day: 0,
      nextStartDate_Hour: 0,
      nextStartDate_Min: 0,
      nextStartDate_Sec: 0,
      nextLaunch: '',
    }
  },
  methods: {
    CalculateHowLong(){
      window.setInterval(() => {
        const dayjs = require('dayjs')
        dayjs().format()
        let next_start = dayjs(this.StartDate)
        let actual = dayjs()
        let diff = next_start - actual;
        this.nextStartDate_Day = dayjs(diff).date() - 1;
        //total days to run
        this.nextStartDate_Hour = dayjs(diff).hour() - 1;
        //total hours to run
        this.nextStartDate_Min = dayjs(diff).minute();
        //total min to run
        this.nextStartDate_Sec = dayjs(diff).second();
        //total sec
      }, 1000);
    },
  },
  mounted(){
    fetch("https://api.spacexdata.com/v5/launches/next")
        .then(response => response.json())
        .then(data => {
          this.StartDate = new Date(data.date_local);
          this.nextLaunch = data.name;
          console.warn(data);
        });

    this.CalculateHowLong();
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-auto-rows: minmax(40px, auto);
  justify-content: center;
  align-self: center;
}
.item1{
  grid-column: 1 / 5;
  font-size: 48px !important;
}
.item2{
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
}
.item3{
  grid-area: 2 / 2 / 3 / 3;
}
.item4{
  grid-area: 2 / 3 / 3 / 4;
}
.item5{
  grid-area: 2 / 4 / 3 / 5;
}
.item6{
  grid-area: 4 / 1 / 5 / 5;
  color: rgb(200, 235, 185) !important;
  font-size: 24px !important;
}
.item1, .item2, .item3, .item4, .item5, .item6{
  align-self: center;
  justify-self: center;
  font-size: 36px;
}
</style>
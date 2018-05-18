<template>
    <div class="weather-wrapper">ok</div>
</template>
<script>
export default {
  name: 'Weather',
  created() {
    fetch(
      'api.openweathermap.org/data/2.5/weather?q=Athens,gr&appid=1fa0690fce2ac9e3eaefb580a9665f02',
    )
      .then((res) => res.json())
      .then((myJson) => {
        console.log(myJson);
      });
  },
};
</script>
<style>
.weather-wrapper {
  position: absolute;
  top: calc(1vh + 25px);
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 5px;
  color: #333;
}
</style>

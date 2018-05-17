<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:300,600');

body {
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
#app {
  
}
.pointer {
  cursor: pointer;
}
</style>

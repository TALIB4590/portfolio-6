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
.flex{
  display: flex;
}
.flex-vCenter{
  align-items: center;
}
.pointer {
  cursor: pointer;
}
.disabled {
  pointer-events: none;
}
.fullHeight {
  height: 100vh;
}
ul,li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.window-wrapper {
  font-family: 'Dosis', sans-serif;
  position: absolute;
  top: calc(1vh + 25px);
  margin: 0 auto;
  left: calc(50% - 22%);
  width: 44%;
  font-size: 15px;
  line-height: 24px;
  background-color: rgba(42, 54, 76, 0.98);
  border-radius: 5px;
  padding: 5px 25px;
  color: #dddddd;
  z-index: 999;
}
.search input {
  padding: 0;
  margin: 0;
  border: 0;
  flex: 1 1 auto;
  height: 30px;
  background: transparent;
  color: #eeeeee;
  padding: 5px 8px;
  font-size: 24px;
}
.search input:focus {
  outline: 0;
}
.btn {
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 5px;
  color: white;
  background-color: mediumslateblue;
  box-shadow: 0 3px 8px 0px rgba(65, 105, 225, .18);
  display: inline-block;
  border: 0;
  padding: 10px 14px;
  font-size: 14px;
  transition: all .1s ease-in;
}
.btn.green {
  background-color: mediumaquamarine;
}
.btn:hover {
  transform: translateY(1px);
  box-shadow: 0 3px 8px 0px rgba(65, 105, 225, .48);
}
</style>

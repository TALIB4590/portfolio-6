<template>
  <div class="about">
    <div v-for="(row, index) in rows" :key="index" class="row flex flex-vCenter" :class="{grey: index % 2}">
      <div class="flex flex-vCenter">
        <img class="img" :src="require(`@/assets/contact/${row.img}.png`)" width="40" height="40"/>
        <span class="title">{{ row.title }}</span>
      </div>
      <h3 class="span" :class="{'not-available': !row.span}">{{ row.span }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      rows: [
        {
          img: 'name',
          title: 'Full Name',
          span: 'Nikos Koikas'
        },
        {
          img: 'mail',
          title: 'Email',
          span: 'nikos@koikas.eu'
        },
        {
          img: 'job',
          title: 'Job Title',
          span: 'Front-End Developer'
        },
        {
          img: 'availability',
          title: 'Availability For Work',
          span: null
        },
        {
          img: 'experience',
          title: 'Experience',
          span: '2'
        },
        {
          img: 'framework',
          title: 'Most Liked framework',
          span: 'Vue'
        },
      ]
    }
  }
};
</script>

<style>
.about .row {
  padding: 10px 20px;
  justify-content: space-between;
}
.about .row.grey {
  background-color: rgb(233, 227, 227);
}
.about .img {
  margin-right: 15px;
}
.about .title {
  font-weight: 600;
}
.about .span {
  font-weight: 600;
  position: relative;
}
.about .span.not-available:after {
  content: '';
  top: -5px;
  left: -10px;
  width: 10px;
  position: absolute;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}
</style>

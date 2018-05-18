<template>
    <span class="bold">{{ tweeningValue }}</span>
</template>
<script>

export default {
  name: 'animated',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      tweeningValue: 0
    }
  },
  watch: {
    value(newValue, oldValue) {
      const vm = this;
      vm.tween(oldValue, newValue)
    }
  },
  mounted() {
    const vm = this;
    vm.tween(0, this.value)
  },
  methods: {
    tween(startValue, endValue) {
      const vm = this;
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({
          tweeningValue: startValue
        })
        .to({
          tweeningValue: endValue
        }, 500)
        .onUpdate(function() {
          vm.tweeningValue = this.tweeningValue.toFixed(0)
        })
        .start()
      animate()
    }
  }
};
</script>
<style>
.bold {
  font-weight: 600;
}
</style>
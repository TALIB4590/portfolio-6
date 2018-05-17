export default {
  data() {
    return {
      timeNow: this.greeceTime()
    }
  },
  computed: {
    time() {
      const vm = this;
      setInterval(() => {
        vm.timeNow = vm.greeceTime();
      }, 10000);
      return vm.timeNow;
    },
  },
  methods: {
    greeceTime() {
      let d = new Date();
      return d.toLocaleTimeString('en-US', {
        timeZone: 'Europe/Athens',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
    },
    greeceDate() {
      let d = new Date();
      return d.toLocaleDateString('en-US', {
        timeZone: 'Europe/Athens',
        day: '2-digit',
        month: 'long',
      });
    },
    greeceDay() {
      let d = new Date();
      return d.toLocaleDateString('en-US', {
        timeZone: 'Europe/Athens',
        weekday: 'long',
      });
    },
  }
}

export default {
  computed: {
    time() {
      const vm = this;
      let timeNow = vm.localTime()
      setInterval(() => {
        timeNow = vm.localTime();
      }, 10000);
      return timeNow;
    },
  },
  methods: {
    localTime(day) {
      const d = day === undefined?new Date():new Date(day);
      return d.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
    },
    localDate(day) {
      const d = day === undefined?new Date():new Date(day);
      return d.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
      });
    },
    localDay(day) {   
      const d = day === undefined?new Date():new Date(day);
      return d.toLocaleDateString('en-US', {
        weekday: 'long',
      });
    },
  },
  filters: {
    hourMinutes(value) {
      if (!value) return '';
      const d = new Date(value);
      return d.toLocaleString(['en-US'],{
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    roundedDegrees(value) {
      return Math.round(value);
    }
  },
}

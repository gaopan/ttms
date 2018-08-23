//if you want add an new format of time .please add in last of the code .and add a type.
//The timestamp is in milliseconds
export default {
  name: 'time-format-with-text',
  props: {
    timeType: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    },
    fixedTimeZone: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      localTime: null
    }
  },
  watch: {
    timestamp: {
      handler(newValue) {
        this.init(newValue);
      },
      deep: true
    }
  },
  methods: {
    init(timestamp) {
      var vm = this;
      if (vm.fixedTimeZone) {
        var timeZ = new Date(),
          localOffset = timeZ.getTimezoneOffset() * 60000,
          localTimestamp = timestamp - localOffset;
      }
      switch (vm.timeType) {
        case 'monthAbbreviation':
          vm.localTime = vm.monthAbbreviation(timestamp);
          break;

        case 'monthFullFight':
          vm.localTime = vm.monthFullFight(timestamp);
          break;
      }
    }

    ,
    monthAbbreviation(timestamp) {
      var tiemConver = new Date(timestamp),
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        year = tiemConver.getFullYear(),
        month = months[tiemConver.getMonth()],
        date = tiemConver.getDate(),
        hour = tiemConver.getHours(),
        min = tiemConver.getMinutes(),
        sec = tiemConver.getSeconds(),
        time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec;
      return time;
    },
    monthFullFight(timestamp) {
      var tiemConver = new Date(timestamp),
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'Aguest', 'September', 'October', 'November', 'December'],
        year = tiemConver.getFullYear(),
        month = months[tiemConver.getMonth()],
        date = tiemConver.getDate(),
        hour = tiemConver.getHours(),
        min = tiemConver.getMinutes(),
        sec = tiemConver.getSeconds(),
        time = month + ' ' + date + ', ' + year;
      return time;
    }
  },
  mounted() {
    this.init(this.timestamp);
  }
}

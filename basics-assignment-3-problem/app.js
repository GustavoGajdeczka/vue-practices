const app = Vue.createApp({
  data(){
    return {
      data1: 1
    }
  },
  watch: {
    result(newValue, oldValue){
      const vm = this;
      setTimeout(() => {
        vm.data1 = 0;
      }, 5000);
    }
  },
  computed: {
    result(){
      if(this.data1 < 37){
        return 'Not there yer'
      }else{
        return 'Too Much!'
      }
    }
  },
  methods: {
    add(value){
      this.data1 = this.data1 + value;
    }
  },
}).mount('#assignment')
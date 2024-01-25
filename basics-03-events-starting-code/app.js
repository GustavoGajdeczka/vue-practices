const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  watch: {
    name(value){
      if(value === ''){
        this.fullName = '';
      }
      this.fullName = value + ' ' + 'Gajdeczka';
    }
  },
  computed:{
    /* fullName(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Gajdeczka'
    } */
  },
  methods: {
    outputFullName(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Gajdeczka'
    },
    setName(event){
      this.name = event.target.value
    },
    add(){
      this.counter++
    },
    remove(){
      if(this.counter > 0){
        this.counter--
      }
    },
    submitForm(event){
      alert("Submitted!!");
    },
    resetInput(){
      this.name = '';
    }
  },
});

app.mount('#events');

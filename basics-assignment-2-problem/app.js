const app = Vue.createApp({
  data(){
    return{
      name: '',
      text: ''
    }
  },
  methods: {
    callAlert(){
      alert("Chamou")
    },
    setName(event){
      this.name = event.target.value;
    },
    setText(event){
      this.text = event.target.value;
    }
  },
}).mount('#assignment');
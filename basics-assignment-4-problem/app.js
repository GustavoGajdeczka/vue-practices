const app = Vue.createApp({
  data(){
    return {
      input1: '',
      visible: true,
      color: ''
    }
  },
  methods: {
    toggle(){
      this.visible = !this.visible
    }
  },
  computed: {
    input(){
      return this.input1
    },
    paragraphToggle(){
      return this.visible
    },
    returnColor(){
      return this.color;
    }
  }
})

app.mount('#assignment')
const app = Vue.createApp({
  data(){
    return {
      task: '',
      tasks: [],
      showList: true
    }
  },
  methods: {
    addTask(){
      if(this.task !== ''){
        this.tasks.push(this.task);
      }
    },
    switchList(){
      this.showList = !this.showList;
    }
  },
}).mount('#assignment');
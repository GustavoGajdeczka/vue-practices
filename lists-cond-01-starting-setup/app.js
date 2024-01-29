const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goal: ''
    };
  },
  computed: {
    goalsCount(){
      return !this.goals.length;
    }
  },
  methods: {
    addGoal(){
      this.goals.push(this.goal);
    },
    removeGoal(idx){
      this.goals.splice(idx, 1);
    }
  },
});

app.mount('#user-goals');

/* const { createApp, ref} = Vue */

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoals(){
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  },
}).mount('#app')


/* Vue.createApp({
  data(){
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoals(){
      this.goals.push(this.enteredValue);
    }
  }
}); */


/* const buttonEl = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

function addGoal(){
  const enteredValue = input.value;
  const listItem = document.createElement('li');
  listItem.textContent = enteredValue;
  ul.appendChild(listItem);
}

buttonEl.addEventListener('click', addGoal);
 */
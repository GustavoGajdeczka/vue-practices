const app = Vue.createApp({
  data(){
    return {
      friends: [
        {
          id: 'manuel', 
          name: 'Manuel Lorenz', 
          phone: '42 9999 9999',
          email: 'manuel@vue.com'
        },
        {
          id: 'Jeremy', 
          name: 'Jeremy Cox', 
          phone: '42 8888 8888',
          email: 'jeremy@vue.com'
        }
      ]
    }
  }
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails()">Show Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data(){
    return {
      detailsAreVisible: false,
      friend: {
        id: 'Jeremy', 
        name: 'Jeremy Cox', 
        phone: '42 8888 8888',
        email: 'jeremy@vue.com'
      }
    }
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');
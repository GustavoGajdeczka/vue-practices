const app = Vue.createApp({
  data(){
    return {
      name: 'Gustavo',
      age: 25,
      link: 'https://s2-autoesporte.glbimg.com/_5PCdvawIzIBSiy0ejcq0PqjD5M=/0x455:4539x3400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/r/HslBsmR8WkDGuPdQ6LrA/155872-2019-cb500x.jpg'
    }
  },
  methods: {
    myAgeInFiveYears(){
      return this.age + 5;
    },
    randomNumber(){
      return Math.floor(Math.random() * 10);
    }
  },
})

app.mount('#assignment');
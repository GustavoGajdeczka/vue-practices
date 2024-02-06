<template>
  <div>
    <h1 class="green">{{friends}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      friends: [
        {
          id: '87',
          name: 'Jim McGuire',
          phone: '42 9999 9999',
          email: 'jim@vue.com'
        },
        {
          id: '18',
          name: 'Jean Barber',
          phone: '42 9999 8888',
          email: 'jean@vue.com'
        },
      ]
    }
  }
}

</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

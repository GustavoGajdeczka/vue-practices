<script setup>
import calculate from './components/calculate.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <h1>Despesas mensais</h1>
    </header>
    <calculate></calculate>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

header {
  display: flex;
  justify-content: center;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}
</style>

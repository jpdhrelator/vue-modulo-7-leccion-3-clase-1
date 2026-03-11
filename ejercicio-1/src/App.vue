<script setup>
import ComponenteA from './components/ComponenteA.vue';
import ComponenteB from './components/ComponenteB.vue';




</script>

<template>
  <main>
    <small><ComponenteB/></small>
    <ComponenteA/> 
  </main>

</template>

<style>
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background-color: #f1f5f9;
}

#app {
  width: 100%;
}
</style>

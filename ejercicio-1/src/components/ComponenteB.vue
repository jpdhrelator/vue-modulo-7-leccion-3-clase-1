<template>
     <div class="vuex-container">
        <h3 style="color: black;">Desde El Componente B Leyendo el Contador: {{ contador }}</h3>


        <label>Nro a Sunar</label>
        <input type="number" v-model="nroASumar">
        <br/>
        <button @click="aumentar" type="button">Aumentar</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const contador= computed(()=> store.state.count);
const nroASumar= ref(0);


const aumentar= ()=> store.commit('incrementarCustom',nroASumar.value);
</script>

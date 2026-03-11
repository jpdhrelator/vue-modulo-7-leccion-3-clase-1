<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const contador= computed(()=>store.state.count);
const ultimaAccion=computed(()=>store.state.lastAction );
const contadorDoble= computed(()=> store.getters.doubleCount);
const espar= computed(()=> store.getters.esCountPar);
const pokemons = computed(() => store.getters.allPokemons);

const aumentarEn1= ()=> store.commit('incrementar');
const traerPokemones= ()=> store.dispatch('getAllPokemons');
</script>


<template>
    <div class="vuex-container">
      <h3>🚀 Dominando Vuex: Estado Global</h3>
     <section class="state-card">
      <h2>1. El Estado (State)</h2>
      <p>Es el "corazón" de Vuex. Son los datos que compartimos en toda la App.</p>
      <div class="stat-box">
        <span class="label">Contador Actual:</span>
        <span class="value">{{  contador }}</span>
      </div>
      <div class="stat-box">
        <span class="label">Última Acción:</span>
        <span class="value action">{{ ultimaAccion }}</span>
      </div>
    </section>
    <section class="getters-card">
      <h2>2. Getters</h2>
      <p>Son como las "computadas" del store. Transforman el estado sin cambiarlo.</p>
      <div class="stat-box">
        <span class="label">Doble del contador (computed by Vuex):</span>
        <span class="value highlight">{{ contadorDoble }}</span>
      </div>

      <div class="stat-box">
        <span class="label">Espar:</span>
        <span class="value highlight">{{ espar }}</span>
      </div>
    </section>
    <section class="actions-card">
        <h2>Mutaciones</h2>
        <div class="controls">
            <button @click="aumentarEn1" type="button" class="btn-mut"> Aumentar en 1</button>
        </div>
    </section>
    <section class="pokemon-card">
      <h2>4. Ejemplo API (Action Asíncrona)</h2>
      <button @click="traerPokemones" class="btn-poke">🎮 Traer Pokemones</button>
      
      <div v-if="pokemons.length" class="poke-grid">
        <div v-for="(poke, index) in pokemons" :key="index" class="poke-card-item">
          <div class="poke-id">#{{ poke.id }}</div>
          <img :src="poke.image" :alt="poke.name" class="poke-img" />
          <div class="poke-name">{{ poke.name.toUpperCase() }}</div>
        </div>
      </div>
      <p v-else class="empty-msg">No hay pokemones cargados aún.</p>
    </section>
    </div>
</template>



<style scoped>
.vuex-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: #1e293b;
}

h1 { color: #3b82f6; text-align: center; }

section {
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-left: 5px solid #3b82f6;
  border-radius: 4px;
}

.stat-box {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
}

.label { font-weight: 600; }
.value { font-size: 1.2rem; color: #2563eb; }
.value.action { color: #64748b; font-size: 0.9rem; font-style: italic; }
.value.highlight { color: #ef4444; font-weight: bold; }

.controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-mut { background: #10b981; color: white; }
.btn-act { background: #8b5cf6; color: white; }
.btn-res { background: #64748b; color: white; }
.btn-poke { background: #ef4444; color: white; width: 100%; margin-bottom: 1rem; }

button:hover { opacity: 0.8; transform: translateY(-1px); }

.poke-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
  margin-top: 1rem;
}

.poke-card-item {
  background: #f1f5f9;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e2e8f0;
}

.poke-card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background: white;
}

.poke-id {
  position: absolute;
  top: 5px;
  left: 8px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
}

.poke-img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}

.poke-name {
  font-size: 0.8rem;
  font-weight: bold;
  color: #334155;
}

.empty-msg { color: #94a3b8; text-align: center; font-style: italic; }

.input-group {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

input {
  padding: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  width: 80px;
}

.concept-note {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #92400e;
}
</style>

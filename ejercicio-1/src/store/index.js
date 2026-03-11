import { createStore } from 'vuex';
import axios from 'axios';
const store=createStore({

state(){
    return {
        count: 2,
        lastAction:'--',
        pokemons: []
    }
},

getters: {
    doubleCount(state) {
        return state.count * 2;
    },
    esCountPar(state){
        return state.count% 2== 0;
    },
    count(state){
        return state.count;
    },
    allPokemons(state) {
      return state.pokemons;
    }
},

mutations: {
    incrementar(state){
        state.count++;
        state.lastAction="Incremente el Contador en 1";
    },
    decrementar1(state){
        state.count--;
        state.lastAction="Decremente el Contador en 1";
    },
    incrementarCustom(state,valor){
        state.count+=valor;// ---> state.count= state.count+valor;
        state.lastAction=`IIncremente el Contador en ${valor}`;
    },
    decrementarCustom(state,valor){
        state.count-=valor;// ---> state.count= state.count-valor;
        state.lastAction=`Decremente el Contador en ${valor}`;
    },
    setContador(state,valor){
        state.count= valor;
        state.lastAction=`Seteo el Contador en ${valor}`;
    },
    setPokemons(state, list) {
      state.pokemons = list;
      state.lastAction = 'Pokemones cargados desde API con Axios';
    }
},
actions:{
    async getAllPokemons({commit}){
       try {
        // Usando Axios en lugar de Fetch
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = response.data;
        
        // Mapeamos los resultados para incluir la imagen basada en el ID
        const formattedPokemons = data.results.map(pokemon => {
          const id = pokemon.url.split('/').filter(Boolean).pop();
          return {
            ...pokemon,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });

        commit('setPokemons', formattedPokemons);
      } catch (error) {
        console.error('Error al traer pokemones con Axios:', error);
      }
    }
}


});

export default store;
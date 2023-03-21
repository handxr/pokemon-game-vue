<template>
  <div class="container" v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div class="container" v-else>
    <h1>¿Cuál es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonOptions" @selectPokemon="checkAnswer" />
    <p v-if="showPokemon">{{ message }}</p>
    <button v-if="showPokemon" @click="newGame">Nuevo juego</button>
  </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { getPokemonOptions } from '../helpers/getPokemonOptions'

export default {
  components: { PokemonPicture, PokemonOptions },

  data() {
    return {
      pokemonOptions: [],
      pokemon: null,
      isLoading: false,
      showPokemon: false,
      isCorrectAnswer: false,
      message: ''
    }
  },

  methods: {
    async getPokemonOptions() {
      try {
        this.isLoading = true
        const pokemonOptions = await getPokemonOptions()
        this.pokemonOptions = pokemonOptions
        const randomIndex = Math.floor(Math.random() * 4)
        this.pokemon = pokemonOptions[randomIndex]
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    checkAnswer(pokemon) {
      if (pokemon.id === this.pokemon.id) {
        this.isCorrectAnswer = true
        this.showPokemon = true
        this.message = 'Correcto!'
      } else {
        this.isCorrectAnswer = false
        this.showPokemon = true
        this.message = `Incorrecto! El pokemon correcto es ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.getPokemonOptions()
    }
  },

  created() {
    this.getPokemonOptions()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
}
</style>

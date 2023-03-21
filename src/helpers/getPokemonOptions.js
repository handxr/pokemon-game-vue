import { pokemonApi } from '../api/pokemonApi'
import { shuffleArray } from './shuffleArray'

export const getPokemons = () => Array.from({ length: 650 }, (_, i) => i + 1)

export const getPokemonOptions = async () =>
  await getPokemonNames(shuffleArray(getPokemons()).slice(0, 4))

export const getPokemonNames = async ([a, b, c, d] = []) => {
  const promises = [
    pokemonApi.get(`/pokemon/${a}`),
    pokemonApi.get(`/pokemon/${b}`),
    pokemonApi.get(`/pokemon/${c}`),
    pokemonApi.get(`/pokemon/${d}`)
  ]

  const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all(promises)
  return [
    { id: pokemon1.data.id, name: pokemon1.data.name },
    { id: pokemon2.data.id, name: pokemon2.data.name },
    { id: pokemon3.data.id, name: pokemon3.data.name },
    { id: pokemon4.data.id, name: pokemon4.data.name }
  ]
}

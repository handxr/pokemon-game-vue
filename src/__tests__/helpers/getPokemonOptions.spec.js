import { it, describe, expect } from 'vitest'
import { getPokemonOptions, getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'
import { pokemons as mockedPokemons } from '../__mocks__/pokemons'

describe('getPokemonOptions helpers', () => {
  it('should return an array with numbers', () => {
    const pokemons = getPokemons()
    expect(pokemons.length).toBe(650)
  })
  it('should return an array with 4 elements', async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4])

    expect(pokemons.length).toBe(4)

    expect(pokemons).toEqual(mockedPokemons)
  })
  it('should return a mixed array', async () => {
    const pokemons = await getPokemonOptions()

    expect(pokemons.length).toBe(4)

    expect(pokemons).not.toEqual(mockedPokemons)
  })
})

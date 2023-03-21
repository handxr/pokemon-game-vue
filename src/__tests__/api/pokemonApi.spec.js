import { describe, expect, it } from 'vitest'
import { pokemonApi } from '@/api/pokemonApi'

describe.only('pokemonApi', () => {
  it('axios should be setup correctly with the pokemon api', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2')
  })
})

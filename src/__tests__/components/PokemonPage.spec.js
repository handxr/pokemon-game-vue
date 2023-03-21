import PokemonPage from '@/pages/PokemonPage.vue'
import { shallowMount, mount } from '@vue/test-utils'
import { it, describe, expect, beforeEach, vitest } from 'vitest'
import { pokemons } from '../__mocks__/pokemons'

describe.only('PokemonPage component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })
  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should call the getPokemonOptions function when the component is mounted', () => {
    const getPokemonOptions = vitest.spyOn(PokemonPage.methods, 'getPokemonOptions')
    mount(PokemonPage)
    expect(getPokemonOptions).toHaveBeenCalled()
  })
  it('should match the snapshot when the component is mounted', () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonOptions: pokemons,
          pokemon: pokemons[0],
          isLoading: false,
          showPokemon: false,
          isCorrectAnswer: false,
          message: ''
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})

import PokemonOptions from '@/components/PokemonOptions.vue'
import { shallowMount } from '@vue/test-utils'
import { it, describe, expect, beforeEach } from 'vitest'
import { pokemons } from '../__mocks__/pokemons'

describe.only('PokemonOptions Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemons
      }
    })
  })
  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render the correct number of options', () => {
    const options = wrapper.findAll('li')

    expect(options).toHaveLength(pokemons.length)

    options.forEach((option, index) => {
      expect(option.text()).toBe(pokemons[index].name)
    })
  })

  it('should emit an event called selectPokemon with their value when clicked', () => {
    const [firstPokemon] = pokemons
    const options = wrapper.findAll('li')
    const firstOption = options[0]

    firstOption.trigger('click')

    expect(wrapper.emitted('selectPokemon')[0]).toEqual([firstPokemon])
  })
})

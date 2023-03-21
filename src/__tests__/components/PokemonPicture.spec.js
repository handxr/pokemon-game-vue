import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import PokemonPicture from '@/components/PokemonPicture.vue'

describe.only('PokemonPicture Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonPicture)
  })

  it('should render the component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should display the hidden picture and the pokemon number 100', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    })
    const [img1, img2] = wrapper.findAll('img')

    expect(img1.exists()).toBe(true)
    expect(img2).toBe(undefined)
    expect(img1.classes('hidden-pokemon')).toBe(true)
    expect(img1.attributes('src')).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`
    )
  })

  it('should display the pokemon image if showPokemon:true ', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true
      }
    })
    const pokemonImage = wrapper.find('img')

    expect(pokemonImage.exists()).toBe(true)
    expect(pokemonImage.classes('hidden-pokemon')).toBe(false)
    expect(pokemonImage.classes('fade-in')).toBe(true)
    expect(pokemonImage.attributes('src')).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`
    )
  })
})

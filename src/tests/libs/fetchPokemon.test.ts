import { fetchPokemonByName } from '@/libs/fetchPokemon'
import { describe, expect, test } from 'vitest'

describe('fetchPokemonByName', () => {
  test('fetchPokemonByName - pikachu', async () => {
    const pokemon = await fetchPokemonByName('pikachu')
    expect(pokemon).toMatchSnapshot()
  })

  test('fetchPokemonByName - pichu', async () => {
    const pokemon = await fetchPokemonByName('pichu')
    expect(pokemon.name).toBe('pichu')
    expect(pokemon.height).toBe(3)
    expect(pokemon.weight).toBe(20)
    expect(pokemon.abilities).toHaveLength(2)
    expect(pokemon.stats).toHaveLength(6)
  })
})

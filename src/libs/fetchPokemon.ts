import { PokemonSchema } from '@/schemas'

export async function fetchPokemonByName(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if (!res.ok) throw new Error('Pokemon not found')

  const json = await res.json()
  return PokemonSchema.parse(json)
}

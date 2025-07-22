'use client'

import { useState } from 'react'
import { SearchForm, SearchResultList } from '@/features'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName } from '@/libs/fetchPokemon'

export default function HomePage() {
  const [keyword, setKeyword] = useState('')
  const { data: pokemon, error } = useQuery({
    queryKey: ['pokemon', keyword],
    queryFn: () => fetchPokemonByName(keyword),
    enabled: !!keyword,
    retry: false,
  })

  return (
    <main style={{ padding: '2rem' }}>
      <SearchForm onSearch={setKeyword} error={error} />
      {pokemon && <SearchResultList pokemon={pokemon} />}
    </main>
  )
}

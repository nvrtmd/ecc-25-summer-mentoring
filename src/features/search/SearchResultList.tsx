import { Box, Typography } from '@mui/material'
import { Pokemon } from '@/schemas'

export function SearchResultList({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Box mt={4}>
      <Typography variant="h5">{pokemon.name.toUpperCase()}</Typography>
      <Typography>📏 Height: {pokemon.height}</Typography>
      <Typography>⚖️ Weight: {pokemon.weight}</Typography>
      <Typography>
        💪 Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
      </Typography>
      <Typography>🔥 Stats: {pokemon.stats.map((stat) => stat.stat.name).join(', ')}</Typography>
    </Box>
  )
}

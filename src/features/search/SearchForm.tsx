import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Button, Box } from '@mui/material'
import { searchSchema, SearchInput } from '@/schemas'

interface SearchFormProps {
  onSearch: (keyword: string) => void
  error: Error | null
}

export function SearchForm({ onSearch, error }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<SearchInput>({
    resolver: zodResolver(searchSchema),
  })

  const onSubmit = (data: SearchInput) => {
    onSearch(data.keyword)
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" gap={2}>
      <TextField
        label="검색어"
        {...register('keyword')}
        error={!!inputErrors.keyword || !!error}
        helperText={inputErrors.keyword?.message || error?.message}
      />
      <Button type="submit" variant="contained" color="primary">
        검색
      </Button>
    </Box>
  )
}

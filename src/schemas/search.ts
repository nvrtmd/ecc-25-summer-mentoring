import { z } from 'zod'

export const searchSchema = z.object({
  keyword: z.string().min(1, 'Please enter a keyword'),
})

export type SearchInput = z.infer<typeof searchSchema>

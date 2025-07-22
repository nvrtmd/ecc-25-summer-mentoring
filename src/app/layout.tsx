import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Pokémon Search',
  description: 'Search your favorite Pokémon!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import '../styles/globals.css'

export const metadata = {
  title: 'Premium Portfolio',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

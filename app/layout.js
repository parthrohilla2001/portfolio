import '../styles/globals.css'

export const metadata = {
  title: 'Parth Rohilla — Software Engineer',
  description: 'Portfolio of Parth Rohilla — Software Engineer & Backend Developer specializing in Node.js, PHP, REST APIs, and scalable backend systems.',
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

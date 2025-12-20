import './globals.css'

export const metadata = {
  title: 'Mandara Wellness Clinic',
  description: 'Mandara Wellness Clinic - Beauty Spa, Barber Shop & Cosmetic Surgery Html Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

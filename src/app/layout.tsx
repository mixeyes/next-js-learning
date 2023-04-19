import './globals.css'
import { Footer, Header } from '../components';

export const metadata = {
  title: 'next e-shop',
  description: 'Created by ML',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}

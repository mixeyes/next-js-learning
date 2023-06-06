import './globals.css';
import { Breadcrumbs, Footer, Header } from '../components';

export const metadata = {
  title: 'next e-shop',
  description: 'Created by ML',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className='app-wrapper'>
          <Header />
          <div className='conent-wrapper'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

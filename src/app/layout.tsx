import './globals.css';
import { Breadcrumbs, Footer, Header } from '../components';

export const metadata = {
  description: 'Created by ML',
  title: 'next e-shop',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='app-wrapper'>
          <Header />
          <Breadcrumbs rootLabel='Home' />
          <div className='conent-wrapper'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

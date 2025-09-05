import './globals.css';
import { LanguageProvider } from './lib/i18n';

export const metadata = {
  title: 'ProConnectHub — Event Production Talent Marketplace',
  description: 'Discover and hire technicians, creatives, and production pros — fast, reliable, bilingual.',
  icons: [{ rel: 'icon', url: '/logo.svg' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

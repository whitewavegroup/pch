import './globals.css';

export const metadata = {
  title: 'ProConnectHub',
  description: 'Event production talent marketplace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

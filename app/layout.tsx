import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NovaFlow AI',
  description: 'AI workflow platform for teams that want faster decisions and better outcomes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

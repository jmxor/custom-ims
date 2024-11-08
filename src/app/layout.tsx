import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Custom IMS',
  description: 'A simple dashboard for managing ebay listings.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

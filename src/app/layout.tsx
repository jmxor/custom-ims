import Header from '@/components/Header';
import theme from '@/theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inventory Manager',
  description: 'A simple inventory manager'
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
    <body>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}

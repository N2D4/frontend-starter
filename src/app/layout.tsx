import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/theme';
import { SnackbarProvider } from '@/hooks/use-snackbar';

const inter = Inter({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'N2D4\'s App',
  description: 'Built by N2D4',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.css" integrity="sha384-OH8qNTHoMMVNVcKdKewlipV4SErXqccxxlg6HC9Cwjr5oZu2AdBej1TndeCirael" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SnackbarProvider>
            {children}
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

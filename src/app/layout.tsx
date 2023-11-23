import { SnackbarProvider } from '@/hooks/use-snackbar';
import type { Metadata } from 'next';
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from "geist/font/mono";

import './globals.css';
import ThemeProvider from '@/theme';

// TODO ASAP: Update app metadata
export const metadata: Metadata = {
  title: 'frontend-starter',
  description: 'Frontend template built by N2D4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.css" integrity="sha384-OH8qNTHoMMVNVcKdKewlipV4SErXqccxxlg6HC9Cwjr5oZu2AdBej1TndeCirael" crossOrigin="anonymous" />
      </head>
      <body
        style={{
          /**
           * NOTE: The font family is configured in the Joy UI theme config, at src/theme.tsx.
           * 
           * The font here is used as a fallback, and is intentionally egregious to make it obvious
           * when you forgot to wrap your text in a <Typography /> or <Paragraph /> component.
           */
          fontFamily: 'Brush Script MT',
        }}
      >
        <ThemeProvider>
          <SnackbarProvider>
            {children}
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

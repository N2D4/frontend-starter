"use client";

import { CssBaseline, CssVarsProvider, extendTheme, getInitColorSchemeScript } from "@mui/joy";
import NextLink from "next/link";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const theme = extendTheme({
    fontFamily: {
      body: `var(--font-geist-sans, sans-serif)`,
      code: `var(--font-geist-mono, ui-monospace)`,
      display: `var(--font-geist-sans, sans-serif)`,
    },
    typography: {
      h1: {
        fontWeight: "var(--joy-fontWeight-lg, 600)",
      },
      h2: {
        fontWeight: "var(--joy-fontWeight-lg, 600)",
      },
    },
    components: {
      JoyLink: {
        defaultProps: {
          component: (props) => (<NextLink {...props} />)
        },
      },

      JoyTooltip: {
        styleOverrides: {
          root: {
            // make sure the tooltip text wraps if it's long
            maxWidth: "250px",
          },
        },
      },
    },
  });

  return (
    <CssVarsProvider theme={theme} defaultMode="system" >
      <CssBaseline />
      {getInitColorSchemeScript({ defaultMode: "system" })}
      {props.children}
    </CssVarsProvider>
  );
}

"use client";

import { CssBaseline, CssVarsProvider, ScopedCssBaseline, extendTheme } from "@mui/joy";
import NextLink from "next/link";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const theme = extendTheme({
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
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </CssVarsProvider>
  );
}

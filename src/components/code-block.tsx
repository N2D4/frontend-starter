import { Box } from "@mui/joy";
import { Code } from "bright";
import { CopyButton } from "./copy-button";

export async function CodeBlock(props: React.ComponentProps<typeof Box> & { codeProps?: React.ComponentProps<typeof Code>, mdxPreProps?: React.ComponentProps<'pre'> }) {
  const {codeProps, mdxPreProps, ...boxProps} = props;

  let additionalCodeProps: React.ComponentProps<typeof Code> = {};
  const child: any = mdxPreProps?.children;
  if (child?.type === "code") {
    const classes: string[] = child.props?.className?.split(' ') ?? [];
    let language = classes.find((c: string) => c.startsWith('language-'))?.substring(9);
    if (language?.startsWith('#')) {
      language = language.substring(1);
      additionalCodeProps.lineNumbers = true;
    }
    if (language) {
      additionalCodeProps.lang = language;
    }
    additionalCodeProps.code = `${child.props?.children}`.replace(/\n$/, '');
  }

  return (
    <Box {...boxProps} sx={{
      fontSize: '13px',
      position: 'relative',
      "& code": {
        WebkitFontSmoothing: 'subpixel-antialiased',
        fontFamily: 'Menlo, Consolas, "Droid Sans Mono", monospace',
        letterSpacing: 0,
      }
    }}>
      <Code
        {...additionalCodeProps}
        {...codeProps}
        theme={{
          dark: "dracula",
          light: "light-plus",
          lightSelector: ':not([data-joy-color-scheme="dark"])',
        }}
        style={{
          border: '1px solid var(--joy-palette-neutral-outlinedBorder)',
          borderRadius: '12px',
          ...(codeProps?.style ?? {}),
        }}
      />
      <CopyButton
        content={codeProps?.code ?? additionalCodeProps.code ?? ''}
        size="sm"
        sx={{
          position: 'absolute',
          top: '8px',
          right: '8px',
        }}
      />
    </Box>
  );
}

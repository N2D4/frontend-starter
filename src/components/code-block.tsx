import { Box } from "@mui/joy";
import { Code } from "bright";
import { CopyButton } from "./buttons/copy-button";

type CodeBlockProps = React.ComponentProps<typeof Box> & {
  codeProps?: React.ComponentProps<typeof Code>,
  mdxPreProps?: React.ComponentProps<'pre'>,
  theme?: "auto" | "dark" | "light",
};

export function CodeBlock(props: CodeBlockProps) {

  const {codeProps, mdxPreProps, theme = "auto", ...boxProps} = props;

  let additionalCodeProps: React.ComponentProps<typeof Code> = {};
  const child: any = mdxPreProps?.children;
  const codeNodeProps = typeof child === "string" ? mdxPreProps : child?.props;
  const classes: string[] = codeNodeProps?.className?.split(' ') ?? [];
  let language = classes.find((c: string) => c.startsWith('language-'))?.substring(9);
  if (language?.startsWith('#')) {
    language = language.substring(1);
    additionalCodeProps.lineNumbers = true;
  }
  if (language) {
    additionalCodeProps.lang = language;
  }
  additionalCodeProps.code = `${codeNodeProps?.children}`.replace(/\n$/, '');

  const themeObject = {
    dark: "dracula",
    light: "light-plus",
    lightSelector: '[data-joy-color-scheme="light"]',
  } as const;
  const themeVar = theme === "auto" ? themeObject : themeObject[theme];

  return (
    <Box {...boxProps} sx={{
      fontSize: '13px',
      position: 'relative',
      "& code": {
        WebkitFontSmoothing: 'subpixel-antialiased',
        textRendering: 'optimizeLegibility',
        fontFamily: 'var(--joy-fontFamily-code)',
        letterSpacing: 0,
      },
      "& span[data-bright-ln]": {
        userSelect: 'none',
      },
    }}>
      <Code
        {...additionalCodeProps}
        {...codeProps}
        theme={themeVar}
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

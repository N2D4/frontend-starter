import { Box } from "@mui/joy";
import { Code } from "bright";
import { CopyButton } from "./buttons/copy-button";

type CodeBlockProps = Omit<React.ComponentProps<typeof Box>, "children"> & {
  code?: string,
  language?: string,
  codeProps?: React.ComponentProps<typeof Code>,
  mdxPreProps?: React.ComponentProps<'pre'>,
  theme?: "auto" | "dark" | "light",
  disableBorder?: boolean,
  lineNumbers?: boolean,
};

export function CodeBlock(props: CodeBlockProps) {
  const {code, language, codeProps, lineNumbers, mdxPreProps, theme = "auto", disableBorder, ...boxProps} = props;

  let additionalCodeProps: React.ComponentProps<typeof Code> = {};
  const child: any = mdxPreProps?.children;
  const codeNodeProps = typeof child === "string" ? mdxPreProps : child?.props;
  const classes: string[] = codeNodeProps?.className?.split(' ') ?? [];
  let parsedLanguage = language ?? classes.find((c: string) => c.startsWith('language-'))?.substring(9);
  if (parsedLanguage?.startsWith('#')) {
    parsedLanguage = parsedLanguage.substring(1);
    additionalCodeProps.lineNumbers = true;
  }
  if (parsedLanguage) {
    additionalCodeProps.lang = parsedLanguage;
  }
  additionalCodeProps.code = code ?? `${codeNodeProps?.children}`.replace(/\n$/, '');

  const themeObject = {
    dark: "dracula",
    light: "light-plus",
    lightSelector: '[data-joy-color-scheme="light"]',
  } as const;
  const themeVar = theme === "auto" ? themeObject : themeObject[theme];

  return (
    <Box
      {...boxProps}
      sx={{
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
      }}
    >
      <Code
        lineNumbers={lineNumbers}
        theme={themeVar}
        {...additionalCodeProps}
        {...codeProps}
        style={{
          border: disableBorder ? 'none' : '1px solid var(--joy-palette-neutral-outlinedBorder)',
          borderRadius: disableBorder ? 0 : '12px',
          margin: 0,
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

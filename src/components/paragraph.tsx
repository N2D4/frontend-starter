import { Typography, TypographyProps } from "@mui/joy";
import { SmartLink } from "./smart-link";
import { Icon } from "./icon";

const allowedTypes = new Map([
  ['body', {
    marginY: 2,
  }],
  ['h1', {
    marginTop: 5,
    marginBottom: 2,
  }],
  ['h2', {
    marginTop: 3,
    marginBottom: 2,
  }],
  ['h3', {
    marginY: 2,
  }],
  ['h4', {
    marginY: 2,
  }],
] as const);
type AllowedTypes = typeof allowedTypes extends Map<infer K, any> ? K : never;
type OnlyAllowedType<T extends AllowedTypes> =
  & { [key in Exclude<AllowedTypes, T>]?: false }
  & { [key in T]: true };
type ParagraphProps = {
  [key in AllowedTypes]: OnlyAllowedType<key> & Omit<TypographyProps<key>, keyof OnlyAllowedType<key>>;
}[AllowedTypes];

export function Paragraph(props: ParagraphProps) {
  const level = [...allowedTypes.keys()].find((type) => props[type]);
  if (!level) throw new Error("Invalid paragraph type");

  const {children, ...typographyProps} = Object.fromEntries(Object.entries(props).filter(([k]) => !allowedTypes.has(k as any)));

  return (
    <Typography
      {...level === 'body' ? {
        component: 'div',
      } : {
        level,
      }}
      display="block"
      {...typographyProps}
      sx={{
        ...allowedTypes.get(level),
        ...typographyProps.sx,
      }}
    >
      <Typography
        display="inline"
        component="span"
        sx={{
          "& > .MuiTypography-endDecorator": {
            verticalAlign: 'bottom',
            display: 'none',
          },
          "&:hover > .MuiTypography-endDecorator": {
            display: 'inline-flex',
          },
        }}
        endDecorator={level.startsWith('h') && typographyProps.id ? (
          <SmartLink
            href={`#${typographyProps.id}`}
            alignSelf="end"
            sx={{
              color: 'text.tertiary',
              fontWeight: 'normal',
              textUnderlineOffset: '0',
            }}
          >
            <Icon icon="link" />
          </SmartLink>
        ) : undefined}
      >
        {children}
      </Typography>
    </Typography>
  );
}

import { Typography, TypographyProps } from "@mui/joy";

const allowedTypes = new Map([
  ['body', {
    marginY: 2,
  }],
  ['h1', {
    marginTop: 6,
    marginBottom: 2,
  }],
  ['h2', {
    marginTop: 4,
    marginBottom: 2,
  }],
  ['h3', {
    marginTop: 3,
    marginBottom: 2,
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

  return (
    <Typography
      level={level === 'body' ? undefined : level}
      {...Object.fromEntries(Object.entries(props).filter(([k]) => !allowedTypes.has(k as any)))}
      sx={{
        ...allowedTypes.get(level),
        ...props.sx,
      }}
    />
  );
}

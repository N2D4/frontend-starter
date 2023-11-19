import { Box, BoxProps } from "@mui/joy";

type PropsWithoutBase = {
  children: string,
  fill?: boolean,
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
  grade?: -25 | 0 | 200,
  opticalSize?: number,
};

export function Icon(props: PropsWithoutBase & Omit<BoxProps, keyof PropsWithoutBase>) {
  const { fill, weight, grade, opticalSize, ...boxProps } = props;
  return (
    <Box
      color="var(--Icon-color) !important"
      margin="var(--Icon-margin) !important"
      fontSize="var(--Icon-fontSize, 20px) !important"
      width="1em !important"
      height="1em !important"
      {...boxProps}
      className={`material-symbols-rounded ${boxProps.className ?? ""}`}
      sx={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight ?? 400}, 'GRAD' ${grade ?? 0}, 'opsz' ${opticalSize ?? 20}`,
        ...boxProps.sx ?? {},
      }}
    />
  );
}

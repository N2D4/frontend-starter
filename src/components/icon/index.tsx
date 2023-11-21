import { Box, BoxProps } from "@mui/joy";
import type { MaterialSymbolName } from "./material-symbol-names";

type PropsWithoutBase = {
  icon: MaterialSymbolName,
  fill?: boolean,
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
  grade?: -25 | 0 | 200,
  opticalSize?: number,
  size?: number | string,
};

export function Icon(props: PropsWithoutBase & Omit<BoxProps, keyof PropsWithoutBase | "children">) {
  let { icon, fill, weight, grade, opticalSize, size, ...boxProps } = props;
  if (typeof size === "number") {
    opticalSize ??= size;
    size = `${size}px`;
  }
  return (
    <Box
      display="inline-flex"
      component="span"
      color="var(--Icon-color) !important"
      margin="var(--Icon-margin) !important"
      fontSize="var(--Icon-fontSize, 20px) !important"
      width="1em !important"
      height="1em !important"
      className={`material-symbols-rounded ${boxProps.className ?? ""}`}
      sx={{
        "--Icon-fontSize": size ?? undefined,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight ?? 400}, 'GRAD' ${grade ?? 0}, 'opsz' ${opticalSize ?? 20}`,
      }}
    >
      {icon}
    </Box>
  );
}

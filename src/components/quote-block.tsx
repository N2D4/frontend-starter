import { Box, BoxProps } from "@mui/joy";

export function QuoteBlock(props: BoxProps<'blockquote'>) {
  return (
    <Box
      component="blockquote"
      sx={{
        borderLeft: '4px solid var(--joy-palette-neutral-outlinedBorder)',
        paddingLeft: 2,
        marginY: 2,
        marginLeft: 2,
      }}
      {...props as {}}
    />
  );
}

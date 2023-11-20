"use client";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Sheet, Stack, IconButton, Box, SheetProps, useColorScheme, colors } from "@mui/joy";

export function Header(props: SheetProps & { isCompactMediaQuery: string, onShowSidebar: () => void }) {
  const colorScheme = useColorScheme();

  const { isCompactMediaQuery, onShowSidebar, ...sheetProps } = props;
  return (
    <Sheet
      variant="outlined"
      {...sheetProps}
      sx={{
        paddingX: 2,
        position: 'sticky',
        top: 0,
        zIndex: 30,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        display: 'flex',
        alignItems: 'stretch',
        ...sheetProps.sx ?? {},
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        flexGrow={1}
        gap={2}
      >
        <IconButton
          variant="outlined"
          onClick={onShowSidebar}
          sx={{
            display: 'none',
            [isCompactMediaQuery]: {
              display: 'flex',
            },
          }}
        >
          <Icon icon="menu" />
        </IconButton>
        <Logo height={40} />
        <Box flexGrow={1} />
        <IconButton
          variant="outlined"
          onClick={() => colorScheme.setMode(colorScheme.mode === 'light' ? 'dark' : 'light')}
        >
          <Icon icon="contrast" />
        </IconButton>
      </Stack>
    </Sheet>
  );
}

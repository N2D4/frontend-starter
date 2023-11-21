"use client";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Sheet, Stack, IconButton, Box, SheetProps, useColorScheme, colors, Input, Button } from "@mui/joy";
import { SiteSearch } from "./site-search";

export function Header(props: SheetProps & {
  isCompactMediaQuery: string,
  onShowSidebar: () => void,
}) {
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
          size="sm"
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
        <Logo height={36} />
        <Box flexGrow={1} />
        <SiteSearch
          size="sm"
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            minWidth: '100px',
            width: '150px',
            flexShrink: 1,
            transition: 'width 0.1s ease',
            '&:focus-within, &:active': {
              width: '250px',
            },
          }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => colorScheme.setMode(colorScheme.mode === 'light' ? 'dark' : 'light')}
        >
          <Icon icon="contrast" />
        </IconButton>
      </Stack>
    </Sheet>
  );
}

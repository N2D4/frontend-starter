"use client";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Sheet, Stack, IconButton, Box, SheetProps } from "@mui/joy";
import { useRouter } from "next/navigation";

export function Header(props: SheetProps & { isCompactMediaQuery: string, onShowSidebar: () => void }) {
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
        >
          <Icon icon="contrast" />
        </IconButton>
      </Stack>
    </Sheet>
  );
}

"use client";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Sheet, Stack, IconButton, Box } from "@mui/joy";
import { useRouter } from "next/navigation";

export function Header(props: { isCompactMediaQuery: string, onShowSidebar: () => void }) {
  return (
    <Sheet
      variant="outlined"
      sx={{
        paddingY: 1,
        paddingX: 2,
        position: 'sticky',
        top: 0,
        zIndex: 30,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
      >
        <IconButton
          variant="outlined"
          onClick={props.onShowSidebar}
          sx={{
            display: 'none',
            [props.isCompactMediaQuery]: {
              display: 'flex',
            },
          }}
        >
          <Icon icon="menu" />
        </IconButton>
        <Logo
          height={48}
        />
        <RouterBreadcrumbs />
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

function RouterBreadcrumbs() {
  const router = useRouter();

  return (
    "TODO"
  );
}

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { SheetProps, Sheet, List, listItemButtonClasses, ListItem, Typography, ListItemButton, IconButton, ListSubheader, Stack, Divider, Box } from "@mui/joy";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export function Sidebar(props: SheetProps & { onCloseSidebar?: () => void, showLogo?: boolean }) {
  const { onCloseSidebar = () => {}, ...sheetProps } = props;

  return (
    <Sheet
      {...sheetProps}
    >
      {props.showLogo && (
        <Box padding={2}>
          <Logo full height={48} />
        </Box>
      )}
      <List
        size="sm"
        sx={{ width: '100%' }}
      >
        <Subheader icon={<Icon icon="receipt_long" />}>
          Documentation
        </Subheader>
        <NavigationItem href="/" onCloseSidebar={onCloseSidebar}>
          Overview
        </NavigationItem>
        <NavigationItem href="/using-mdx" onCloseSidebar={onCloseSidebar}>
          Using MDX
        </NavigationItem>
        <Folder title="Reasoning">
          <NavigationItem href="/tools/joy-ui" onCloseSidebar={onCloseSidebar}>
            Why Joy UI?
          </NavigationItem>
        </Folder>
      </List>
    </Sheet>
  );
}

function Subheader(props: { icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <ListSubheader sticky sx={{ backdropFilter: 'blur(4px)' }}>
      <Stack direction="row" alignItems="center" gap={1}>
        {props.icon}
        <Box>
          {props.children}
        </Box>
      </Stack>
    </ListSubheader>
  );
}

function NavigationItem(props: { children: React.ReactNode, href: string, onCloseSidebar: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const isLocal = props.href.startsWith("/");
  const pathnameCut = pathname.split("#")[0].split("?")[0];
  const selected = isLocal && !!pathnameCut && pathnameCut === props.href;

  return (
    <ListItem>
      <ListItemButton
        selected={selected}
        onClick={() => {
          if (isLocal) {
            router.push(props.href);
          } else {
            window.open(props.href, "_blank");
          }
          props.onCloseSidebar();
        }}
      >
        {props.children}
      </ListItemButton>
    </ListItem>
  );
}

function Folder(props: { title: React.ReactNode, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ListItem
      nested
      sx={{ marginY: 1 }}
    >
      <ListItem>
        <ListItemButton
          onClick={() => setOpen((bool) => !bool)}
        >
          <Icon
            icon="keyboard_arrow_down"
            sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
          />
          <Typography
            level="inherit"
            sx={{
              fontWeight: open ? 'bold' : undefined,
              color: open ? 'text.primary' : 'inherit',
            }}
          >
            {props.title}
          </Typography>
        </ListItemButton>
      </ListItem>
      {open && (
        <Stack direction="row">
          <Divider orientation="vertical" sx={{ marginLeft: 1.2, marginRight: 1.8 }} />
          <List>
            {props.children}
          </List>
        </Stack>
      )}
    </ListItem>
  );
}

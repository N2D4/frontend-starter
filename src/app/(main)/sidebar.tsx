"use client";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { SheetProps, Sheet, List, listItemButtonClasses, ListItem, Typography, ListItemButton, IconButton, ListSubheader, Stack, Divider, Box } from "@mui/joy";
import { usePathname, useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, use, useCallback, useEffect, useMemo, useState } from "react";
import { SiteSearch } from "./site-search";
import { SmartLink } from "@/components/smart-link";

export function Sidebar(props: SheetProps & {
  onCloseSidebar?: () => void,
  showLogo?: boolean,
  showSearch?: boolean,
}) {
  const { onCloseSidebar = () => {}, showLogo, showSearch, ...sheetProps } = props;

  return (
    <Sheet
      {...sheetProps}
    >
      {showLogo && (
        <Box margin={2}>
          <Logo full height={48} />
        </Box>
      )}
      {showSearch && (
        <Box
          margin={1}
        >
          <SiteSearch size="sm" />
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
        <NavigationItem href="/getting-started" onCloseSidebar={onCloseSidebar}>
          Getting Started
        </NavigationItem>
        <Folder title="Guides">
          <NavigationItem href="/joy-ui" onCloseSidebar={onCloseSidebar}>
            Styling, CSS-in-JS, and Joy UI
          </NavigationItem>
          <NavigationItem href="/using-mdx" onCloseSidebar={onCloseSidebar}>
            Using MDX
          </NavigationItem>
          <NavigationItem href="/github-actions" onCloseSidebar={onCloseSidebar}>
            CI/CD with GitHub Actions
          </NavigationItem>
        </Folder>
        <Folder title="Hooks">
          <NavigationItem href="/hooks/use-animation-frame" onCloseSidebar={onCloseSidebar}>
            useAnimationFrame
          </NavigationItem>
          <NavigationItem href="/hooks/use-intersection-observer" onCloseSidebar={onCloseSidebar}>
            useIntersectionObserver
          </NavigationItem>
          <NavigationItem href="/hooks/use-mutation-observer" onCloseSidebar={onCloseSidebar}>
            useMutationObserver
          </NavigationItem>
          <NavigationItem href="/hooks/use-snackbar" onCloseSidebar={onCloseSidebar}>
            useSnackbar
          </NavigationItem>
        </Folder>
        <Folder title="Components">
          <NavigationItem href="/components/async-button" onCloseSidebar={onCloseSidebar}>
            AsyncButton
          </NavigationItem>
          <NavigationItem href="/components/async-icon-button" onCloseSidebar={onCloseSidebar}>
            AsyncIconButton
          </NavigationItem>
          <NavigationItem href="/components/code-block" onCloseSidebar={onCloseSidebar}>
            CodeBlock
          </NavigationItem>
          <NavigationItem href="/components/copy-button" onCloseSidebar={onCloseSidebar}>
            CopyButton
          </NavigationItem>
          <NavigationItem href="/components/enumeration" onCloseSidebar={onCloseSidebar}>
            Enumeration
          </NavigationItem>
          <NavigationItem href="/components/icon" onCloseSidebar={onCloseSidebar}>
            Icon
          </NavigationItem>
          <NavigationItem href="/components/image" onCloseSidebar={onCloseSidebar}>
            Image
          </NavigationItem>
          <NavigationItem href="/components/inline-code" onCloseSidebar={onCloseSidebar}>
            InlineCode
          </NavigationItem>
          <NavigationItem href="/components/logo" onCloseSidebar={onCloseSidebar}>
            Logo
          </NavigationItem>
          <NavigationItem href="/components/page-loading-indicator" onCloseSidebar={onCloseSidebar}>
            PageLoadingIndicator
          </NavigationItem>
          <NavigationItem href="/components/page-overview" onCloseSidebar={onCloseSidebar}>
            PageOverview
          </NavigationItem>
          <NavigationItem href="/components/paragraph" onCloseSidebar={onCloseSidebar}>
            Paragraph
          </NavigationItem>
          <NavigationItem href="/components/quote-block" onCloseSidebar={onCloseSidebar}>
            QuoteBlock
          </NavigationItem>
          <NavigationItem href="/components/smart-link" onCloseSidebar={onCloseSidebar}>
            SmartLink
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
  const pathname = usePathname();

  const folder = use(folderContext);

  const isLocal = props.href.startsWith("/");
  const pathnameCut = pathname.split("#")[0].split("?")[0];
  const selected = isLocal && !!pathnameCut && pathnameCut === props.href;

  const openParentFolders = useCallback(() => {
    let curFolder = folder;
    while (curFolder != null) {
      curFolder.setOpen(true);
      curFolder = curFolder.parent;
    }
  }, [folder]);

  const [prevSelected, setPrevSelected] = useState(false);
  useEffect(() => {
    setPrevSelected(selected);
    if (selected && !prevSelected) {
      openParentFolders();
    }
  }, [selected, openParentFolders, prevSelected]);

  return (
    <ListItem>
      <ListItemButton
        selected={selected}
        component={SmartLink}
        href={props.href}
        onClick={props.onCloseSidebar}
        sx={{
          paddingX: 2,
          fontWeight: selected ? '500 !important' : undefined,
          color: selected ? 'text.primary' : 'text.tertiary',
          gap: 0,
          "& *": {
            textDecoration: 'none !important',
          },
        }}
      >
        {props.children}
      </ListItemButton>
    </ListItem>
  );
}

type FolderInfo = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  parent: FolderInfo | null,
};
const folderContext = React.createContext<FolderInfo | null>(null);

function Folder(props: { title: React.ReactNode, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const parentFolder = use(folderContext);

  const context = useMemo(() => ({
    open,
    setOpen: setOpen,
    parent: parentFolder,
  }), [open, setOpen, parentFolder]);

  return (
    <ListItem
      nested
      sx={{ marginY: 0.5 }}
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
              fontWeight: open ? '500' : undefined,
              color: open ? 'text.primary' : 'text.tertiary',
            }}
          >
            {props.title}
          </Typography>
        </ListItemButton>
      </ListItem>
      <Stack direction="row" display={open ? undefined : 'none'}>
        <Divider orientation="vertical" sx={{ marginLeft: 1.2, marginRight: 1.8 }} />
        <List>
          <folderContext.Provider value={context}>
            {props.children}
          </folderContext.Provider>
        </List>
      </Stack>
    </ListItem>
  );
}

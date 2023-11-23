"use client";

import { Box, Drawer, ListSubheader, Sheet, SheetProps, Stack, Typography, listItemButtonClasses, useTheme } from "@mui/joy";
import { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

const headerHeight = 64;

export default function Layout(props: { children: React.ReactNode }) {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isCompactMediaQuery = theme.breakpoints.down("lg");

  return (
    <>
      <Stack 
        sx={{
          position: 'absolute',
          inset: 0,
          overflowY: 'auto',
          scrollPaddingTop: `${headerHeight}px`,
        }}
      >
        <Header
          isCompactMediaQuery={isCompactMediaQuery}
          onShowSidebar={() => setIsSidebarOpen(true)}
          sx={{
            height: `${headerHeight}px`,
            flexShrink: 0,
          }}
        />
        <Stack
          flexGrow={1}
          direction="row"
          alignItems="flex-start"
        >
          <Sidebar
            variant="outlined"
            sx={{
              position: 'sticky',
              top: `${headerHeight}px`,
              height: `calc(100vh - ${headerHeight}px)`,
              overflowY: 'auto',
              borderLeft: 'none',
              borderTop: 'none',
              borderBottom: 'none',
              backgroundColor: 'transparent',
              width: '250px',
              flexShrink: 0,
              display: 'block',
              [isCompactMediaQuery]: {
                display: 'none',
              },
            }}
          />
          <Box
            component="main"
            paddingX={{
              lg: 6,
              md: 4,
              xs: 2,
            }}
            minWidth={0}
          >
            {props.children}
          </Box>
        </Stack>
      </Stack>
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <Sidebar
          onCloseSidebar={() => setIsSidebarOpen(false)}
          showSearch
          showLogo
        />
      </Drawer>
    </>
  );
}


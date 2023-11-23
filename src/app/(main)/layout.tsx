"use client";

import { Box, Divider, Drawer, Stack, useTheme } from "@mui/joy";
import { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Logo } from "@/components/logo";
import { Overview, PageOverview } from "@/components/page-overview";
import { OnThisPage } from "./on-this-page";

const headerHeight = 64;

export default function Layout(props: { children: React.ReactNode }) {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageOverview, setPageOverview] = useState<Overview>([]);

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
          <Stack
            paddingX={{
              lg: 6,
              md: 4,
              xs: 2,
            }}
            flexGrow={1}
            paddingY={2}
            minWidth={0}
          >
            <PageOverview
              onOverviewChange={(overview) => setPageOverview(overview)}
            >
              <Box
                component="main"
              >
                {props.children}
              </Box>
            </PageOverview>
            <Divider
              sx={{
                marginY: 4,
              }}
            />
            <Stack
              alignItems="center"
              component="footer"
            >
              <Logo full height={48} />
            </Stack>
          </Stack>
          <OnThisPage
            paddingY={4}
            paddingRight={2}
            sx={{
              position: 'sticky',
              top: `${headerHeight}px`,
              height: `calc(100vh - ${headerHeight}px)`,
              width: '240px',
              flexShrink: 0,
              visibility: pageOverview.length > 0 ? 'visible' : 'hidden',
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
            overview={pageOverview}
          />
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


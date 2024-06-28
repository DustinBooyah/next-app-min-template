'use client';
import { NavbarSimple } from "../ui/navbars/NavbarSimple";
// import { HeaderSimple } from "../ui/header/HeaderSimple";
// import { TableSort } from "./users/TableSort";
// import { TableReviews } from "./users/TableReviews";
import { AppShell, Container, rem, useMantineTheme, Burger } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import { ReactNode, useState } from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import  AppMain  from '../components/AppMain/AppMain';
import  HeaderNav  from '../components/HeaderNav/HeaderNav';
import  FooterNav  from '../components/FooterNav/FooterNav';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const theme = useMantineTheme();
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding={0}
    >
      <AppShell.Header
        style={{
          height: rem(60),
          border: 'none',
          boxShadow: tablet_match ? theme.shadows.md : theme.shadows.sm,
        }}
      >
        <Container fluid py="sm" px="lg">
          <HeaderNav
            desktopOpened={desktopOpened}
            mobileOpened={mobileOpened}
            toggleDesktop={toggleDesktop}
            toggleMobile={toggleMobile}
          />
        </Container>
      </AppShell.Header>
      <AppShell.Navbar>
        {/* <NavbarSimple onClose={toggleMobile} /> */}
        <NavbarSimple  />
        {/* <HeaderSimple/> */}
      </AppShell.Navbar>
      <AppShell.Main>
        <AppMain>{children}</AppMain>
        {/* <TableReviews/> */}
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Container fluid px="lg">
          <FooterNav />
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}

export default Layout;


    

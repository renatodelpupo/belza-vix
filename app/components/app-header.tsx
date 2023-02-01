'use client';

import { gray } from '@radix-ui/colors';
import { styled } from '@stitches/react';

import AppNavigationMenu from './app-navigation-menu';
import Image from 'next/image';

const AppHeader = () => {
  return (
    <Header>
      <Image alt='Belza Vix' height={32} priority src='/belza.svg' width={87} />
      <AppNavigationMenu></AppNavigationMenu>
    </Header>
  );
};

const Header = styled('header', {
  alignItems: 'center',
  backgroundColor: gray.gray3,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 32px',
  position: 'relative',
});

export default AppHeader;

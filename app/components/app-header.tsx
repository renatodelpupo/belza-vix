'use client';

import { styled } from '@/stitches.config';

import AppNavigationMenu from './app-navigation-menu';
import AppThemeToggle from './app-theme-toggle';
import BelzaLogo from '@/app/assets/belza.svg';

const AppHeader = () => {
  return (
    <Header>
      <Logo />
      <AppNavigationMenu></AppNavigationMenu>
      <AppThemeToggle />
    </Header>
  );
};

const Header = styled('header', {
  alignItems: 'center',
  backgroundColor: '$gray3',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 32px',
  position: 'relative',
});

const Logo = styled(BelzaLogo, {
  color: '$gray12',
});

export default AppHeader;

'use client';

import { styled } from '@/stitches.config';

import AppBurgerToggle from './app-burger-toggle';
import AppNavigationBurger from './app-navigation-burger';
import AppNavigationMenu from './app-navigation-menu';
import AppThemeToggle from './app-theme-toggle';
import BelzaLogo from '@/app/assets/belza.svg';

const AppHeader = () => {
  return (
    <Header>
      <Logo />
      <AppNavigationMenu></AppNavigationMenu>
      <AppThemeToggle />
      <BurgerToggle />
      <NavigationBurger />
    </Header>
  );
};

const BurgerToggle = styled(AppBurgerToggle, {
  gridArea: 'burger',
});

const Header = styled('header', {
  alignItems: 'center',
  backgroundColor: '$gray3',
  padding: '16px 32px',
  position: 'relative',

  '@desktop': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  '@mobile': {
    display: 'grid',
    gridTemplateAreas: `
    'logo toggle burger'
    'nav nav nav'
    `,
    rowGap: 16,
  },

  '#toggle-button.is-active ~ #navigation-burger': {
    display: 'block',
  },
});

const NavigationBurger = styled(AppNavigationBurger, {
  gridArea: 'nav',
});

const Logo = styled(BelzaLogo, {
  color: '$gray12',
});

export default AppHeader;

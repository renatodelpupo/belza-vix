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
      <ActionsWrapper>
        <ThemeToggle />
        <BurgerToggle />
      </ActionsWrapper>
      <NavigationBurger />
    </Header>
  );
};

const ActionsWrapper = styled('div', {
  display: 'flex',
  gap: 16,
  grid: 'actions',
  justifySelf: 'flex-end',
});

const BurgerToggle = styled(AppBurgerToggle);

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
      'logo actions'
      'nav nav'
    `,
  },

  '&:has(#toggle-button.is-active)': {
    rowGap: 16,

    '#navigation-burger': {
      display: 'block',
    },
  },
});

const NavigationBurger = styled(AppNavigationBurger, {
  gridArea: 'nav',
});

const Logo = styled(BelzaLogo, {
  color: '$gray12',
});

const ThemeToggle = styled(AppThemeToggle);

export default AppHeader;

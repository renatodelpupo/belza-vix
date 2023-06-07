import { styled } from '@/stitches.config';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const AppBurgerToggle = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const Icon = isActive ? Cross1Icon : HamburgerMenuIcon;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ToggleButton className={`${isActive && 'is-active'}`} id='toggle-button'>
      <Icon onClick={handleClick} />
    </ToggleButton>
  );
};

const ToggleButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray12',
  cursor: 'pointer',
  justifySelf: 'flex-end',
  outline: 'none',

  '@desktop': {
    display: 'none',
  },

  '&:focus-within, &:hover': {
    color: '$crimson11',
  },

  '&:focus-within': {
    borderBottom: `1px dotted $crimson11`,
    marginBottom: '-1px',
  },
});

export default AppBurgerToggle;

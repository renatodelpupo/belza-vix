import { darkTheme, styled } from '@/stitches.config';
import { SunIcon } from '@radix-ui/react-icons';

const AppThemeToggle = () => {
  return (
    <ToggleButton
      onClick={() => {
        document.documentElement.classList.toggle(darkTheme.className);
      }}
    >
      <SunIcon aria-label='Switch color theme' />
    </ToggleButton>
  );
};

const ToggleButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray12',
  cursor: 'pointer',
  outline: 'none',

  '&:focus-within, &:hover': {
    color: '$crimson11',
  },

  '&:focus-within': {
    borderBottom: `1px dotted $crimson11`,
    marginBottom: '-1px',
  },
});

export default AppThemeToggle;

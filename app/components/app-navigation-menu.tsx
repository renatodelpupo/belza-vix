import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@/stitches.config';

const AppNavigationMenu = () => {
  return (
    <Root>
      <List>
        <NavigationMenu.Item>
          <Trigger>Makeup</Trigger>
          <Content>
            <Column>
              <Category>Eye makeup</Category>
              <SubList>
                <SubListItem>
                  <Link href='#'>Mascara</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Eyeliner</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Eyebrow Makeup</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Eye Shadow</Link>
                </SubListItem>
              </SubList>
              <MoreInfo>
                <Link href='#'>All eye products</Link>
              </MoreInfo>
            </Column>
            <Column>
              <Category>Lip color</Category>
              <SubList>
                <SubListItem>
                  <Link href='#'>Lipstick</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Liquid lip</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Lip gloss</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Lip liner</Link>
                </SubListItem>
              </SubList>
              <MoreInfo>
                <Link href='#'>All lip products</Link>
              </MoreInfo>
            </Column>
            <Column>
              <Category>Face makeup</Category>
              <SubList>
                <SubListItem>
                  <Link href='#'>Foundation</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Face powder</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Concealer</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Blush</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Bronzer</Link>
                </SubListItem>
                <SubListItem>
                  <Link href='#'>Highlighters</Link>
                </SubListItem>
              </SubList>
              <MoreInfo>
                <Link href='#'>All face products</Link>
              </MoreInfo>
            </Column>
            <Column>
              <Category>Tools & consultations</Category>
              <SubList>
                <SubListItem>
                  <Link href='#'>Makeup try-on</Link>
                </SubListItem>
              </SubList>
            </Column>
          </Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>Skin care</Trigger>
          <Content />
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Trigger>Hair color</Trigger>
          <Content />
        </NavigationMenu.Item>
      </List>

      <ViewportPosition>
        <Viewport />
      </ViewportPosition>
    </Root>
  );
};

const Category = styled('span', {
  display: 'block',
  fontSize: 20,
  fontWeight: 600,
  marginBottom: 24,
  textTransform: 'uppercase',
});

const Column = 'div';

const Content = styled(NavigationMenu.Content, {
  boxSizing: 'border-box',
  display: 'flex',
  gap: 48,
  justifyContent: 'space-between',
  left: 0,
  padding: 32,
  position: 'absolute',
  top: 0,
  width: '100%',
});

const Link = styled(NavigationMenu.Link, {
  color: 'inherit',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',

  '&:focus, &:hover': {
    borderBottom: `1px dotted $crimson11`,
    color: '$crimson11',
    marginBottom: '-1px',
  },
});

const List = styled(NavigationMenu.List, {
  display: 'flex',
  gap: 36,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const MoreInfo = styled('div', {
  fontWeight: 600,
  marginTop: 24,
  textTransform: 'uppercase',
});

const Root = styled(NavigationMenu.Root, {
  display: 'flex',

  '@mobile': {
    display: 'none',
  },
});

const SubList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const SubListItem = styled('li');

const Trigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  color: '$gray12',
  cursor: 'pointer',
  fontWeight: 600,
  lineHeight: 1,
  outline: 'none',
  textTransform: 'uppercase',
  userSelect: 'none',

  '&:focus, &:hover': {
    borderBottom: `2px solid $crimson11`,
    color: '$crimson11',
    marginBottom: '-6px',
    paddingBottom: 4,
  },
});

const Viewport = styled(NavigationMenu.Viewport, {
  backgroundColor: '$gray1',
  color: '$gray12',
  height: 'var(--radix-navigation-menu-viewport-height)',
  overflow: 'hidden',
  position: 'relative',
  transformOrigin: 'top center',
  transition: 'width, height, 300ms ease',
  width: '100%',
});

const ViewportPosition = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  top: '100%',
  width: '100dvw',
});

export default AppNavigationMenu;

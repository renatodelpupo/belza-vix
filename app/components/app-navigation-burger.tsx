import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@/stitches.config';

const AppNavigationBurger = () => {
  return (
    <Root id='navigation-burger'>
      <List>
        <NavigationMenu.Item>
          <Trigger>
            Makeup
            <CaretDown aria-hidden />
          </Trigger>
          <Content>
            <NavigationMenu.Sub>
              <ListSecondary>
                <NavigationMenu.Item>
                  <TriggerSecondary>
                    Eye makeup
                    <CaretDown aria-hidden />
                  </TriggerSecondary>
                  <Content>
                    <ListTertiary>
                      <NavigationMenu.Item>
                        <Link href='#'>Mascara</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Eyeliner</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Eyebrow Makeup</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Eye Shadow</Link>
                      </NavigationMenu.Item>
                      <MoreInfo>
                        <Link href='#'>All eye products</Link>
                      </MoreInfo>
                    </ListTertiary>
                  </Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <TriggerSecondary>
                    Lip color
                    <CaretDown aria-hidden />
                  </TriggerSecondary>
                  <Content>
                    <ListTertiary>
                      <NavigationMenu.Item>
                        <Link href='#'>Lipstick</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Liquid lip</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Lip gloss</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Lip liner</Link>
                      </NavigationMenu.Item>
                      <MoreInfo>
                        <Link href='#'>All lip products</Link>
                      </MoreInfo>
                    </ListTertiary>
                  </Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <TriggerSecondary>
                    Face makeup
                    <CaretDown aria-hidden />
                  </TriggerSecondary>
                  <Content>
                    <ListTertiary>
                      <NavigationMenu.Item>
                        <Link href='#'>Foundation</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Face powder</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Concealer</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Blush</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Bronzer</Link>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <Link href='#'>Highlighters</Link>
                      </NavigationMenu.Item>
                      <MoreInfo>
                        <Link href='#'>All face products</Link>
                      </MoreInfo>
                    </ListTertiary>
                  </Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <TriggerSecondary>
                    Tools & consultations
                    <CaretDown aria-hidden />
                  </TriggerSecondary>
                  <Content>
                    <ListTertiary>
                      <NavigationMenu.Item>
                        <Link href='#'>Makeup try-on</Link>
                      </NavigationMenu.Item>
                    </ListTertiary>
                  </Content>
                </NavigationMenu.Item>
              </ListSecondary>
            </NavigationMenu.Sub>
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
    </Root>
  );
};

const CaretDown = styled(CaretDownIcon, {
  position: 'relative',
  top: 1,
  transition: 'transform 250ms ease',
  height: 16,
  width: 16,

  '[data-state=open] > &': {
    transform: 'rotate(-180deg)',
  },

  path: {
    width: '16px',
  },
});

const Content = styled(NavigationMenu.Content, {
  marginBlock: 16,
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
  flexDirection: 'column',
  gap: 24,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const ListSecondary = styled(List, {
  gap: 16,
});

const ListTertiary = styled(List, {
  gap: 8,
});

const MoreInfo = styled(NavigationMenu.Item, {
  textTransform: 'uppercase',
});

const Root = styled(NavigationMenu.Root, {
  display: 'none',
  gridArea: 'nav',
  paddingBlock: 16,

  '@desktop': {
    display: 'none',
  },
});

const Trigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  color: '$gray12',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: 600,
  justifyContent: 'space-between',
  lineHeight: 1,
  outline: 'none',
  textTransform: 'uppercase',
  userSelect: 'none',
  width: '100%',

  '&:focus, &:hover': {
    borderBottom: `2px solid $crimson11`,
    color: '$crimson11',
    marginBottom: '-6px',
    paddingBottom: 4,
  },
});

const TriggerSecondary = styled(Trigger, {
  fontWeight: 400,
});

export default AppNavigationBurger;

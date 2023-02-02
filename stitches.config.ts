import { crimson, crimsonDark, gray, grayDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...crimson,
      ...gray,
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...crimsonDark,
    ...grayDark,
  },
});

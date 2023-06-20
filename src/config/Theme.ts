import { MantineThemeOverride } from '@mantine/core';

export const Theme: MantineThemeOverride = {
  globalStyles: theme => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      color:
        theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
      display: 'grid',
      minHeight: '100vh',
    },
  }),
};

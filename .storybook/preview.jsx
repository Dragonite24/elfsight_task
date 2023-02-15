import { addDecorator } from '@storybook/react';

import 'reset-css';
import '../src/global-styles/index.scss';
import '../src/global-styles/_variables.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

addDecorator((storyFn) => {
  return <div style={{ padding: 20 }}>{storyFn()}</div>;
});

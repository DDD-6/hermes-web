import { Fragment } from 'react';

import GlobalStyle from '../src/styles/GlobalStyle';
import StorybookStyle from './styles/StorybookStyle';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withGlobalStyle = (Story) => (
  <Fragment>
    <GlobalStyle />
    <StorybookStyle />
    <Story />
  </Fragment>
)

export const decorators = [withGlobalStyle];

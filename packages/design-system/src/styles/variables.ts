import { css } from '@emotion/react';

import { colors } from './colors';

export const variables = css`
  :root {
    /* Hermes Color System */
    // Gray Scale
    --white: ${colors.white};
    --grey-1: ${colors.grey1};
    --grey-2: ${colors.grey2};
    --grey-3: ${colors.grey3};
    --grey-4: ${colors.grey4};
    --grey-5: ${colors.grey5};
    --grey-6: ${colors.grey6};
    --grey-7: ${colors.grey7};
    --grey-8: ${colors.grey8};
    --grey-9: ${colors.grey9};
    --grey-10: ${colors.grey10};
    --grey-11: ${colors.grey11};
    --grey-12: ${colors.grey12};
    --grey-13: ${colors.grey13};
    --black: ${colors.black};
    // Primary Scale
    --primary: ${colors.primary};
    --primary-d1: ${colors.primaryD1};
    --primary-d2: ${colors.primaryD2};
    --primary-l1: ${colors.primaryL1};
    --primary-l2: ${colors.primaryL2};
    // Secondary Scale
    --secondary: ${colors.secondary};
    --secondary-d1: ${colors.secondaryD1};
    --secondary-d2: ${colors.secondaryD2};
    --secondary-l1: ${colors.secondaryL1};
    --secondary-l2: ${colors.secondaryL2};
    // Alert
    --error: ${colors.error};
    --success: ${colors.success};
  }
`;

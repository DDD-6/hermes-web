/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import Image, { ImageProps } from './Image';

const dummyImage =
  'https://www.eatlovesavor.com/wp-content/uploads/2016/05/orange-hermes-box.jpg';

export default {
  title: 'Base / Image',
  components: Image,
  args: {
    src: dummyImage,
    width: 700,
    height: 400,
  },
} as Meta;

const ImageBase: Story<ImageProps> = (args) => {
  const handleLoadComplete = () => {
    console.log('load complete');
  };

  const handleLoadError = () => {
    console.log('load error');
  };

  return (
    <Image
      {...args}
      onLoadComplete={handleLoadComplete}
      onLoadError={handleLoadError}
    />
  );
};

export const Base = ImageBase.bind({});

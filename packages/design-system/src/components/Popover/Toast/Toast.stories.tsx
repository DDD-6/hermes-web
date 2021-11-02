import { VStack } from '../../../components/Layout/StackContainer';
import Toast from './Toast';

export default {
  title: 'Popover / Toast',
  components: Toast,
  args: {
    isTextCentered: true,
    text: '토스트 팝업',
    width: 300,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
};

export const Base = (args) => {
  return (
    <VStack gap={30}>
      <Toast type="initial" {...args} />
      <Toast type="error" {...args} />
    </VStack>
  );
};

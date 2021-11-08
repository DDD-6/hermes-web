import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { Icon } from '../../Base/Icon';
import { VStack } from '../../Layout/StackContainer';

const Component = styled.div`
  padding: 30px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64px;
  height: 100vh;
  background-color: ${colors.grey12};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`;

interface ProfileProps {
  src: string;
}

const Profile = styled.div<ProfileProps>`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
const Nav = styled.nav`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  &:hover {
    svg {
      color: ${colors.black};
    }
  }
`;

export interface MenuBarProps {
  profileSrc: string;
}

type MenuType = 'UilEstate' | 'UilBell' | 'UilUser' | 'UilPen';

const MenuBar = (props: MenuBarProps) => {
  const { profileSrc } = props;
  const [menu, setMenu] = useState<MenuType>('UilEstate');
  const onClick = useCallback((iconName: MenuType) => {
    setMenu(iconName);
  }, []);
  useEffect(() => {
    // 각 메뉴에 따른 API 호출
    console.log(menu);
  }, [menu]);
  return (
    <Component>
      <Profile src={profileSrc} />
      <Nav>
        <VStack gap={20}>
          <Button
            className="hermes-menubar-button"
            onClick={() => onClick('UilEstate')}
          >
            <Icon
              name="UilEstate"
              color={menu === 'UilEstate' ? colors.white : colors.grey6}
              display="block"
            />
          </Button>
          <Button
            className="hermes-menubar-button"
            onClick={() => onClick('UilBell')}
          >
            <Icon
              name="UilBell"
              color={menu === 'UilBell' ? colors.white : colors.grey6}
              display="block"
            />
          </Button>
          <Button
            className="hermes-menubar-button"
            onClick={() => onClick('UilUser')}
          >
            <Icon
              name="UilUser"
              color={menu === 'UilUser' ? colors.white : colors.grey6}
              display="block"
            />
          </Button>
          <Button
            className="hermes-menubar-button write"
            onClick={() => onClick('UilPen')}
          >
            <Icon
              name="UilPen"
              color={menu === 'UilPen' ? colors.white : colors.grey6}
              display="block"
            />
          </Button>
        </VStack>
      </Nav>
      <Button />
    </Component>
  );
};

export default MenuBar;

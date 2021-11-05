import React from 'react';
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
      color: ${colors.white};
    }
  }
`;

const MenuBar = () => {
  return (
    <Component>
      <Profile src="https://www.eatlovesavor.com/wp-content/uploads/2016/05/orange-hermes-box.jpg" />
      <Nav>
        <VStack gap={20}>
          <Button className="hermes-menubar-button">
            <Icon name="UilEstate" color={colors.grey4} display="block" />
          </Button>
          <Button className="hermes-menubar-button">
            <Icon name="UilBell" color={colors.grey4} display="block" />
          </Button>
          <Button className="hermes-menubar-button">
            <Icon name="UilUser" color={colors.grey4} display="block" />
          </Button>
          <Button className="hermes-menubar-button write">
            <Icon name="UilPen" color={colors.grey4} display="block" />
          </Button>
        </VStack>
      </Nav>
      <Button />
    </Component>
  );
};

export default MenuBar;

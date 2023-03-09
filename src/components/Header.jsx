import { HStack, List } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <HStack
      as="header"
      p={5}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
    >
      <HStack as="nav" justify="space-between" width="full">
        <List display="flex" flexGrow={1} columnGap={5}>
          <HeaderLink link={null} />
          <HeaderLink link="counter" />
          <HeaderLink link="tasks" />
          <HeaderLink link="coctails" />
        </List>
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
};

export default Header;

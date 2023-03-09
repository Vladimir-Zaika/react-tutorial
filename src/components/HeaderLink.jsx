import { ListItem, Link, useColorModeValue } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

const HeaderLink = ({ link }) => {
  return (
    <ListItem>
      <Link
        as={RouterLink}
        to={link ?? '.'}
        px={2}
        py={1}
        rounded="md"
        textTransform="capitalize"
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        end
      >
        {link ?? 'Home'}
      </Link>
    </ListItem>
  );
};

export default HeaderLink;

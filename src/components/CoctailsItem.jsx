import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
} from '@chakra-ui/react';

const CoctailsItem = ({ name, image, id }) => {
  return (
    <ListItem>
      <Card>
        <CardBody>
          <HStack>
            <Image
              src={image}
              alt={name}
              maxW={100}
              objectFit="cover"
              borderRadius="lg"
            />
            <Link as={RouterLink} to={id}>
              <Heading as="h4" size="md">
                {name}
              </Heading>
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </ListItem>
  );
};

export default CoctailsItem;

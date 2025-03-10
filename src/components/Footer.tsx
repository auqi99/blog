import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10} mt={10}>
      <Container maxW="6xl">
        <Stack spacing={5} textAlign="center">
          <Text fontSize="md" color="gray.400">
            Sharing knowledge and insights on education and sports.
          </Text>

          <HStack spacing={4} justify="center">
            <IconButton
              as={Link}
              href="https://instagram.com/yourprofile"
              target="_blank"
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="pink"
            />
            <IconButton
              as={Link}
              href="https://twitter.com/yourprofile"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="twitter"
            />
            <IconButton
              as={Link}
              href="https://facebook.com/yourprofile"
              target="_blank"
              aria-label="Facebook"
              icon={<FaFacebookF />}
              colorScheme="facebook"
            />
          </HStack>

          <Divider borderColor="gray.600" />

          <Text fontSize="sm" color="gray.500">
            &copy; {new Date().getFullYear()} Education and Sports Blog. All
            rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

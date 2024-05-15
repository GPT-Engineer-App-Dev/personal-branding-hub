import { Container, Text, VStack, Heading, Box, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I'm a web developer passionate about creating interactive and dynamic user experiences.</Text>
        </Box>
        <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Picture" />
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        </HStack>
        <Button colorScheme="teal" size="lg">Get in Touch</Button>
      </VStack>
    </Container>
  );
};

export default Index;
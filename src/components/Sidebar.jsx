import { Box, Text, VStack, Heading } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      width="250px"
      bg="gray.100"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Box>
        <Heading size="md" mb={2}>
          Project Name
        </Heading>
        <Text mb={6}>Category</Text>
        <VStack align="start" spacing={4}>
          <Text>Call Tool</Text>
          <Text>Invoice Tool</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
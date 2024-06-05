import { Box, Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle, FaUserCircle, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <Box
      as="header"
      width="100%"
      bg="white"
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="sm"
    >
      <Heading size="md">Data Table</Heading>
      <HStack spacing={4}>
        <Button leftIcon={<FaPlus />} colorScheme="teal">
          Add report
        </Button>
        <IconButton icon={<FaQuestionCircle />} aria-label="Help" />
        <IconButton icon={<FaBell />} aria-label="Notifications" />
        <IconButton icon={<FaUserCircle />} aria-label="User" />
      </HStack>
    </Box>
  );
};

export default Header;
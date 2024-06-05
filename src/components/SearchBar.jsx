import { Box, Input, Select, HStack, IconButton, Button } from "@chakra-ui/react";
import { FaFilter, FaSort, FaUpload, FaDownload } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Box
      as="section"
      width="100%"
      bg="white"
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="sm"
      mb={4}
    >
      <HStack spacing={4}>
        <Input placeholder="Search" />
        <Select placeholder="Category">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <IconButton icon={<FaFilter />} aria-label="Filter" />
        <IconButton icon={<FaSort />} aria-label="Sort" />
      </HStack>
      <HStack spacing={4}>
        <Button leftIcon={<FaUpload />} colorScheme="blue">
          Import
        </Button>
        <Button leftIcon={<FaDownload />} colorScheme="blue">
          Export
        </Button>
      </HStack>
    </Box>
  );
};

export default SearchBar;
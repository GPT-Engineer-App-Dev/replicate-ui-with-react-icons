import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DataTable from "../components/DataTable";

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" display="flex" flexDirection="column">
        <Header />
        <SearchBar />
        <DataTable />
      </Box>
    </Flex>
  );
};

export default Index;
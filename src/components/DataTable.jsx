import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = () => {
  const data = Array(10).fill({
    item: "Lorem dolore",
    value: "9,000",
    dataSeries: "Data series",
    date: "DD/MM/YY",
    status: "Status",
  });

  return (
    <Box as="section" width="100%" bg="white" p={4} boxShadow="sm">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>ITEM</Th>
            <Th>VALUE ($)</Th>
            <Th>DATA</Th>
            <Th>DATA</Th>
            <Th>STATUS</Th>
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox />
              </Td>
              <Td>{row.item}</Td>
              <Td>{row.value}</Td>
              <Td>{row.dataSeries}</Td>
              <Td>{row.date}</Td>
              <Td>
                <Button size="sm">{row.status}</Button>
              </Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton icon={<FaEdit />} aria-label="Edit" size="sm" />
                  <IconButton icon={<FaTrash />} aria-label="Delete" size="sm" />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Text>106 results</Text>
        <HStack spacing={2}>
          <Button size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button size="sm">3</Button>
          <Button size="sm">4</Button>
          <Button size="sm">...</Button>
          <Button size="sm">10</Button>
          <Button size="sm">11</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default DataTable;
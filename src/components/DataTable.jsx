import { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button, HStack, IconButton, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, useDisclosure } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState(Array(10).fill({
    item: "Lorem dolore",
    value: "9,000",
    dataSeries: "Data series",
    date: "DD/MM/YY",
    status: "Status",
  }));
  const [currentReport, setCurrentReport] = useState(null);
  const [newReport, setNewReport] = useState({ item: "", value: "", dataSeries: "", date: "", status: "" });

  const handleAddReport = () => {
    setData([...data, newReport]);
    setNewReport({ item: "", value: "", dataSeries: "", date: "", status: "" });
    onClose();
  };

  const handleEditReport = (index) => {
    const updatedData = data.map((report, i) => (i === index ? currentReport : report));
    setData(updatedData);
    setCurrentReport(null);
    onClose();
  };

  const handleDeleteReport = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <Box as="section" width="100%" bg="white" p={4} boxShadow="sm">
      <Button onClick={onOpen} colorScheme="teal" mb={4}>Add Report</Button>
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
                  <IconButton icon={<FaEdit />} aria-label="Edit" size="sm" onClick={() => { setCurrentReport(row); onOpen(); }} />
                  <IconButton icon={<FaTrash />} aria-label="Delete" size="sm" onClick={() => handleDeleteReport(index)} />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Text>{data.length} results</Text>
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currentReport ? "Edit Report" : "Add Report"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Item"
              value={currentReport ? currentReport.item : newReport.item}
              onChange={(e) => currentReport ? setCurrentReport({ ...currentReport, item: e.target.value }) : setNewReport({ ...newReport, item: e.target.value })}
              mb={3}
            />
            <Input
              placeholder="Value"
              value={currentReport ? currentReport.value : newReport.value}
              onChange={(e) => currentReport ? setCurrentReport({ ...currentReport, value: e.target.value }) : setNewReport({ ...newReport, value: e.target.value })}
              mb={3}
            />
            <Input
              placeholder="Data Series"
              value={currentReport ? currentReport.dataSeries : newReport.dataSeries}
              onChange={(e) => currentReport ? setCurrentReport({ ...currentReport, dataSeries: e.target.value }) : setNewReport({ ...newReport, dataSeries: e.target.value })}
              mb={3}
            />
            <Input
              placeholder="Date"
              value={currentReport ? currentReport.date : newReport.date}
              onChange={(e) => currentReport ? setCurrentReport({ ...currentReport, date: e.target.value }) : setNewReport({ ...newReport, date: e.target.value })}
              mb={3}
            />
            <Input
              placeholder="Status"
              value={currentReport ? currentReport.status : newReport.status}
              onChange={(e) => currentReport ? setCurrentReport({ ...currentReport, status: e.target.value }) : setNewReport({ ...newReport, status: e.target.value })}
              mb={3}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={currentReport ? () => handleEditReport(data.indexOf(currentReport)) : handleAddReport}>
              {currentReport ? "Save Changes" : "Add Report"}
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DataTable;
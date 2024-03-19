import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import Topheader from "./topheader"
import { EditIcon, DeleteIcon, PhoneIcon } from "@chakra-ui/icons";

const Studentlist = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [updatedList, setUpdatedList] = useState();
  const [studentlist, setStudentlist] = useState({
    id: "",
    studentname: "",
    enrollmentno: "",
    email: "",
    phoneno: "",
    joiningdate: "",
    enddate: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, [updatedList]);

  const addvalueChange = (e) => {
    const value = e.target.value;
    setStudentlist({
      ...studentlist,
      [e.target.name]: value,
    });
  };

  const addList = (e) => {
    e.preventDefault();
    const userData = {
      id: studentlist.id,
      studentname: studentlist.studentname,
      enrollmentno: studentlist.enrollmentno,
      email: studentlist.email,
      phoneno: studentlist.phoneno,
      joiningdate: studentlist.joiningdate,
      enddate: studentlist.enddate,
    };
    axios.post("http://localhost:4000/users", userData).then((response) => {
      console.warn(response.status, response.studentlist);
      setUpdatedList(!updatedList);
    });
    toast({
      title: `${userData.studentname}`,
      description: "Successfully add this student.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Topheader />
      {/* add create design */}
      <form onSubmit={addList}>
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          pb="10"
          pt="3"
          pr="2">
          <Box width="44">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                name="studentname"
                placeholder="Enter Student Name"
                onChange={addvalueChange}
                value={studentlist.studentname}
                isRequired
              />
            </InputGroup>
          </Box>
          <Box width="44">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                name="enrollmentno"
                placeholder="Enter Enrollment No"
                onChange={addvalueChange}
                value={studentlist.enrollmentno}
                isRequired
              />
            </InputGroup>
          </Box>
          <Box width="44">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                name="email"
                placeholder="Enter Email Id"
                onChange={addvalueChange}
                value={studentlist.email}
                isRequired
              />
            </InputGroup>
          </Box>
          <Box width="44">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="number"
                name="phoneno"
                placeholder="Enter Contact No"
                onChange={addvalueChange}
                value={studentlist.phoneno}
                isRequired
              />
            </InputGroup>
          </Box>
          <Box width="44">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="datetime-local"
                name="joiningdate"
                placeholder="Enter Joining Date"
                onChange={addvalueChange}
                value={studentlist.joiningdate}
                isRequired
              />
            </InputGroup>
          </Box>
          <Box width="44">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="datetime-local"
                name="enddate"
                placeholder="Enter Session End Date"
                onChange={addvalueChange}
                value={studentlist.enddate}
                isRequired
              />
            </InputGroup>
          </Box>
          <ButtonGroup gap="2">
            <Button colorScheme="teal" type="submit">
              Add Student
            </Button>
          </ButtonGroup>
        </Flex>
      </form>

      {/* end create design */}

      {/* show data in table */}
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Student Name</Th>
              <Th>Enrollment No</Th>
              <Th>Email</Th>
              <Th>Contact NO</Th>
              <Th>Joining Date</Th>
              <Th>Session End</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody maxWidth="100%">
            {data.map((user, index) => (
              <Tr key={index}>
                <Td>{user.id}</Td>
                <Td>{user.studentname}</Td>
                <Td>{user.enrollmentno}</Td>
                <Td>{user.email}</Td>
                <Td>{user.phoneno}</Td>
                <Td>{user.joiningdate}</Td>
                <Td>{user.enddate}</Td>
                <Td>
                  <Flex gap="2">
                    <Box>
                      <Button color="blue">
                        <EditIcon />
                      </Button>
                    </Box>
                    <Box>
                      <Button color="red">
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Studentlist;

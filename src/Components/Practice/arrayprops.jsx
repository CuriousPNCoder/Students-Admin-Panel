import React, { useState } from "react";
import {
  Flex,
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  CardFooter,
  Button,
  Box,
  Spacer,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Modalform from "./modalform";
import Topheader from "./topheader";

const Arrayprops = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalName, setmodalName] = useState();

  const students = [
    {
      id: 1,
      name: "Rachhel Das",
      rollno: 98760221,
      course: "MCA",
      joiningdate: "02/09/2024",
      studentinfo:
        "A student is a person enrolled in a school or other educational institution. In the United Kingdom and most commonwealth countries, a student attends a secondary school or higher",
      buttonname: "Know More",
    },
    {
      id: 2,
      name: "Anisha Pal",
      rollno: 98760221,
      course: "MBA",
      joiningdate: "02/09/2023",
      studentinfo:
        "A student is a person enrolled in a school or other educational institution. In the United Kingdom and most commonwealth countries, a student attends a secondary school or higher",
      buttonname: "Know More",
    },
    {
      id: 3,
      name: "Joy Kumar",
      rollno: 98760221,
      course: "BBA",
      joiningdate: "02/09/2024",
      studentinfo:
        "A student is a person enrolled in a school or other educational institution. In the United Kingdom and most commonwealth countries, a student attends a secondary school or higher",
      buttonname: "Know More",
    },
    {
      id: 4,
      name: "Manish Saha",
      rollno: 897656434,
      course: "MCOM",
      joiningdate: "02/09/2024",
      studentinfo:
        "A student is a person enrolled in a school or other educational institution. In the United Kingdom and most commonwealth countries, a student attends a secondary school or higher",
      buttonname: "Know More",
    },
    {
      id: 5,
      name: "Ankit Pal",
      rollno: 897656434,
      course: "CSE",
      joiningdate: "02/09/2024",
      studentinfo:
        "A student is a person enrolled in a school or other educational institution. In the United Kingdom and most commonwealth countries, a student attends a secondary school or higher",
      buttonname: "Know More",
    },
  ];
  const modalOpen = (name) => {
    onOpen();
    setmodalName(name);
  };

  return (
    <>
      <Topheader />
      <Box display="flex" flexWrap="wrap" gap="4" p="5" bg="#ecf7ff">
        {students.map((student) => (
          <Card
            key={student.id}
            overflow="hidden"
            variant="outline"
            width={{ base: "100%", md: "32%" }}>
            <Stack>
              <CardBody>
                <Flex>
                  <Heading size="md">{student.name}</Heading>
                  <Spacer />
                  <Text>
                    <Badge colorScheme="green">{student.rollno}</Badge>
                  </Text>
                </Flex>

                <Text py="2">Course: {student.course}</Text>
                <Text py="1">Joining Date: {student.joiningdate}</Text>

                <Text py="2">{student.studentinfo}</Text>
                <CardFooter>
                  <Button
                    onClick={() => modalOpen(student.name)}
                    rightIcon={<ArrowForwardIcon />}
                    variant="solid"
                    colorScheme="blue">
                    {student.buttonname}
                  </Button>
                </CardFooter>
              </CardBody>
            </Stack>
          </Card>
        ))}
        <Modalform isOpen={isOpen} onClose={onClose} modalName={modalName} />
      </Box>
    </>
  );
};

export default Arrayprops;

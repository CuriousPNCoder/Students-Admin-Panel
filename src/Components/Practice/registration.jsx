import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
  useToast,
  Flex,
  Spacer
} from "@chakra-ui/react";
const Registration = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [studentinfo, setStudentinfo] = useState({
    studentname: "",
    enrollmentno: "",
    emailaddress: "",
    contactno: "",
    permanentaddress: ""
  });

  const formSubmit = (e) => {
    e.preventDefault();
       toast({
         title: `${studentinfo.studentname}`,
         description: "Your account successfully registered.",
         status: "success",
         duration: 9000,
         isClosable: true,
       });
    console.log("Student List", studentinfo);
    navigate("/");
  }
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Card
          width="41%"
          position="absolute"
          height="470"
          top="40px"
          left="30%"
          borderRadius="20px">
          <CardHeader>
            <CardBody>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                pb="2">
                <Text fontSize="3xl" as="b" bgClip="text" color="black">
                  Admin Pannle
                </Text>
              </Box>
              <form onSubmit={formSubmit}>
                <FormControl>
                  <FormLabel pb="2" pt="4">
                    User Name
                  </FormLabel>
                  <Input
                    type="text"
                    name="studentname"
                    id="studentname"
                    onChange={(e) =>
                      setStudentinfo({
                        ...studentinfo,
                        studentname: e.target.value,
                      })
                    }
                    value={studentinfo.studentname}
                    isRequired
                  />
                  <Flex>
                    <Box>
                      <FormLabel pb="2" pt="2">
                        Admin User No
                      </FormLabel>
                      <Input
                        type="text"
                        name="enrollmentno"
                        id="enrollmentno"
                        onChange={(e) =>
                          setStudentinfo({
                            ...studentinfo,
                            enrollmentno: e.target.value,
                          })
                        }
                        value={studentinfo.enrollmentno}
                        isRequired
                      />
                    </Box>
                    <Spacer />
                    <Box>
                      <FormLabel pb="2" pt="2">
                        Email Address
                      </FormLabel>
                      <Input
                        type="email"
                        name="emailaddress"
                        id="emailaddress"
                        onChange={(e) =>
                          setStudentinfo({
                            ...studentinfo,
                            emailaddress: e.target.value,
                          })
                        }
                        value={studentinfo.emailaddress}
                        isRequired
                      />
                    </Box>
                  </Flex>
                  <Flex>
                    <Box>
                      <FormLabel pb="2" pt="2">
                        Permanent Address
                      </FormLabel>
                      <Input
                        type="text"
                        name="permanentaddress"
                        id="permanentaddress"
                        onChange={(e) =>
                          setStudentinfo({
                            ...studentinfo,
                            permanentaddress: e.target.value,
                          })
                        }
                        value={studentinfo.permanentaddress}
                        isRequired
                      />
                    </Box>
                    <Spacer />
                    <Box>
                      <FormLabel pb="2" pt="2">
                        Contact No
                      </FormLabel>
                      <Input
                        type="number"
                        name="contactno"
                        id="contactno"
                        onChange={(e) =>
                          setStudentinfo({
                            ...studentinfo,
                            contactno: e.target.value,
                          })
                        }
                        value={studentinfo.contactno}
                        isRequired
                      />
                    </Box>
                  </Flex>
                  <Box
                    pt="8"
                    justifyContent="center"
                    alignItems="center"
                    display="flex">
                    <Button
                      type="submit"
                      width="100%"
                      color="white"
                      borderRadius="15px"
                      variant="solid"
                      colorScheme="blue"
                      p={5}> Submit
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </CardBody>
          </CardHeader>
        </Card>
      </Box>
    </>
  );
};

export default Registration;

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const Modalform = ({ isOpen, onClose, modalName }) => {
  const [username, setUsername] = useState('');
  const [userfather, setUserfather] = useState('');
  const [usernumber, setUsernumber] = useState('');
  const [useraddress, setUseraddress] = useState('');

  const submitDetails = (e) => {
    e.preventDefault();
    console.log("All the user student data", username, userfather, usernumber, useraddress);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={submitDetails}>
            <ModalHeader>{modalName}</ModalHeader>
            <Text pl="6">Please, add your detail information</Text>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  id="fullname"
                  name="fullname"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Father Name</FormLabel>
                <Input type="text" id="fathername" name="fathername" onChange={(e) => {
                  setUserfather(e.target.value)
                }}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Contact No</FormLabel>
                <Input type="number" id="contactno" name="contactno" onChange={(e) => {
                  setUsernumber(e.target.value)
                }} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Permanent Address</FormLabel>
                <Input type="text" id="address" name="address" onChange={(e) => {
                  setUseraddress(e.target.value)
                }}/>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modalform;

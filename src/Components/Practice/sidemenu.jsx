import React from "react";
import {
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerCloseButton,
  Box
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { HamburgerIcon, DragHandleIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const Sidemenu = () => {
  const CssWrapper = styled.div`
    .chakra-modal__header {
      -webkit-flex: 0;
      -ms-flex: 0;
      flex: 0;
      -webkit-padding-start: var(--chakra-space-6);
      padding-inline-start: var(--chakra-space-6);
      -webkit-padding-end: var(--chakra-space-6);
      padding-inline-end: var(--chakra-space-6);
      padding-top: var(--chakra-space-4);
      padding-bottom: var(--chakra-space-4);
      font-size: var(--chakra-fontSizes-xl);
      font-weight: var(--chakra-fontWeights-semibold);
      border-bottom-width: 1px;
      background-color: #3182ce !important;
      color: white !important;
    }
  `;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CssWrapper>
        <Button onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="white" />

            <DrawerHeader bg="#3182ce" color="white" borderBottomWidth="1px">
              Student's Panel
            </DrawerHeader>
            <DrawerBody>
              <Box pb="3">
                <NavLink to="/">
                  <p>
                    <DragHandleIcon/>
                    Home
                  </p>
                </NavLink>
              </Box>
              <Box>
                <NavLink to="/studentlist">
                  <p>Student List</p>
                </NavLink>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </CssWrapper>
    </>
  );
};

export default Sidemenu;

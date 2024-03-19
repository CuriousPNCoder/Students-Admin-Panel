import React from 'react'
import {
  Box,
  Flex,
  MenuItem,
  Heading,
  Spacer,
  Image,
  MenuButton,
  MenuList,
  MenuGroup,
  Menu,
  MenuDivider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { TriangleDownIcon } from "@chakra-ui/icons";
import Sidemenu from './sidemenu';
import styled from '@emotion/styled';
const Topheader = () => {
    
    const CssWrapper = styled.div`
      .css-wm6tyg {
        width: 1em;
        height: 1em;
        display: inline-block;
        line-height: 1em;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        color: currentColor;
        vertical-align: middle;
        background: var(--chakra-colors-white);
        color: red !important;
      }
    `;
  return (
    <>
      <CssWrapper>
        <Flex minWidth="max-content" alignItems="center" gap="2" bg="#3182ce">
          <Box p="2">
            <Heading size="md">
              <Sidemenu />
            </Heading>
          </Box>
          <Spacer />
          <Box p={2}>
            <Menu>
              <MenuButton>
                <Flex>
                  <Box>
                    <Image
                      borderRadius="full"
                      boxSize="40px"
                      src="https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Dan Abramov"
                    />
                  </Box>
                  <Box p="2">
                    <TriangleDownIcon color="white" />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <NavLink to="/registration">
                    <MenuItem>Logout</MenuItem>
                  </NavLink>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </CssWrapper>
    </>
  );
}

export default Topheader
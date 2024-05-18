import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const AppMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        backgroundColor={"#FF4655"}
        border={"none"}
      />
      <MenuList color={"#FF4655"}>
        <MenuItem as="a" href="/">
          Home
        </MenuItem>
        <MenuItem as="a" href="/agents">
          Agents
        </MenuItem>
        <MenuItem as="a" href="/weapons">
          Weapons
        </MenuItem>
        <MenuItem as="a" href="/sprays">
          Sprays
        </MenuItem>
        <MenuItem as="a" href="/buddies">
          Buddies
        </MenuItem>
        <MenuItem as="a" href="/maps">
          Maps
        </MenuItem>
        <MenuItem as="a" href="/bundles">
          Bundles
        </MenuItem>
        <MenuItem as="a" href="/cards">
          Cards
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AppMenu;

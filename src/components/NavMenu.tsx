import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react"
import React from "react";

const NavMenu = () => {
  
  return (
    <>
    <Menu>
      <MenuButton as={Button}>
        Imagens de Bom Dia
      </MenuButton>
      <MenuList>
        <MenuItem>Mãe</MenuItem>
        <MenuItem>Pai</MenuItem>
        <MenuItem>Igreja</MenuItem>
        <MenuItem>Trabalho</MenuItem>
        <MenuItem>Netos</MenuItem>
      </MenuList>
    </Menu>
    </>
  )
}

export default NavMenu;

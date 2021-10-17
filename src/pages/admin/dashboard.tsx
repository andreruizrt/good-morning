import React, { Component } from "react";
import { StaticRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";

import AddMessage from "../../components/Message/add-messagem.component";
import Message from "../../components/Message/message.component";
import MessagesList from "../../components/Message/messages-list.component";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Box>
          <Menu>
            <MenuButton>
              <Link to={"/messages"}>
                Mensagens de BOM DIA
              </Link>
            </MenuButton>

            <MenuList>
              <MenuItem  minH="48px">
              <Link to={"/messages"}>
                  Mensagens
                </Link>
              </MenuItem>
              <MenuItem minH="40px">
                <Link to={"/add"}>
                  Adicionar
                </Link>
              </MenuItem>
              <MenuItem  minH="48px">
                <Link to={"/messages/:id"}>
                  Lista de Mensagens
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <Box>
            <Switch>
              <Route exact path={["/", "/messages"]} component={MessagesList} />
              <Route exact path="/add" component={AddMessage} />
              <Route path="/messages/:id" component={Message} />
            </Switch>
          </Box>
        </Box>
      </Router>
    );
  }
}

export default Dashboard;
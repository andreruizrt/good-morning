import { Component, ChangeEvent } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Menu,
  MenuItem,
  MenuList
} from "@chakra-ui/react";

import MessageDataService from "../../services/message.service";
import IMessageData from '../../types/message.type';
import { Link } from "react-router-dom";

type Props = {};

type State = {
  messages: Array<IMessageData>,
  currentMessage: IMessageData | null,
  currentIndex: number,
  searchTitle: string
};

export default class MessagesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveMessages = this.retrieveMessages.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMessage = this.setActiveMessage.bind(this);
    this.removeAllMessages = this.removeAllMessages.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      messages: [],
      currentMessage: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveMessages();
  }

  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveMessages() {
    MessageDataService.getAll()
      .then(response => {
        this.setState({
          messages: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveMessages();
    this.setState({
      currentMessage: null,
      currentIndex: -1
    });
  }

  setActiveMessage(message: IMessageData, index: number) {
    this.setState({
      currentMessage: message,
      currentIndex: index
    });
  }

  removeAllMessages() {
    MessageDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentMessage: null,
      currentIndex: -1
    });

    MessageDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          messages: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, messages, currentMessage, currentIndex } = this.state;

    return (
      <Box>
        <Box>
          <Box p={5}>
            <Input
              maxW="30%"
              type="text"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <Box marginTop={2}>
              <Button
                onClick={this.searchTitle}
              >
                Pesquisar
              </Button>
            </Box>
          </Box>
        </Box>
        <Box p={3}>
          <Text marginBottom={4} fontSize="1xl">Apagar todas as mensagens</Text>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={this.removeAllMessages}
          >
            Remover todas
          </Button>
        </Box>

        <Box p={2} m={3}>
          <Text fontSize="2xl">Lista de mensagens</Text>
          <Box m={3}>
            <ul>
              {messages &&
                messages.map((message: IMessageData, index: number) => (
                  <li
                    onClick={() => this.setActiveMessage(message, index)}
                    key={index}
                  >
                    {message.content}
                  </li>
                ))}
            </ul>
          </Box>
        </Box>

        <Box marginLeft={5}>
          {currentMessage ? (
            <Box>
              <Text fontSize="xl">Dados da mensagem:</Text>
              <Box>
                <label>
                  <strong>Conteúdo:</strong>
                </label>{" "}
                {currentMessage.content}
              </Box>
              <Box>
                <label>
                  <strong>Category:</strong>
                </label>{" "}
                {currentMessage.category}
              </Box>
              <Box>
                <label>
                  <strong>Data de criação:</strong>
                </label>{" "}
                {currentMessage.createdAt}
              </Box>
              <Box>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentMessage.published ? "Published" : "Pending"}
              </Box>

              <Link
                to={"/messages/" + currentMessage.id}
              >
                Editar
              </Link>
            </Box>
          ) : (
            <Box>
              <p>Por favor, clique em uma Mensagem...</p>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
}
import { Component, ChangeEvent } from "react";
import messageDataService from "../../services/message.service";
import IMessageData from "../../types/message.type";

import { 
  Box,
  Input,
  Button,
  Text
 } from "@chakra-ui/react";

type Props = {};

type State = IMessageData & {
  submitted: boolean
};


export default class AddMessage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
    this.newMessage = this.newMessage.bind(this);

    this.state = {
      id: null,
      content: "",
      source: "",
      published: false,
      category: "",
      createdAt: "",
      submitted: false
    };
  }

  onChangeContent(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      content: e.target.value
    });
  }

  onChangeSource(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      source: e.target.value
    });
  }

  onChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      category: e.target.value
    });
  }

  saveMessage() {
    const data: IMessageData = {
      content: this.state.content,
      source: this.state.source,
      category: this.state.category,
      createdAt: this.state.createdAt
    };

    messageDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          content: response.data.content,
          source: response.data.source,
          category: response.data.category,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newMessage() {
    this.setState({
      id: null,
      content: "",
      source: "",
      category: "",
      published: false,
      createdAt: "",
      submitted: false
    });
  }

  render() {
    const { submitted, content, source, category } = this.state;

    return (
      <Box>
        {submitted ? (
          <Box>
            <Text h="2xl">Você enviou com sucesso!</Text>
            <Button onClick={this.newMessage}>
              Add
            </Button>
          </Box>
        ) : (
          <Box>
            <Box>
              <label htmlFor="content">Content</label>
              <Input
                type="text"
                id="content"
                required
                value={content}
                onChange={this.onChangeContent}
                name="content"
              />
            </Box>

            <Box>
              <label htmlFor="source">Source</label>
              <Input
                type="text"
                id="source"
                required
                value={source}
                onChange={this.onChangeSource}
                name="source"
              />
            </Box>
            
            <Box>
              <label htmlFor="category">Category</label>
              <Input
                type="text"
                id="category"
                required
                value={category}
                onChange={this.onChangeCategory}
                name="category"
              />
            </Box>

            <Button onClick={this.saveMessage}>
              Submit
            </Button>
          </Box>
        )}
      </Box>
    );
  }
}
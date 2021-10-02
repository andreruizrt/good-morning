import { Button, Box } from "@chakra-ui/react";
import Link from 'next/link'

interface ButtonProps {
  mensagem: string,
  placehorder: string,
  color: string;
}

const ClipboardButton = (prop: ButtonProps) => {
  return (
    <Box p={"15px 0 2px 2px"}>
      <Button
        colorScheme={prop.color}
        size="sm"
        onClick={() => {
          try {
            navigator.clipboard.writeText(prop.mensagem)
            alert("Copiado para o Clipboard!")
          } catch (e) {
            console.log(e)
          }
        }}>
        {prop.placehorder}
      </Button>
    </Box>
  );
}

export default ClipboardButton;
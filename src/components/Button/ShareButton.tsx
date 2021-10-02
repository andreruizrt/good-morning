import { Button, Box } from "@chakra-ui/react";
import Link from 'next/link'

interface ButtonProps {
  color: string;
  mensagem: string,
  placehorder: string,
}

const ShareButton = (prop: ButtonProps) => {

  const sanitizedMessage = prop.mensagem.replace(/ /g, "%20")

  return (
    <Box p={"15px 0 2px 2px"}>
      <Link href={`https://api.whatsapp.com/send?text=${sanitizedMessage}`}>
        <Button
          colorScheme={prop.color}
          size="sm">
          {prop.placehorder}
        </Button>
      </Link>
    </Box>
  )
}

export default ShareButton;
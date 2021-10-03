import {
  Box,
  Text
} from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import NavMenu from '../components/NavMenu';
import Card from '../components/Cards/Card';
import ImageCard from '../components/Cards/ImageCard';
import mensagens from '../data/mensagens.json'

const Index = () => {
  const data = Object.entries(mensagens);

  const messagem1 = data[1][1]
  const messagem2 = data[2][1]
  const messagem3 = data[3][1]
  const messagem4 = data[4][1]
  const messagem5 = data[5][1]
  const messagem6 = data[6][1]

  return (
    <Box>
      <NavBar />
      {/* <NavMenu /> */}
      <Card 
        tipo={"Bom dia!"} 
        titulo={"Tenha um Ótimo Dia! 🌞❤"} 
        message={messagem1.message} 
      />
      <Card tipo={"Bom dia!"} titulo={"Deus nos livre de todo o mal, amém! ✨🙏"} message={messagem2.message} />
      <Card tipo={"Bom dia!"} titulo={"Que seu dia seja abençoado."} message={messagem3.message} />
      <Card tipo={"Bom dia!"} titulo={"Deus me preparou uma vez mais um dia abençoado! 😊🙏"} message={messagem4.message} />
      <Card tipo={"Bom dia!"} titulo={"DEUS abençoe esse novo dia, que seja de vitórias e conquistas! 😻🙏"} message={messagem5.message} />
      <ImageCard 
        tipo={"Bom dia!"}
        title={"Paz e amor S2"}
        message={messagem6.message}
        autor={"Desconhecido"}
        date={"Out 2, 2021"}
      />
    </Box>
  );
}

export default Index;

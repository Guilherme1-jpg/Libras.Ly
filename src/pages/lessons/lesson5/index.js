import {
  Box,
  Divider,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import React from 'react'
import Footer from '../../../components/assist/footer'
import SidebarContent from '../../../components/sidebarContent'
import Umahora from '../../../components/assets/umaHora.png'
import MeioDia from '../../../components/assets/meioDia.png'
import MomentoHora from '../../../components/assets/momentoHora.png'
import MuitoTempo from '../../../components/assets/muitoTempo.png'
import PoucoTempo from '../../../components/assets/poucoTempo.png'
import Segundos from '../../../components/assets/segundos.png'
import MinutosQuinze from '../../../components/assets/15minutos.png'
import MeiaHora from '../../../components/assets/meiahora.png'
import horasSeis from '../../../components/assets/6horas.png'
import UmaeMeia from '../../../components/assets/umaemeia.png'

const itemData = [
  {
    img: `${Umahora}`,
    title: 'Uma hora',
  },
  {
    img: `${MeioDia}`,
    title: 'Meio dia',
  },
  {
    img: `${MomentoHora}`,
    title: 'Momento Hora',
  },
  {
    img: `${MuitoTempo}`,
    title: 'Muito Tempo',
  },
  {
    img: `${PoucoTempo}`,
    title: 'Pouco Tempo',
  },

  {
    img: `${Segundos}`,
    title: 'Segundos',
  },

  {
    img: `${MinutosQuinze}`,
    title: '15 minutos',
  },
  {
    img: `${MeiaHora}`,
    title: 'Meia Hora',
  },
  {
    img: `${horasSeis}`,
    title: '6 horas',
  },
  {
    img: `${UmaeMeia}`,
    title: 'uma e meia',
  },
]

const Lesson5 = () => {
  return (
    <>
      <SidebarContent />
      <Box
        display="flex"
        justifyContent="center"
        height="100%"
        marginLeft="240px"
        marginTop="20px"
        flexDirection="column"
      >
        <Typography variant="h4">HORAS</Typography>

        <Box marginTop="20px">
          <Typography>
            Na Língua Libras, só se sinaliza até doze horas, após este horário é
            recomeçada a contagem. A sinalização deve estar acompanhada do sinal
            MANHÃ, TARDE, NOITE ou MADRUGADA, quando necessário. <br />
            Para sinalizarmos as horas existem duas formas: uma para indicar
            tempo cronológico e outra para indicar tempo de duração. As horas
            também podem ser incorporadas aos numerais até o 4 com apenas um
            sinal, após o 5 faz se necessária a utilização de dois sinais: o
            número e a hora.
          </Typography>
        </Box>

        <Divider>
          <Typography>Exemplos de Horas</Typography>
        </Divider>

        <Box display="flex" justifyContent="center">
          <ImageList cols={8} variant="masonry" gap={1}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} position="below" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </>
  )
}

export default Lesson5

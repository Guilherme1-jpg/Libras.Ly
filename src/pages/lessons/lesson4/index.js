import {
  Box,
  Divider,
  Typography,
  ImageListItemBar,
  ImageList,
  ImageListItem,
} from '@mui/material'
import React from 'react'
import Footer from '../../../components/assist/footer'
import SidebarContent from '../../../components/sidebarContent'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Cardial from '../../../components/assets/cardial.png'
import Quantitativo from '../../../components/assets/quantitativo.png'
import Fixo from '../../../components/assets/fixo.png'
import naoFixo from '../../../components/assets/naoFixo.png'
import Vantagem from '../../../components/assets/vantagem.png'
import Frequencia from '../../../components/assets/frequencia.png'
import Numero0 from '../../../components/assets/numero0.png'
import Numero1 from '../../../components/assets/numero1.png'
import Numero2 from '../../../components/assets/numero2.png'
import Numero3 from '../../../components/assets/numero3.png'
import Numero4 from '../../../components/assets/numero4.png'
import Numero5 from '../../../components/assets/numero5.png'
import Numero6 from '../../../components/assets/numero6.png'
import Numero7 from '../../../components/assets/numero7.png'
import Numero8 from '../../../components/assets/numero8.png'
import Numero9 from '../../../components/assets/numero9.png'

const itemData = [
  {
    img: `${Numero0}`,
    title: '0',
  },
  {
    img: `${Numero1}`,
    title: '1',
  },
  {
    img: `${Numero2}`,
    title: '2',
  },
  {
    img: `${Numero3}`,
    title: '3',
  },
  {
    img: `${Numero4}`,
    title: '4',
  },
  {
    img: `${Numero5}`,
    title: '5',
  },
  {
    img: `${Numero6}`,
    title: '6',
  },
  {
    img: `${Numero7}`,
    title: '7',
  },
  {
    img: `${Numero8}`,
    title: '8',
  },
  {
    img: `${Numero9}`,
    title: '9',
  },
]
const Lesson4 = () => {
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
        <Typography variant="h2">Numerais</Typography>
        <Box marginTop="20px">
          <Typography>
            Na Língua Libras há três classes numéricas: Cardinais, Quantitativos
            e os Ordinais. <br />
            Dentro da classe dos ordinais teremos quatro subgrupos que são:
            ordinais fixo, não fixo ou móvel, numerais de vantagem e frequência.
          </Typography>

          <Typography>
            Sempre que sinalizar numerais, a mão deverá estar com a palma virada
            para o emissor, dando visão do dorso da mão ao receptor.
          </Typography>

          <Typography>
            Para os numerais quantitativos, a sinalização do 1 ao 4 será feita
            anterior ao substantivo, do número 5 em diante posteriormente.
          </Typography>
        </Box>
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Números cardinais
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                são utilizados para sinalizar placas de carro, números
                telefônicos, números residenciais, capítulos bíblicos, entre
                outros
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img src={Cardial} />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Números quantitativos
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                utilizados para indicar quantidades
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img src={Quantitativo} />
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box marginTop="20px">
          <Typography variant="h6">
            Numerais ordinais são usados para enumerar uma sequência, hierarquia
            e posição. São classificados em quatro subgrupos:
          </Typography>
        </Box>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>FIXO</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Situações irreversíveis ou que dificilmente sofrerão alterações.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img src={Fixo} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              NÃO FIXOS
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              São ações que ocorrem costumeiramente, ou sazonalmente, por
              exemplo, a ordem de quem se senta à mesa para jantar.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img src={naoFixo} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              VANTAGEM
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Indica um privilégio, exemplo, ser segundo em uma fila
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img src={Vantagem} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              FREQUÊNCIA
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Indica a frequência de uma ação ocorreu
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img src={Frequencia} />
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Typography>
          Veremos agora como é a representação dos numeros, lembre-se de ativar
          o Govinho para te ajudar
        </Typography>

        <Box display="flex" justifyContent="center">
          <ImageList
            sx={{ width: 980, height: 400 }}
            cols={8}
            variant="masonry"
            gap={1}
          >
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

export default Lesson4

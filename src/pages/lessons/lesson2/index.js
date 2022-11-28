import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import SidebarContent from '../../../components/sidebarContent'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Footer from '../../../components/assist/footer'
const Lesson2 = () => {
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
        <h1>Estrutura Linguística</h1>
        <Typography>
          A Língua Libras possui estrutura gramatical própria que a diferencia
          das línguas oral-escrita para que as mãos assumam uma transmissão nos
          moldes de coesão e coerência linguística. Sempre que escrevermos ou
          sinalizarmos devemos observar a rigidez gramatical abaixo:
        </Typography>

        <Box
          padding="10px"
          display="flex"
          justifyContent="center"
          flexDirection="row"
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pronome</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                PESSOAL: Ex: EU, VOCE, EL@, NOS, VÓS, EL@.
                <br /> POSSESSIV@: Ex: MEU, SE@, TE@, NOSS@, VOSS@, DEL@. <br />
                PROPRI@: Ex: CARLOS, MARIA, JOAO, JOSE, ANA. <br />
                INDEFINID@: Ex: NINGUEM, ALGUM@, NENHUM@. <br />
                INTERROGATIV@: Ex: QUEM, QUAL, PORQUE, PARA-QUE, COMO, QUE.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Verbo: Tudo que indica uma ação</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ex: ANDAR, CORRER, SORRIR, COMPOR.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Substantivo: É o que dá nome aos seres e objetos
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ex: CASA, CARRO, PORTA, GRAVATA, PESSOA.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Adjetivo: Aquilo que qualifica de forma negativa ou positiva.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ex: BONIT@, FEI@, GRANDE, PEQUEN@, IMPORTANTE, LEGAL
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Adverbio: É aquilo que modifica na maioria das vezes o verbo;
                existem varios tipos de adverbios (tempo / modo / lugar /
                negação / afirmação / exclamação / interrogação).
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ADV. DE TEMPO: CANTAR HOJE. • ADV. DE MODO: CANTAR ALT@. • ADV.
                DE LUGAR: CANTAR AQUI. • ADV. DE NEGAÇÃO: CANTAR NÃO. • ADV. DE
                AFIRMAÇAO: CANTAR SIM. • ADV. DE EXCLAMAÇÃO: CANTAR exclamação
                (CANTAR!) • ADV. DE INTERROGAÇÃO: CANTAR interrogação (CANTAR?)
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Divider />
        <Box padding="10px">
          <Typography variant="h5">Aplicação do Hífen</Typography>
          <Typography>
            As palavras compostas na língua oral-escrita serão representadas por
            apenas um sinal e separadas por hífen. <br />
            Ex: SAO-PAULO; CANA-DE-AÇUCAR; GUARDA-CHUVA; TODO-DIA
          </Typography>
        </Box>

        <Divider variant="inset" />
        <Typography variant="h6">Libras X Português Sinalizado</Typography>

        <Typography>
          Libras-que é a língua natural do surdo, o sinal apresentado é composto
          pela visualização da imagem mental da situação a ser descrita, com
          expressões próprias da língua de sinais. Não se traduzindo sinal por
          sinal, mas sim, o sentido da frase.
          <br />
          PORTUGUÊS SINALIZADO-é a tradução de cada palavra do português pelo
          seu sinal correspondente em Libras. Transgredindo as regras semânticas
          e sintáticas da Língua de Sinais, utilizando-a dessa forma, sua
          identidade é perdida, é mais fácil pra quem sinaliza, porém difícil
          para o surdo entender.
        </Typography>
        <Typography variant="h6">
          <Divider>
            Agora algumas frases simples, para entendermos melhor
          </Divider>
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          padding="10px"
        >
          <List
            sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem>
              1. Zaqueu subiu na árvore. <br />
              Português sinalizado – Zaqueu subir árvore.
              <br />
              Libras – Zaqueu árvore subir.
            </ListItem>

            <ListItem>
              2. Deus te abençoe! <br /> Português sinalizado – Deus você
              abençoar <br />
              Libras – Deus abençoar (verbo direcional).
            </ListItem>
          </List>
          <List
            sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem>
              3. Amanhã eu vou para escola.
              <br /> Português sinalizado – Amanhã eu ir casa^estudar.
              <br /> Libras – Amanhã casa^estudar ir.
            </ListItem>

            <ListItem>
              4. Eu gosto de brincar.
              <br />
              Português sinalizado – Eu gostar brincar <br />
              Libras – Brincar gostar
            </ListItem>
          </List>
          <List
            sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem>
              5. Caio comeu a maçã <br />
              Português sinalizado – Caio comer maçã <br />
              Libras – Caio maçã comer
            </ListItem>

            <ListItem>
              6. Meu amigo viajou para São Paulo
              <br />
              Português sinalizado – Meu amigo homem viajar São Paulo.
              <br />
              Libras – Amigo^homem meu cidade São Paulo Viajar.
            </ListItem>
          </List>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Lesson2

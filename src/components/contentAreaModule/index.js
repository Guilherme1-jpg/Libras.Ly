import React from 'react'
import * as C from './styled'
import { Divider, Grid, Typography } from '@mui/material'
import AbrirGov from '../../components/assets/abrirGov.webm'
import traduGov from '../../components/assets/traducaoGov.webm'
import dicioGov from '../../components/assets/dicioGov.webm'

const ContentAreaContent = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop={6}
      >
        <Grid item xs={3}>
          <Typography variant="h5">
            Seja Bem-vindo a nossa pagina de conteudo
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6">O que é a Lingua de Sinais?</Typography>
        </Grid>

        <Grid item marginLeft={30}>
          <Typography variant="subtitle2">
            A língua de sinais é também conhecida como língua gestual. A mesma
            utiliza-se de gestos e sinais em substituição à língua que todos nós
            bem conhecemos em nossas comunicações: a língua de sons ou oral.
            Falamos em comunicação e a língua de sinais possui exatamente esse
            sentido, ou seja, de ser o meio de um grupo de indivíduos poderem
            comunicar-se, pois é através dela que as pessoas surdas trocam
            comunicações entre si, e até mesmo com as pessoas que já aprenderam
            a interpretá-la. Aliás, isto vem ocorrendo de forma cada vez mais
            significativa. Muitos acham que, por se tratar de comunicação por
            gestos, ela deveria ser igual para todos os surdos. Outros acham que
            a comunidade surda do mundo, por ser pequena, deveria fazer uso de
            apenas uma língua de sinais, até mesmo, por se tratar de uma
            linguagem icônica (representativa). Vejamos por que não é assim:
            Primeiro que a língua de sinais não é baseada em gestos ou mímicas,
            trata-se de uma língua natural, com léxico (léxico é todo o conjunto
            de palavras que as pessoas de uma determinada língua têm à sua
            disposição para expressar-se, oralmente ou por escrito) e gramática
            próprios. Segundo que cada comunidade de surdos desenvolveu a sua
            própria língua de sinais, tal como cada povo desenvolveu sua língua
            oral. Isso demandou muito tempo. Assim como existem várias línguas
            faladas no mundo, também existem várias línguas de sinais pelo
            mundo. Cada país tem sua própria língua de sinais, tal como temos
            nossa própria língua falada.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">O que vamos aprender?</Typography>
        </Grid>
        <Grid item marginLeft={25}>
          <Typography variant="subtitle2">
            Com a libras.ly você irá aprender os fundamentos iniciais para
            começar a conhecer um pouco melhor a linguagem de sinais e sua
            importancia.
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6">Como vou aprender</Typography>
        </Grid>
        <Grid item marginLeft={30}>
          <Typography variant="subtitle2">
            Separamos os mais diversos conteudos e seus respectivos sinais para
            que você possa aprender de forma gradual, além disso, vamos
            apresentar nossos querido Govinho, ele vai ser seu fiel amigo
            durante toda nossa trajetória.
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6">Quem é Govinho?</Typography>
        </Grid>
        <Grid item marginLeft={30}>
          <Typography variant="subtitle2">
            Ao entrar nessa pagina, você reparou que tem um icone flutuante de
            mãos ao nosso lado, esse é o nosso amigo Govinho. Trata-se de uma
            inteligencia artificial que consegue fazer a tradução dos nossos
            textos para a linguagem de sinais, use sempre para traduzir nossas
            frases durante o ensino,ele tambem possui seu próprio dicionario
            para você utilizar, além disso, o Govinho entende linguagem de
            outros países, caso bata alguma curiosidade.
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6">Como usar o Govinho?</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Primeiro clique no ícone ao lado, para carrregar o Govinho.
          </Typography>
          <Grid item marginLeft={4}>
            <video controls autoPlay loop width={280}>
              <source src={AbrirGov} type="video/webm" />
            </video>
          </Grid>
        </Grid>

        <Grid item xs={6} marginLeft={30}>
          <Typography variant="subtitle2">
            Agora que foi carregado, você pode selecionar o texto que
            automaticamente ele começará a fazer a tradução
          </Typography>
          <Grid item marginLeft={10}>
            <video controls autoPlay loop width={600}>
              <source src={traduGov} type="video/webm" />
            </video>
          </Grid>
        </Grid>

        <Grid item xs={2} marginLeft={30}>
          <Typography variant="subtitle2">
            Caso você queira saber alguma palavras que não está no nosso
            conteudo, basta clicar na opção de dicionário e pesquisar a palavra
            de seu interesse.
          </Typography>
          <Grid item marginLeft={40}>
            <video controls autoPlay loop width={280}>
              <source src={dicioGov} type="video/webm" />
            </video>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ContentAreaContent

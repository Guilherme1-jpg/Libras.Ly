import * as React from 'react'
import { Reset } from './Reset'
import {
  Card,
  CardTitle,
  CardDetails,
  CardPicture,
  CardSide,
  CardWrapper,
} from './Card'
import styled from 'styled-components'
import { colors } from './colors'
import { Box, Grid } from '@mui/material'
import MouseIcon from '@mui/icons-material/Mouse'

import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'

const CardArea = () => {
  const [spacing, setSpacing] = React.useState(2)

  const jsx = `
  <Grid container spacing={${spacing}}>
  `
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Reset />
            <Grid item>
              <CardWrapper>
                <Card
                  colorLight={colors.primaryLight}
                  colorDark={colors.primaryDark}
                >
                  <CardSide side="front">
                    <CardPicture src={Card1} />
                    <CardTitle>Aprenda com a identidade surda</CardTitle>
                    <CardDetails>
                      Você se incomoda em ser reduzido a um grupo ao qual
                      pertence? Com coisas como “toda mulher é assim”, “todo
                      homem é aquilo” e etc?
                    </CardDetails>
                    <MouseIcon />
                  </CardSide>

                  <CardSide side="back">
                    <CardDetails>
                      Você se incomoda em ser reduzido a um grupo ao qual
                      pertence? Com coisas como “toda mulher é assim”, “todo
                      homem é aquilo” e etc? Pois é! Então não veja toda pessoa
                      surda do mesmo jeito. Saiba mais sobre identidade surda e
                      mude de atitude!
                    </CardDetails>
                  </CardSide>
                </Card>
              </CardWrapper>
            </Grid>
            <Grid item>
              <CardWrapper>
                <Card
                  colorLight={colors.primaryLight}
                  colorDark={colors.primaryDark}
                >
                  <CardSide side="front">
                    <CardPicture src={Card2} />
                    <CardTitle>Libras na educação</CardTitle>
                    <CardDetails>
                      Vivemos em uma sociedade dominada por ouvintes e falantes
                    </CardDetails>
                    <MouseIcon />
                  </CardSide>

                  <CardSide side="back">
                    <CardDetails>
                      Vivemos em uma sociedade dominada por ouvintes e falantes;
                      porém, em seu meio há habitantes deste imenso país que são
                      surdos, os quais até algum tempo atrás não conseguiam
                      compreender o outro em sua volta nem ser compreendido.
                    </CardDetails>
                  </CardSide>
                </Card>
              </CardWrapper>
            </Grid>

            <Grid item>
              <CardWrapper>
                <Card
                  colorLight={colors.primaryLight}
                  colorDark={colors.primaryDark}
                >
                  <CardSide side="front">
                    <CardPicture src={Card3} />
                    <CardTitle>Libras.ly</CardTitle>
                    <CardDetails>
                      Nós da Libras.ly, queremos que você tenha um aprendizado
                      fácil e continuo e sendo acessado de qualquer lugar a
                      qualquer hora
                    </CardDetails>
                    <MouseIcon />
                  </CardSide>

                  <CardSide side="back">
                    <CardDetails>
                      Nós da Libras.ly, queremos que você tenha um aprendizado
                      fácil e continuo e sendo acessado de qualquer lugar a
                      qualquer hora
                    </CardDetails>
                  </CardSide>
                </Card>
              </CardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CardArea

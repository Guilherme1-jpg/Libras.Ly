import * as React from 'react'

import { Box, Grid, Typography } from '@mui/material'

const CreatorsDetails = () => {
  const [spacing, setSpacing] = React.useState(2)

  const jsx = `
  <Grid container spacing={${spacing}}>
  `
  return (
    <>
      <Box
        display="flex"
        marginLeft={25}
        marginTop={15}
        justifyContent="center"
      >
        <Typography variant="h1">Motivação</Typography>
      </Box>
      <Box mb={3} display="flex" justifyContent="space-evenly">
        <Box
          display="flex"
          marginLeft={25}
          marginTop={5}
          justifyContent="center"
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4">
                Nós vimos a ausencia na internet de um conteudo didatico e
                autodidata sobre libras, acreditamos que hoje, todos tenham o
                potêncial de aprender essa linguagem que esta no nosso
                dia-a-dia.
              </Typography>
              <Typography variant="h6">-Guilherme Henrique</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h4">
                Acreditamos que hoje a internet facilita muito o aprendizado de
                qualquer coisa que queremos aprender, e com a libras não
                queremos fazer diferente, queremos aplicar o ensino de qualidade
                com a questão do autodidata
              </Typography>

              <Typography variant="h6">-Gabriel Orbeli</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CreatorsDetails

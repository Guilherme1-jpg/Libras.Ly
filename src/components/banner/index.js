import React from 'react'
import { Grid, Container, Typography, Box } from '@mui/material'
import handsBanner from '../assets/handsBanner.png'
import * as C from './styled'

const Banner = () => {
  return (
    <>
      <Box mb={3} display="flex" justifyContent="space-evenly">
        <Box
          display="flex"
          marginLeft={25}
          marginTop={5}
          justifyContent="center"
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">
                <C.TextVariant>Libras.ly</C.TextVariant>uma iniciativa a
                inclusão
              </Typography>

              <Typography marginTop={5}>
                Projeto feito para quem desejar aprender um pouco sobre essa
                lingua em ascensão no brasil e mundo à fora.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item xs={12} sm={6}>
            <img src={handsBanner} width="400px" height="300px" />
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Banner

import React from 'react'
import { Grid, Container, Typography, Box } from '@mui/material'
import classImage from '../assets/classImage.png'
import * as C from './styled'

const InfoAreaScreen = () => {
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
              <Typography variant="h5" subtitle2>
                Inclusão no Brasil
              </Typography>

              <Typography marginTop={5} variant="subtitle2">
                Tendo o português como primeira língua oficial, o Brasil também
                reconhece a Língua Brasileira de Sinais (Libras) como língua das
                comunidades surdas brasileiras desde 2002. Mesmo antes da
                oficialização, a Libras já era falada no Brasil, desde o século
                19.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item xs={12} sm={6}>
            <img src={classImage} width="400px" height="300px" />
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default InfoAreaScreen

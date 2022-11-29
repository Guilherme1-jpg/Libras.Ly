import react, { useEffect, useState } from 'react'
import * as C from './styled'

import Waves from '../../assets/wave.png'
import { Box, Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
      <footer>
        <C.FooterArea>
          <C.FooterContent>
            <Typography>
              Todos os direitos reservados {new Date().getFullYear()}
            </Typography>
          </C.FooterContent>
        </C.FooterArea>
      </footer>
    </>
  )
}

export default Footer

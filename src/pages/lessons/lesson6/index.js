import { Box, Typography } from '@mui/material'
import React from 'react'
import SidebarContent from '../../../components/sidebarContent'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Meses1 from '../../../components/assets/meses1.jpg'
import Meses2 from '../../../components/assets/meses2.png'
import Meses3 from '../../../components/assets/meses3.png'
const Lesson6 = () => {
  return (
    <>
      <SidebarContent />
      <Box
        display="flex"
        justifyContent="center"
        height="100%"
        marginLeft="240px"
        marginTop="20px"
        flexDirection="row"
      >
        <Typography variant="h4">Meses</Typography>
      </Box>
      <Box
        height="100%"
        marginLeft="240px"
        display="flex"
        justifyContent="center"
        marginTop="60px"
        sx={{ flexDirection: 'row' }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="440"
            image={Meses1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Utilize o Govinho abaixo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Janeiro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fevereiro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Março
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Abril
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="440"
            image={Meses2}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Utilize o Govinho abaixo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Maio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Junho
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Julho
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Agosto
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="440"
            image={Meses3}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Utilize o Govinho abaixo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Setembro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Outubro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Novembro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dezembro
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Lesson6

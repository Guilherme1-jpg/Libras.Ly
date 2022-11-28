import { Box, Divider, ImageListItemBar, Typography } from '@mui/material'
import * as React from 'react'

import Footer from '../../components/assist/footer'
import Navbar from '../../components/assist/navbar'
import SidebarContent from '../../components/sidebarContent'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import A from '../../components/assets/a.png'
import B from '../../components/assets/b.png'
import C from '../../components/assets/c.png'
import D from '../../components/assets/d.png'
import E from '../../components/assets/e.png'
import F from '../../components/assets/f.png'
import G from '../../components/assets/g.png'
import H from '../../components/assets/h.png'
import I from '../../components/assets/i.png'
import J from '../../components/assets/j.png'
import K from '../../components/assets/k.png'
import L from '../../components/assets/l.png'
import M from '../../components/assets/m.png'
import N from '../../components/assets/n.png'
import O from '../../components/assets/o.png'
import P from '../../components/assets/p.png'
import Q from '../../components/assets/q.png'
import R from '../../components/assets/r.png'
import S from '../../components/assets/s.png'
import T from '../../components/assets/t.png'
import U from '../../components/assets/u.png'
import V from '../../components/assets/v.png'
import W from '../../components/assets/w.png'
import X from '../../components/assets/x.png'
import Y from '../../components/assets/y.png'
import Z from '../../components/assets/z.png'

const itemData = [
  {
    img: `${A}`,
    title: 'Letra A',
  },
  {
    img: `${B}`,
    title: 'Letra B',
  },
  {
    img: `${C}`,
    title: 'Letra C',
  },
  {
    img: `${D}`,
    title: 'Letra D',
  },
  {
    img: `${E}`,
    title: 'Letra E',
  },
  {
    img: `${F}`,
    title: 'Letra F',
  },
  {
    img: `${G}`,
    title: 'Letra G',
  },
  {
    img: `${H}`,
    title: 'Letra H',
  },
  {
    img: `${I}`,
    title: 'Letra I',
  },
  {
    img: `${J}`,
    title: 'Letra J',
  },
  {
    img: `${K}`,
    title: 'Letra K',
  },
  {
    img: `${L}`,
    title: 'Letra L',
  },
  {
    img: `${M}`,
    title: 'Letra M',
  },
  {
    img: `${N}`,
    title: 'Letra N',
  },
  {
    img: `${O}`,
    title: 'Letra O',
  },
  {
    img: `${P}`,
    title: 'Letra P',
  },
  {
    img: `${Q}`,
    title: 'Letra Q',
  },
  {
    img: `${R}`,
    title: 'Letra R',
  },
  {
    img: `${S}`,
    title: 'Letra S',
  },
  {
    img: `${T}`,
    title: 'Letra T',
  },
  {
    img: `${U}`,
    title: 'Letra U',
  },
  {
    img: `${V}`,
    title: 'Letra V',
  },
  {
    img: `${W}`,
    title: 'Letra W',
  },
  {
    img: `${X}`,
    title: 'Letra X',
  },
  {
    img: `${Y}`,
    title: 'Letra Y',
  },
  {
    img: `${Z}`,
    title: 'Letra Z',
  },
]
const PageConteudo = () => {
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
        <Typography variant="h4">APRENDENDO O ALFABETO</Typography>
        <Divider />
        <Box>
          <Typography variant="subtitle1">
            Para começarmos nosso estudo, vamo iniciar pelo alfabeto, onde se
            encontra a base do ensino de libras. Lembre-se de ativar o nosso
            Govinho para que você consiga praticar e entender melhor os
            movimentos
          </Typography>
          <Box display="flex" justifyContent="center">
            <ImageList
              sx={{ width: 980, height: 850 }}
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
      </Box>

      <Footer />
    </>
  )
}

export default PageConteudo

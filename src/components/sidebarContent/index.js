import React from 'react'
import { useState } from 'react'
import * as C from './styled'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Avatar, Divider, Drawer, Icon, useTheme } from '@mui/material'
import VLibras from '@djpfs/react-vlibras'

import MenuBookIcon from '@mui/icons-material/MenuBook'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { Box } from '@mui/system'
import Link from '@mui/material/Link'
import PageConteudo from '../../pages/pageconteudo'
import AvatarFig from '../../components/assets/avatar.png'

const SidebarContent = ({ children }) => {
  const theme = useTheme()

  const [open, setOpen] = useState(false)

  const [open2, setOpen2] = useState(false)

  const [open3, setOpen3] = useState(false)

  const [open4, setOpen4] = useState(false)

  const [open5, setOpen5] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }

  const handleClick3 = () => {
    setOpen3(!open3)
  }
  const handleClick4 = () => {
    setOpen4(!open4)
  }

  const handleClick5 = () => {
    setOpen5(!open5)
  }

  const [isActive, setIsActive] = useState(false)

  const handleClickColor = () => {
    setIsActive((current) => !current)
  }
  return (
    <>
      <VLibras />
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="start"
        >
          <Box
            width="100%"
            height={theme.spacing(30)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              sx={{ height: theme.spacing(20), width: theme.spacing(20) }}
              src={AvatarFig}
            />
            <Link
              href="/dashboard"
              style={{ textDecoration: 'none', color: '#4C5F6B' }}
            >
              Bem-Vindo
            </Link>
          </Box>

          <Divider />

          <Box flex={1}>
            {/* <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    <StarOutlineIcon />
                  </Icon>
                </ListItemIcon>
                <Link href="/dashboard/conteudo">
                  <ListItemText primary="Modulo 1" />
                </Link>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    <StarOutlineIcon />
                  </Icon>
                </ListItemIcon>
                <Link href="/dashboard/conteudo/m12">
                  <ListItemText primary="Modulo 1.2" />
                </Link>
              </ListItemButton>
            </List> */}

            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Selecione o Modulo
                </ListSubheader>
              }
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Modulo 1" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon
                      onClick={handleClickColor}
                      style={{
                        color: isActive ? 'green' : '',
                      }}
                    >
                      <StarBorder />
                    </ListItemIcon>
                    <Link
                      href="/dashboard/conteudo"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <ListItemText primary="Lição 1" />
                    </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon
                      onClick={handleClickColor}
                      style={{
                        color: isActive.open ? 'green' : '',
                      }}
                    >
                      <StarBorder />
                    </ListItemIcon>
                    <Link
                      href="/dashboard/Lesson2"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <ListItemText primary="Lição 2" />
                    </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link
                      href="/dashboard/Lesson3"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <ListItemText primary="Lição 3" />
                    </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Modulo 2" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link
                      href="/dashboard/Lesson4"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <ListItemText primary="Lição 1" />
                    </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link
                      href="/dashboard/Lesson5"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <ListItemText primary="Lição 2" />
                    </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link
                      href="/dashboard/Lesson6"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <ListItemText primary="Lição 3" />
                    </Link>
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick3}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Modulo 3" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>

                    <Link
                      href="/dashboard/lesson7"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <ListItemText primary="Lição 1" />
                    </Link>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box> */}
    </>
  )
}

export default SidebarContent

import React from 'react'
import { useState } from 'react'
import * as C from './styled'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Avatar, Divider, Drawer, Icon, useTheme } from '@mui/material'

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
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/265953923_4801362313261067_1013681395294042164_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE_RSqk_xI1haMBF1IQa8qfgAUklJKoo4qABSSUkqijiqOxaWcNk8zcuC-fKRGCHiNcv7TrFJiRA9qbUU0BPmF0&_nc_ohc=2qKLIOCDfdMAX_1ck8A&_nc_ht=scontent.fbau3-1.fna&oh=00_AfAPym8z122HK8qrftPAV_aKHbLb2TO7YImFcZ17LhqjDw&oe=6361FD35"
            />
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
                    <Link href="/dashboard/conteudo">
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
                    <Link href="/dashboard/Lesson2">
                      <ListItemText primary="Lição 2" />
                    </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link href="/dashboard/Lesson3">
                      <ListItemText primary="Lição 3" />
                    </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Lição 4" />
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
                    <ListItemText primary="Starred" />
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
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick4}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Modulo 4" />
                {open4 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClick5}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Modulo 5" />
                {open5 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open5} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
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

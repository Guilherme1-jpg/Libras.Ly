import React, { useState } from 'react'
import LibrasLogo from '../../assets/librasLogo.png'
import * as C from './styled'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <C.Nav>
        <C.NavToLink to="/">
          <img src={LibrasLogo} alt="logo" />
        </C.NavToLink>

        <C.Bars onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </C.Bars>

        <C.NavMenu isOpen={isOpen}>
          <C.NavToLink to="/">Inicio</C.NavToLink>

          <C.NavToLink to="/">Quem Somos</C.NavToLink>

          <C.NavToLink to="/">Quero Aprender</C.NavToLink>
        </C.NavMenu>
        <C.NavIsLoggin>
          <C.NavBtn to="/signIn">Entrar</C.NavBtn>

          <C.NavBtnTwo to="/signUp">Registrar</C.NavBtnTwo>
        </C.NavIsLoggin>
      </C.Nav>
    </>
  )
}

export default Navbar

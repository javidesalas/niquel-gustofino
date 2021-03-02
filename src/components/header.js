import React from "react"
//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { colors } from './theme'
import LogoNiquel from '../images/logoNiquel.svg'
import Menu from './menu'


const Logo = styled.img`
  width: 120px;
  margin-top: 1rem;
  grid-column: 2;
`

const MyHeader = styled.header`
  background-color: ${colors.black};
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 100px auto 100px;
  justify-items: center;
`

const Header = () => {
 
  return (
    <>
      <Menu disableAutoFocus /> 
        
      <MyHeader>
        <Logo src={LogoNiquel} />
      </MyHeader>
    </>
  )
}

export default Header

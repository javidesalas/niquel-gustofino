import React from "react"
import styled from "@emotion/styled"

import { colors } from './theme'
import LogoNiquel from '../images/logoNiquel.svg'
import Logo1906 from "../images/logo1906.svg"

const LogoDiv = styled.div`
display:flex;
justify-content:space-around;
align-items: center
`
const Logo = styled.img`
  width: 120px;
  margin-top: 1rem;
`
const MyFooter = styled.footer`
  margin-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${colors.black};
  color: white
`

const MyP = styled.p`
margin: 1rem;
  @media (min-width: 992px) {
    margin-left: 100px;
    font-size: 0.8rem
  }
`


const Footer = () => {
  //Simpler alternative to context API due to Gatsby implementation issues
  const lang =
    typeof window !== `undefined`
      ? JSON.parse(sessionStorage.getItem("lang"))
      : "ES"

  return (
    <MyFooter>
      <LogoDiv>
        <Logo src={LogoNiquel} />
        <Logo src={Logo1906} />
      </LogoDiv>
      
      
      <MyP>
        © {new Date().getFullYear()}, Roraima Hostelería SL.{" "}
        {lang === "ES" ? "Diseño web" : "Web Design"}
        {` `}
        <a href="https://www.javidesalas.com">Javier de Salas</a>
      </MyP>
    </MyFooter>
  )
}

export default Footer

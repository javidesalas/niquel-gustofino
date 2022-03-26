import React from "react"
import styled from "@emotion/styled"

import { colors } from "../theme"
import InstagramLogo from "../../images/svgs/instagram-logo.svg"
import FacebookLogo from "../../images/svgs/facebook.svg"

const iconStyles = {
  width: "30px",
  height: "auto",
  margin: "0.5rem",
}

const SocialLink = styled.a`
  color: ${colors.darkGrey};
  &:visited{
    color: ${colors.darkGrey};}
  &:hover,
  &:active {
    color: ${colors.red};
  }
`

const MyMediaDiv = styled.div`
  margin: 1rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MyMedia = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  max-width: 400px;
`
const MyReservas = styled.h3`
  color: ${colors.darkGrey};
  margin-left: 10px;
`
const Header = props => {
  const lang = props.lang
  return (
    <>
      <MyMediaDiv>
        <MyMedia>
          <SocialLink
            href="https://instagram.com/niquel_gustofino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo style={iconStyles} />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/N%C3%ADquel_Gusto-Fino-111029301040334"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo style={iconStyles} />
          </SocialLink>
          <SocialLink href={lang === "ES" ? "#Reservas" : "#Bookings"}>
            <MyReservas>
              {lang === "ES" ? "Reservas" : "Bookings"}
            </MyReservas>
          </SocialLink>
        </MyMedia>
      </MyMediaDiv>
    </>
  )
}

export default Header

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
  width: 60vw;
  max-width: 400px;
`

const Header = () => {
  return (
    <>
      <MyMediaDiv>
        <MyMedia>
          <SocialLink href="#">
            <InstagramLogo style={iconStyles} />
          </SocialLink>
          <SocialLink href="#">
            <FacebookLogo style={iconStyles} />
          </SocialLink>
        </MyMedia>
      </MyMediaDiv>
    </>
  )
}

export default Header

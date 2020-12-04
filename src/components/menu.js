/** @jsx jsx */

import React from "react"
import Menu from "react-burger-menu/lib/menus/slide"
import {Link} from "gatsby"
import styled from "@emotion/styled"
import {jsx, css} from "@emotion/core"

import { styles } from "./menuStyles"
import { colors } from "./theme"

import LogoNiquel from "../images/logoNiquel.svg"
import anzueloClavel from "../images/anzueloClavel.svg"
import { menuId } from "../helpers/menuId"


const Logo = styled.img`
  height: 80px;
  padding-left: --20px;
  margin: -20 auto 0 auto !important
`;

const hoverStyles = css`
  .bm-item:hover,
  .bm-item:active {
    color: ${colors.red};
  }
`



class Burger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  handleLink = e => {
    e.preventDefault()
    console.dir(e.currentTarget)
    document
      .getElementById(e.currentTarget.name)
      .scrollIntoView({ behavior: "smooth" })
    this.closeMenu()
  }

  render() {
    const lang = JSON.parse(sessionStorage.getItem("lang"))
    const menuItems = JSON.parse(sessionStorage.getItem("menuItems"))

    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        styles={styles}
      >
        <Logo src={LogoNiquel} style={{ margin: "-20 auto 0 auto" }} />

        {menuItems.map(item => (
          <a
            // href={menuId(item)}
            name={menuId(item)}
            css={hoverStyles}
            onClick={this.handleLink}
          >
            {" "}
            {lang === "ES" ? menuId(item, 2) : menuId(item, 3)}{" "}
          </a>
        ))}

        <Link to="/" style={{ color: colors.grey }} >
          Español
        </Link>
        <Link to="/en/" style={{ color: colors.grey }}>
          English
        </Link>
      </Menu>
    )
  }
}

export default Burger

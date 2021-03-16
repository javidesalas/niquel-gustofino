

import React from "react"
import Menu from "react-burger-menu/lib/menus/slide"
import {Link} from "gatsby"
import styled from "@emotion/styled"


import { styles } from "./menuStyles"
//import { colors } from "./theme"

import LogoNiquel from "../images/logoNiquel.svg"
//import anzueloClavel from "../images/anzueloClavel.svg"
import { menuId } from "../helpers/menuId"


const Logo = styled.img`
  height: 80px;
  padding-left: --20px;
  margin: -20 auto 0 auto !important
`;

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
    //Simpler alterantive to context API due to Gatsby implementation issues
    const lang =
      typeof window !== `undefined`
        ? JSON.parse(sessionStorage.getItem("lang"))
        : "ES"
    const menuItems =
      typeof window !== `undefined`
        ? JSON.parse(sessionStorage.getItem("menuItems"))
        : []

    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        styles={styles}
        disableAutoFocus
      >
        <Logo src={LogoNiquel} style={{ margin: "-20 auto 0 auto" }} />

        {menuItems.map(item => (
          <a
            href={`#${menuId(item)}`}
            key={menuId(item)}
            name={menuId(item)}
            onClick={this.handleLink}
          >
            {" "}
            {lang === "ES" ? menuId(item, 2) : menuId(item, 3)}{" "}
          </a>
        ))}

        {/* {lang === "ES" ? (
          <Link
            to="/en/"
            key={lang}
            onClick={() => this.closeMenu()}
          >
            English
          </Link>
        ) : (
          <Link
            to="/"
            key={lang}
            onClick={() => this.closeMenu()}
          >
            Español
          </Link> 
        )}*/}
      </Menu>
    )
  }
}

export default Burger

import { colors } from "./theme"

export const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "25px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: colors.red,
    opacity: ".8",
  },
  bmBurgerBarsHover: {
    background: colors.red,
    opacity: "1"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: colors.red,
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: colors.black,
    padding: "2.5em 1.5em 0",
    fontSize: "1em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "white",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  bmItem: {
    textDecoration: "none",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 800,
    textTransform: "uppercase",
    marginTop: 10,
          
  },



  bmOverlay: {
    background: "rgba(0, 0, 0, 0)",
  },
}
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
    position: "absolute",
    height: "100%",
  },
  bmMenu: {
    background: colors.black,
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "white",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}
/** @jsx jsx */
//import React from "react"
import { jsx, css } from "@emotion/core"

import { menuId } from "../../helpers/menuId"
import Fader from "../sections/FadeInComponent"

const Reservations = ({ title }) => {
  return (
    <section id={menuId(title)}>
      <div
        css={css`
          padding: 0 1rem;
          max-width: 900px;
          margin: 0 auto;
        `}
      >
        <Fader direction="fadeInLeft">
          <h2>{title}</h2>
        </Fader>

        <script
          type="text/javascript"
          src="https://www.covermanager.com/js/iframeResizer.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://www.covermanager.com/reserve/gtmcrossdomain/restaurante-niquel"
        ></script>
        <iframe
          id="restaurante-niquel"
          title="Reservas"
          src="https://www.covermanager.com/reserve/module_restaurant/restaurante-niquel/spanish"
          frameborder="0"
          height="550"
          width="100%"
          onload="iFrameResize();"
        ></iframe>
      </div>
    </section>
  )
}

export default Reservations

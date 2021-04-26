import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import MenuPic from "../../images/Menu-Gusto-Fino.png"

const Model = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);

  /*   .show{
      display:block
  } 
  .noshow{
      background-color: red
  }*/
`
const Container = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
  object-fit: contain;
  justify-content: center;
  align-items: center;
`

const ModalImg = styled.img`
  max-height: 90vh;
  max-width: 90vw;
  object-fit: contain;
`

const Modal = ({ setShow, show }) => {
  useEffect(() => {
    window.setTimeout(function () {
      setShow(false)
    }, 3500)
  }, [])
  return (
    <Model show={show} onClick={() => setShow(false)}>
      <Container>
        <ModalImg src={MenuPic} alt="Menu Gusto Fino" />
      </Container>
    </Model>
  )
}

export default Modal

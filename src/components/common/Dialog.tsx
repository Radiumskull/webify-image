import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
      position: fixed;
      z-index: 999;
      height: 100vh;
      width: 100vw;
      background: rgba(0,0,0,.1);
      
      display: flex;
      justify-content: center;
      align-items: center;
`
const DialogBox = styled.div`
      background: white;
      min-height: 200px;
      min-width: 200px;
      margin: 1em;
`

const Dialog = ({ children }: any) => {
      return(
            <Backdrop>
                  <DialogBox>
                        { children }
                  </DialogBox>
            </Backdrop>
      )
}

export default Dialog
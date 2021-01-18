import React from 'react'
import styled from 'styled-components'
import Dialog from '../common/Dialog'

const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1.3em;
      img {
            object-fit: contain;
            height: auto;
            width: auto;
            max-height: 40vw;
            max-width: 40vw;
            margin: 0 auto;
            min-width: 300px;
      }
`

const Content = styled.div`
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
`

const ButtonWrap = styled.div`
      display: flex;
      justify-content: center;
      button{
            margin: .5em;
      }
`

interface ImageTypeDialogProps {
      setImageType: Function,
      image: File
}

const ImageTypeDialog = ({ setImageType, image }: ImageTypeDialogProps) => {
      console.log(image)
      return(
            <Dialog>
                  <Container>
                        <img src={URL.createObjectURL(image)} alt="crop_image"/>
                        <Content>
                              What type of image is it?
                              <ButtonWrap>
                                    <button onClick={() => {setImageType('product')}}>Product</button>
                                    <button onClick={() => {setImageType('model')}}>Model</button>
                              </ButtonWrap>
                        </Content>
                  </Container>
            </Dialog>
      )
}

export default ImageTypeDialog
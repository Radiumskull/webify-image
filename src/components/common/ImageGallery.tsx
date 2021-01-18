import React from 'react'
import styled from 'styled-components'

const Gallery = styled.div`
      margin: 1em;
      background: lightgray;
      padding: 1em;
      > section {
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            gap: .5em;
            max-width: 90vw;
            padding: 1em;
      }
      > div {
            display: flex;
            justify-content: center;
      }
`

const GalleryImage = styled.div`
            position: relative;
            display: flex;
            > img {
                  object-fit: cover;
                  max-width:400px;
                  max-height:400px;
                  width: auto;
                  height: auto;
            }
            > button {
                  position: absolute;
                  z-index: 9999;
                  right: 20px;
                  bottom: 10px;
            }
`
const FileInput = styled.input.attrs(props => ({type: 'file'}))`
      margin: 0 auto;
      color: transparent;
      ::-webkit-file-upload-button {
            visibility: hidden;
      }
      ::before {
            content: 'Add More Images';
            display: inline-block;
            width: 93%;
            text-align:center;
            background: violet;
            border: 1px solid #999;
            border-radius: 3px;
            padding: 5px 8px;
            color: white;
            outline: none;
            white-space: nowrap;
            -webkit-user-select: none;
            cursor: pointer;
      }
`


const Image = ({ image,  index, removeImage }: any) => {
      return(
            <GalleryImage>
                        <img  src={URL.createObjectURL(image)} alt={"gallery_image_" + index}/>
                        { removeImage && (<button onClick={() => removeImage(index)}>Remove Image</button>)}
            </GalleryImage>
      )
}




const ImageGallery = ({ images=[], addImages=null, removeImage=null } : any ) => {
      console.log(images)
      return(
            <Gallery>
                  <section>
                        {images && images.map((image: File, index: number) => <Image key={"gallery_image_" + index} image={image} index={index} removeImage={removeImage}/>)}
                  </section>
                  {addImages && (
                        <div>
                              <FileInput  onChange={(e) => addImages(e.target.files)} multiple/>
                        </div>
                  )}

            </Gallery>
      )
}

export default ImageGallery
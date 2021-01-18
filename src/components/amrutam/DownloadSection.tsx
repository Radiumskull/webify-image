import React from 'react'
import Compressor from 'compressorjs';
import ImageGallery from "../common/ImageGallery"



interface DownloadSectionProps {
      images: any[]
}


const DownloadSection = ({ images }: DownloadSectionProps) => {
      const downloadImages = () => {
            images.forEach((image, index) => {
                  new Compressor(image.image, {
                        quality: 0.5,
                        success(result) {
                              const aElem = document.createElement('a') 
                              aElem.href = URL.createObjectURL(result)
                              aElem.download = (index+1) + "("  + image.imageType + ")"
                              aElem.click()
                        }
                  })
            })
      }
      return(
            <>
                  <ImageGallery images={images}/>
                  <button onClick={downloadImages}>Download All</button>
            </>
      )
}

export default DownloadSection
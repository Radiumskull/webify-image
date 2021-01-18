import ImageGallery from "../common/ImageGallery"
import React from 'react'


const DownloadSection = ({ images }: any) => {
      console.log(images)
      return(
            <ImageGallery images={images}/>
      )
}

export default DownloadSection
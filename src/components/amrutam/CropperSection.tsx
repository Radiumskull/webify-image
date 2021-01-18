import React from 'react'
import CropComponent from '../CropComponent'
import ImageTypeDialog from './ImageTypeDialog'

const CropperSection = ({ images, setFinalImages, setScreen } : any) => {
      const [ index, setIndex ] = React.useState<number>(0)
      const [ outputImages, setOutputImages ] = React.useState<any[]>([])
      const [ imageType, setImageType ] = React.useState<string | null>(null)

      const addFinalImageHandler = (croppedImage: any) => {

            const temp: any = [...outputImages, {image: croppedImage as any, imageType: imageType as any}]
            setOutputImages(temp)
            console.log(outputImages)
            if(index < images.length - 1){
                  setIndex(index + 1)
                  setImageType(null)
            } else {
                  setFinalImages(temp)
                  setScreen('download')
            }
      }      

      return(
            <div>
                  { imageType === null && (<ImageTypeDialog image={images[index]} setImageType={setImageType}/>)}
                  { imageType && (
                        <CropComponent aspect={imageType === 'product' ? 1 / 1 : 3 / 4} image={images[index]} addFinalImageHandler={addFinalImageHandler}/>
                  )}
            </div>
      )
}

export default CropperSection
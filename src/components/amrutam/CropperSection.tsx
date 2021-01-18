import React from 'react'
import { Area } from 'react-easy-crop/types'
import getCroppedImg from '../common/getCroppedImage'
import CropComponent from '../CropComponent'
import ImageTypeDialog from './ImageTypeDialog'

const newOutputImage = (croppedImage: any, imageType: any) => { return {image: croppedImage as any, imageType: imageType as any}}

const CropperSection = ({ images, setFinalImages, setScreen } : any) => {
      const [ index, setIndex ] = React.useState<number>(0)
      const [ outputImages, setOutputImages ] = React.useState<any[]>([])
      const [ imageType, setImageType ] = React.useState<string | null>(null)

      const addFinalImageHandler = (croppedImage: any) => {
            console.log(croppedImage)
            // const temp: any = outputImages.push(newOutputImage(croppedImage, imageType))
            // setOutputImages(temp)
            if(index < images.length - 1){
                  setIndex(index + 1)
                  setImageType(null)
            } else {
                  console.log(outputImages)
                  // setFinalImages(outputImages)
                  // setScreen('download')
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
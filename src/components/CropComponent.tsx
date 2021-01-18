import * as React from 'react'
import Cropper from 'react-easy-crop'
import { Area, Point } from 'react-easy-crop/types';
import styled from 'styled-components';
import getCroppedImg from './common/getCroppedImage';

interface CropComponentProps {
      aspect: number,
      image: File,
      addFinalImageHandler: any
}

const CropContainer = styled.div`
      position: relative;
      width: 100%;
      height: 60vh;
      background: #333;
`

const CropControls = styled.div`
      height: 100%;
`

const CropComponent = ({ aspect, image, addFinalImageHandler } : CropComponentProps) => {
      const [ crop, setCrop ] = React.useState<Point>({ x: 0, y: 0 })
      const [zoom, setZoom ] = React.useState<number>(1);
      const [croppedAreaPixels, setCroppedAreaPixels] = React.useState<Area | null>(null)

      const onCropComplete = React.useCallback((croppedArea: Area, cropAreaPixels: Area) => {
            setCroppedAreaPixels(cropAreaPixels)
      }, [])
      
      const onSubmitHandler = async () => {
            console.log(croppedAreaPixels)
            const croppedImg =await getCroppedImg(image, croppedAreaPixels)
            addFinalImageHandler(croppedImg)
      }

      return(
            <div>
            <CropContainer>
            <Cropper
                  image={URL.createObjectURL(image)}
                  crop={crop}
                  zoom={zoom}
                  aspect={aspect}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
          />
          </CropContainer>
          <CropControls>
            <input type="range" min="1" max="100" value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))}/>
            <button onClick={onSubmitHandler}>Submit</button>
          </CropControls>
          </div>
      )
}

export default CropComponent
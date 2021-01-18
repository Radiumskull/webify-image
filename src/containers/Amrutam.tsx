import * as React from 'react'
import CropperSection from '../components/amrutam/CropperSection';
import DownloadSection from '../components/amrutam/DownloadSection';
import Dropzone from '../components/common/Dropzone'
import ImageGallery from '../components/common/ImageGallery';

const Amrutam = () => {
      const [imgFiles,setImgFiles] = React.useState<File[]>([]);
      const [ finalImages, setFinalImages ] = React.useState([]);
      const [ screen, setScreen ] = React.useState<string>('upload')
      React.useEffect(() => {
            if(imgFiles.length === 0) setScreen('upload')
      }, [imgFiles])

      const dropzoneChangeHandler = (images: File[]) : void => {
            setScreen('gallery')
            addImagesHandler(images)
      }

      const addImagesHandler = (images: File[]) : void => {
            console.log(images)
            console.log(imgFiles)
            setImgFiles([...imgFiles, ...images])
      }

      const removeImageHandler = (index: number): void => {
            if(index === 0) setImgFiles([...imgFiles.slice(index+1,  )])
            else setImgFiles([...imgFiles.slice(0, index), ...imgFiles.slice(index+1)])
            console.log("Called")
      }

      const proceedHandler = () => {
            if(imgFiles.length !== 0){
                  setScreen('crop')
            }
            console.log("CROP")
      } 

      const renderScreen = (screen: string) => {
            switch(screen){
                  case 'upload':
                        return <Dropzone setImages={dropzoneChangeHandler}/>
                  case 'gallery':
                        return <ImageGallery images={imgFiles} addImages={addImagesHandler} removeImage={removeImageHandler}/>
                  case 'crop':
                        return <CropperSection images={imgFiles} setFinalImages={setFinalImages} setScreen={setScreen}/>
                  case 'download':
                        return <DownloadSection images={finalImages}/>
                  default: 
                        break
            }
      }

      return(
            <div>
                  { renderScreen(screen) }
                  { screen === 'gallery' && <button onClick={proceedHandler}>Proceed</button>}
            </div>
      )
}

export default Amrutam
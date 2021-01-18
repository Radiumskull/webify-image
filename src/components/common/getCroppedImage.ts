


function getRadianAngle(degreeValue: number) {
      return (degreeValue * Math.PI) / 180
}


export default function getCroppedImg(imageFile: File, pixelCrop: any, rotation = 0) {
      const image = new Image()
      image.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')!
        
          const maxSize = Math.max(image.width, image.height)
          const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))
        
          // set each dimensions to double largest dimension to allow for a safe area for the
          // image to rotate in without being clipped by canvas context
          canvas.width = safeArea
          canvas.height = safeArea
        
          // translate canvas context to a central location on image to allow rotating around the center.
          ctx.translate(safeArea / 2, safeArea / 2)
          ctx.rotate(getRadianAngle(rotation))
          ctx.translate(-safeArea / 2, -safeArea / 2)
        
          // draw rotated image and store data.
          ctx.drawImage(
            image,
            safeArea / 2 - image.width * 0.5,
            safeArea / 2 - image.height * 0.5
          )
          const data = ctx.getImageData(0, 0, safeArea, safeArea)
        
          // set canvas width to final desired crop size - this will clear existing context
          canvas.width = pixelCrop.width
          canvas.height = pixelCrop.height
        
          // paste generated rotate image with correct offsets for x,y crop values.
          ctx.putImageData(
            data,
            Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
            Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
          )

          canvas.toBlob(file => {
            console.log("HELLO")
              console.log(file)
                return file
          })
      }

    image.src = URL.createObjectURL(imageFile)

    }
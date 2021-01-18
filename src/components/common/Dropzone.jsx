import React from 'react'
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components'

const DropzoneContainer = styled.div`
    margin: 1em auto;
    background: rgba(200,200,200,0.46);
    height: 600px;
    width: 800px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


const Dropzone = ({ setImages }) => {
    const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone();
    React.useEffect(() => {
        if(acceptedFiles.length > 0 && !isDragActive)
        setImages(acceptedFiles)
    }, [acceptedFiles, isDragActive, setImages])
    return(
        <DropzoneContainer {...getRootProps()} >
            <input {...getInputProps()} />
            <p >Drag 'n' drop some files here, or click to select files</p>
        </DropzoneContainer>
    )
}

export default Dropzone;
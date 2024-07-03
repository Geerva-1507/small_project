import React, {useState, useRef} from 'react'
import './file-upload.css'

function FileUpload() {

    const [file, setFile] = useState();
    const uploadReference = useRef();
    const progressReference = useRef();
    const statusReference = useRef();
    const loadReference = useRef();

    function handleUploadFile(){
        const file = uploadReference.current.files[0];
        setFile(URL.createObjectURL(file));
        let formData = new FormData();
        formData.append('image', file);
        let xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', handleProgress, false);
        xhr.addEventListener('load', handleSucess, false);
        xhr.addEventListener('error', handleError, false);
        xhr.addEventListener('abort', handleAbort, false);
        xhr.open('POST', 'http://localhost:3000/upload'); 
        xhr.send(formData);
    }

    function  handleProgress(e){
        loadReference.current.innerhtml = `uploaded ${e.loaded} bytes of ${e.total}`;
        const percentage = Math.round((e.loaded / e.total) * 100);
        progressReference.current.value = percentage;
        statusReference.current.innerHTML = `${Math.round(percentage)}% uploaded ...`;
    }

    function handleSucess(e){
        statusReference.current.innerHTML = e.target.responseText;
        progressReference.current.value = 0;
    }

    function handleError(e){
        statusReference.current.innerHTML = 'Upload Failed Please try again';
    }

    function handleAbort(e){
        statusReference.current.innerHTML = 'Upload Aborted Please try again';
    }
  return (
    <div className='file-upload-container'>
      <h1>File Upload</h1>
      <input onChange={handleUploadFile} type="file" name='file' ref={uploadReference} />
      <label>
        file Progress : {''}
        <progress ref={progressReference} value={0} max={100} /> 
      </label>
      <p ref={progressReference}></p>
      <p ref={loadReference}></p>
      <img src="{file}" alt="file-upload" style={{ width: '300px', height: '300px'}} />
    </div>
  )
}

export default FileUpload

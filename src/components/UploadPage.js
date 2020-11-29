import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadImage, saveImage } from '../api/apiHelper'

function UploadPage(props) {
  const [initialDiagnosis, setInitialDiagnosis] = useState("");
  const [file, setFile] = useState(null);

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file);
    if (file) 
      Promise.all([uploadImage(formData, props.auth.getAccessToken())
        , saveImage({ initialDiagnosis, name: file.name }, props.auth.getAccessToken())])
        .then(
          toast.success('uploading completed please wait for the result')
        ).catch(e => {
          toast.error('error')
        })
    

  }


  return (
    <div className="form-group">
      <h2>Upload Form</h2>
      <form className='form-inline'>
        <input type="text" value={initialDiagnosis}
          onChange={(e) => { setInitialDiagnosis(e.target.value) }}
          placeholder="Initial Diagnosis" />
        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
        <input type="button" value="Upload" onClick={uploadWithFormData} />
      </form>
    </div>
  );


}

export default UploadPage;



import React, { useState } from "react";
import { uploadImage, saveImage } from '../api/apiHelper'




function UploadPage(props) {
  const [initialDiagnosis, setInitialDiagnosis] = useState("");
  const [file, setFile] = useState(null);

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file);
    // make sure to wait for both promises and then show a toast
    uploadImage(formData, props.auth.getAccessToken());
    saveImage({ initialDiagnosis, name: file.name }, props.auth.getAccessToken())

    // connect()
  }


  return (
    <div className="form-group">
      <h2>Upload Form</h2>
      <form className='form-inline'>
        <input type="text" value={initialDiagnosis}
          onChange={(e) => { setInitialDiagnosis(e.target.value) }}
          placeholder="Initial Diagnosis" />
        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
        <input type="button" value="Upload" onClick={uploadWithFormData} className="btn btn-primary" />
      </form>
    </div>
  );


}

export default UploadPage;



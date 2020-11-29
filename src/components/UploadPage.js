import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { uploadImage, saveImage, rigisterQueueListener } from '../api/apiHelper'

function UploadPage(props) {
  const [initialDiagnosis, setInitialDiagnosis] = useState();
  const [file, setFile] = useState(null);
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    props.auth.getProfile((profile, error) => {
      setNickname(profile.nickname)
      //.then(listenToTheQueue)
    }
    );
  }, [nickname])

  // alert(nickname)

  function registerUser() {
    rigisterQueueListener(nickname, props.auth.getAccessToken()).then(
      toast.success('Registration completed')
    )
  }

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file);
    if (file)
      uploadImage(formData, props.auth.getAccessToken()).then(
        saveImage({ initialDiagnosis, name: file.name }, props.auth.getAccessToken())
          .then(res => toast.success('uploading completed please wait for the result'))
          .catch(e => toast.error('error while saving the image')))
        .catch(e => toast.error('error while uploading the image'))
  }

  return (
    <div className="form-group">
      <h2>Upload Form</h2>
      <form className='form-inline'>
        <input type="text" value={initialDiagnosis}
          onChange={(e) => { setInitialDiagnosis(e.target.value) }}
          placeholder="Initial Diagnosis" />
        <input type="file" name="file" onChange={(e) => {
          registerUser()
          setFile(e.target.files[0])
        }
        }
        />
        <input type="button" value="Upload" onClick={uploadWithFormData} />
      </form>
    </div>
  );

}

export default UploadPage;



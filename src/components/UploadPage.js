import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { uploadImage, saveImage } from '../api/apiHelper'
import { subscribeToTheQueue } from '../activeMessageQueue/queue'

function UploadPage(props) {
  const [initialDiagnosis, setInitialDiagnosis] = useState();
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('')

  useEffect(() => {
    props.auth.getProfile((profile, error) => {
      setEmail(profile.email)
    }
    );
  }, [email])


  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file);
    if (file)
      uploadImage(formData, props.auth.getAccessToken()).then(function (response) {
        return response.text();
      })
        .then((data) => {
          toast.success('image upload is completed' + data)
          saveImage({ initialDiagnosis, name: data, issuer: email }, props.auth.getAccessToken())
          subscribeToTheQueue(email)
        })
        .catch(e => toast.error('error while uploading the image'))
  }


  return (

    <div className="form-group">
      <form className='form-inline'>
        <input className="form-control mr-sm-2" type="text" value={initialDiagnosis}
          onChange={(e) => { setInitialDiagnosis(e.target.value) }}
          placeholder="Initial Diagnosis" />
        <input className="form-control mr-sm-2" type="file" name="file" onChange={(e) => {

          setFile(e.target.files[0])
        }
        }
        />
        <input className="btn btn-primary" type="button" value="Upload" onClick={uploadWithFormData} />
      </form>
    </div>
  );

}

export default UploadPage;



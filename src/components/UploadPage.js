import React, { useState } from "react";
import { uploadImage, saveImage } from '../../api/apiHelper'

// function connect() {
//   const ws = new WebSocket('ws://localhost:61614', 'stomp')

//   ws.onopen = () => {
//     console.log("connected websocket");
//     ws.send('CONNECT\n\n\0')
//   }
//   ws.onmessage = (evt) => {
//     ws.send('SEND\ndestination:testqueue\n\n sending mesaage from here \0' + evt.data)
//   }
//   ws.onclose = () => {
//     ws.send('DISCONNECT\n\n\0')
//   }
//   ws.onerror = () => {
//     ws.send('error in connection')
//   }

// }


function UploadPage() {
  const [initialDiagnosis, setInitialDiagnosis] = useState("");
  const [file, setFile] = useState(null);

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file);
    uploadImage(formData);
    saveImage({ initialDiagnosis, name: file.name })

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



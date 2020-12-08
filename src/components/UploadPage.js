import React, { useState, useEffect, Fragment } from "react";
import { uploadImage, saveImage } from '../api/apiHelper'
import { subscribeToTheQueue } from '../activeMessageQueue/queue'
import imagesStore from '../flux/store/imageStore'
import Form from './reusableComponents/Form'
import ImageList from './reusableComponents/ImageList'
import { useRefresh } from 'react-tidy'
import { toast } from "react-toastify";
import spinnerStore from '../flux/store/spinnerStore'
function UploadPage(props) {

  const renderOptimiser = useRefresh()
  const [initialDiagnosis, setInitialDiagnosis] = useState()
  const [email, setEmail] = useState('')
  const [file, setFile] = useState()
  const [spinnerState, setSpinnerState] = useState(false)
  const [images, setImages] = useState(imagesStore.getImages())

  useEffect(() => {
    spinnerStore.addChangeListener(onSpinnerChange)
    setSpinnerState(spinnerStore.getState())
  }, [spinnerState])

  function onSpinnerChange() {
    setSpinnerState(spinnerStore.getState())
    // renderOptimiser()
  }

  useEffect(() => {
    props.auth.getProfile((profile, error) => { setEmail(profile.email) })
    subscribeToTheQueue(email)
  }, [email])

  useEffect(() => {
    imagesStore.addChangeListener(onChange)
    return () => imagesStore.removeChangeListener(onChange) // clean up when the component is unmounted
  }, [images])

  function handleSaveImage(data) {
    saveImage({ initialDiagnosis, name: data, issuer: email }, props.auth.getAccessToken())
  }

  function handleUploadImage(formData) {
    if (file)
      uploadImage(formData, props.auth.getAccessToken())
        .then((response) => response.text())
        .then((data) => handleSaveImage(data))
        .catch(e => toast.error('Error while uploading the image'))
  }

  function onChange() {
    setImages(imagesStore.getImages())
    renderOptimiser()
  }
  function uploadFormDataHandler() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file)
    handleUploadImage(formData)
  }

  return (
    <Fragment>
      <Form
        onInitialDiagnosisChange={(e) => setInitialDiagnosis(e.target.value)}
        onFileChangeChange={(e) => setFile(e.target.files[0])}
        initialDiagnosisValue={initialDiagnosis}
        uploadFormData={uploadFormDataHandler}
        spinnerState={spinnerState} />
      <ImageList data={images} />
    </Fragment>
  );
}

export default UploadPage;



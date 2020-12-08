import React, { useState, useEffect, Fragment } from "react";
import { toast } from "react-toastify";
import { uploadImage, saveImage } from '../api/apiHelper'
import { subscribeToTheQueue } from '../activeMessageQueue/queue'
import imagesStore from '../flux/store/imageStore'
import Form from './reusableComponents/Form'
import ImageList from './reusableComponents/ImageList'
import { useRefresh } from 'react-tidy'

function UploadPage(props) {

  const renderOptimiser = useRefresh() 
  const [initialDiagnosis, setInitialDiagnosis] = useState();
  const [email, setEmail] = useState('')
  const [file, setFile] = useState(null);
  const [images, setImages] = useState(imagesStore.getImages())

  useEffect(() => {
    props.auth.getProfile((profile, error) => { setEmail(profile.email) });
    subscribeToTheQueue(email)
  }, [email])

  useEffect(() => {
    imagesStore.addChangeListener(onChange)
    if (images.length === 0)
      setImages(imagesStore.getImages())
    return () => imagesStore.removeChangeListener(onChange) // clean up when the component is unmounted
  }, [images])
  
  function handleSaveImage(data) {
    saveImage({ initialDiagnosis, name: data, issuer: email }, props.auth.getAccessToken())
  }
  function handleUploadImage(formData) {
    return uploadImage(formData, props.auth.getAccessToken()).then((response) => {
      toast.success('image upload is completed')
      return response.text();
    })
  }
  function onChange() {
    setImages(imagesStore.getImages())
    renderOptimiser()
  }
  function uploadFormData() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file);
    if (file)
    handleUploadImage(formData)
    .then((data) => handleSaveImage(data))
    .catch((e) => toast.error(e))
    
  }
  function initialDiagnosisChangeHandler(e) {
    setInitialDiagnosis(e.target.value)
  }
  function fileChangeHandler(e) {
    setFile(e.target.files[0])
  }
  return (
    <Fragment>
      <Form onInitialDiagnosisChange={initialDiagnosisChangeHandler} onFileChangeChange={fileChangeHandler}
        initialDiagnosisValue={initialDiagnosis} uploadFormData={uploadFormData} />
      <ImageList data={images} />
    </Fragment>
  );

}

export default UploadPage;



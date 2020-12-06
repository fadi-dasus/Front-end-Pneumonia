import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { uploadImage, saveImage } from '../api/apiHelper'
import { subscribeToTheQueue } from '../activeMessageQueue/queue'
import imagesStore from '../flux/store/imageStore'
import Form from './reusableComponents/Form'
import ImageList from './reusableComponents/ImageList'
import { useRefresh } from 'react-tidy'

function UploadPage(props) {
  const refresh = useRefresh()

  const [initialDiagnosis, setInitialDiagnosis] = useState();
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('')
  const [images, setImages] = useState(imagesStore.getImages())

  useEffect(() => {
    props.auth.getProfile((profile, error) => { setEmail(profile.email) });
    subscribeToTheQueue(email)
  }, [email])

  useEffect(() => {
    imagesStore.addChangeListener(onChange)
    if (images.length === 0)
      setImages(imagesStore.getImages())
    return () => {
      //clean up
      imagesStore.removeChangeListener(onChange)

    }
  }, [images])

  function onChange() {
    setImages(imagesStore.getImages())
    refresh()
  }

  async function uploadFormData() {
    const formData = new FormData();
    formData.append("initialDiagnosis", initialDiagnosis);
    formData.append("file", file);
    if (file)
      handleUploadImage(formData)
        .then((data) => handleSaveImage(data))
        .catch((e) => toast.error(e))

  }

  function handleSaveImage(data) {
    debugger
    saveImage({ initialDiagnosis, name: data, issuer: email }, props.auth.getAccessToken())
  }

  function handleUploadImage(formData) {
    return uploadImage(formData, props.auth.getAccessToken()).then(function (response) {
      toast.success('image upload is completed')
      return response.text();
    })
  }


  function initialDiagnosisChangeHandler(e) {
    setInitialDiagnosis(e.target.value)
  }
  function fileChangeHandler(e) {
    setFile(e.target.files[0])
  }


  return (
    <>
      <Form onInitialDiagnosisChange={initialDiagnosisChangeHandler} onFileChangeChange={fileChangeHandler}
        initialDiagnosisValue={initialDiagnosis} uploadFormData={uploadFormData} />
      <ImageList data={images} />
    </>
  );

}

export default UploadPage;



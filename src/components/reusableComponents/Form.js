import React from 'react'

function Form(props) {
    return (
        <>
            <div className="form-group" style={{ marginTop: '10px' }}>
                <form className='form-inline'>

                    <input className="form-control mr-sm-2" type="text" value={props.initialDiagnosisValue}
                        onChange={props.onInitialDiagnosisChange}
                        placeholder="Initial Diagnosis" />

                    <input className="form-control mr-sm-2" type="file" name="file"
                        onChange={props.onFileChangeChange} />

                    <input className="btn btn-primary" type="button" value="Upload" onClick={props.uploadFormData} />
                </form>
            </div>
            
        </>
    )
}
export default Form 
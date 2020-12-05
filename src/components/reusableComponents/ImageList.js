import React from 'react'
import tableLung from '../../assets/tableLung.jpg';
import shortid from 'shortid';

function ImageList(props) {

    return (
        <>
            <div className="d-flex flex-row"   >

                <table className="table table-striped table-dark" style={{
                    backgroundImage: "url(" + tableLung + ")",
                    marginTop: '50px', marginLeft: '30px', width: '24%', height: '47%', position: 'fixed', overflowY: 'scroll'
                }}>
                    <thead>
                        <tr>
                            <th>ImageID</th>
                            <th>Image Name</th>
                            <th>Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item) => {
                            return (
                                <tr key={shortid.generate()}>
                                    <td >{item.id} </td>
                                    <td >{item.physicalPath.substring(item.physicalPath.lastIndexOf("\\") + 1, item.physicalPath.lastIndexOf(".jpeg"))
                                    } </td>
                                    <td>{item.status} </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default ImageList 
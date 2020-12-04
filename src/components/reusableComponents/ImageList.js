import React from 'react'
// import shortid from 'shortid';
import tableLung from '../../assets/tableLung.jpg';


function ImageList(props) {
    return (
        <>

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
                    <tr>
                        <td >{'1'} </td>
                        <td>{'person1'} </td>
                        <td>{'Pneumonia'} </td>
                    </tr>
                    <tr>
                        <td >{'2'} </td>
                        <td>{'person2'} </td>
                        <td>{'Normal'} </td>
                    </tr>
                    <tr>
                        <td >{'3'} </td>
                        <td>{'person3'} </td>
                        <td>{'Pneumonia'} </td>
                    </tr>
                    <tr>
                        <td >{'4'} </td>
                        <td>{'person4'} </td>
                        <td>{'Pneumonia'} </td>
                    </tr>
                    <tr>
                        <td >{'5'} </td>
                        <td>{'person5'} </td>
                        <td>{'Normal'} </td>
                    </tr>
                    <tr>
                        <td >{'6'} </td>
                        <td>{'person6'} </td>
                        <td>{'Pneumonia'} </td>
                    </tr>
                    <tr>
                        <td >{'7'} </td>
                        <td>{'person7'} </td>
                        <td>{'Normal'} </td>
                    </tr>
                    <tr>
                        <td >{'8'} </td>
                        <td>{'person8'} </td>
                        <td>{'Pneumonia'} </td>
                    </tr>


                </tbody>

                {/* <tbody>
                    {props.data.map((item) => {
                        return (
                            <tr key={shortid.generate()}>
                                <td >{item.from} </td>
                                <td>{item.to} </td>
                                <td>{item.type} </td>
                                <td>{item.unit} </td>
                                <td>{item.time} </td>
                                <td>{item.place} </td>
                            </tr>
                        )
                    })}
                </tbody> */}

            </table>


        </>
    )
}


export default ImageList 
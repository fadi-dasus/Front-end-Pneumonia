import React from 'react'
import img from '../../assets/404.jpg'
function NotFoundPage() {

    return (
        <div
            style={{ backgroundImage: "url(" + img + ")", height: '100%', position: 'absolute', width: '100%' }}>
        </div>
    )
}
export default NotFoundPage
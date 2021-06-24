import React, { useState } from 'react'
import CloseICon from '@material-ui/icons/Close'
import './gallery.css'

const Gallery = () => {

    let data = [{
        id: 1,
        imgSrc: 'https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1651&q=80',
    },
    {
        id: 2,
        imgSrc: 'https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
    },
    {
        id: 3,
        imgSrc: 'https://images.unsplash.com/photo-1485962307416-993e145b0d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
    },
    {
        id: 4,
        imgSrc: 'https://github.com/TotoroDavid/resources/blob/main/imagenes/ripley.jpeg?raw=true',
    },
    {
        id: 5,
        imgSrc: 'https://github.com/TotoroDavid/resources/blob/main/imagenes/tumblr_luknq3fIZ71r2z4wpo1_1280.jpeg?raw=truemg',
    }, {
        id: 6,
        imgSrc: 'https://github.com/TotoroDavid/resources/blob/main/imagenes/wp2468480.png?raw=true',
    },
    ]

    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempimgSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc)
        setModel(true)
    }

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempimgSrc} />
                <CloseICon onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key="index" onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery

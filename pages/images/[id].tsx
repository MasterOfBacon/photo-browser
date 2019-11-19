import React from 'react'
import Image from '../../components/Images/Image'
import { connect } from 'react-redux'
import ImageList from '../../components/ImageList'

const ImageComponent = (props: any) => {
    return (
        <>
            <ImageList />
            <Image />
        </>
    )
}

export default connect(state => state)(ImageComponent)

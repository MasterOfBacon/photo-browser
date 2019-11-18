import React from 'react'
import Image from '../../../components/Images/Image'
import AlbumList from '../../../components/AlbumList'
import { connect } from 'react-redux'

export default connect(state => state)(() => {
    return (
        <>
            <AlbumList />
            <Image />
        </>
    )
})

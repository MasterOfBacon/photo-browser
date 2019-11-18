import React from 'react'
import ImageList from '../components/ImageList'
import { connect } from 'react-redux'

const Images = () => {
    return (
        <ImageList />
    )
}

export default connect(state => state)(Images)

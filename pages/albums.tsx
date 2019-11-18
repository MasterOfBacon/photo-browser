import React from 'react'
import AlbumList from '../components/AlbumList'
import { connect } from 'react-redux'

const Albums = () => {
    return (
        <AlbumList />
    )
}
export default connect(state => state)(Albums)

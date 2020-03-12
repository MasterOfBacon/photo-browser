import React from 'react'
import AlbumList from '../../../components/AlbumList'
import { connect } from 'react-redux'
const Albums = () => <AlbumList />

export default connect(state => state)(Albums)

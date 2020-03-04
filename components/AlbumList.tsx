import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/albumListActions'
import '../styles/App.css'
import ImageThumbnail from './ImageThumbnail'
import { Action } from 'redux'

import {
    Albums,
    Photos
} from '../types'

interface Props {
    albumImages: Photos
    albums: Albums,
    albumId: string
    fetchAlbumImages(albumid: string): Action
    fetchAlbums(page: number | null, limit: number | null): Action
}

function AlbumList(props: Props) {
    useEffect(() => {
        props.fetchAlbums(null, null)
    }, [])
    const renderAlbums = props.albums && props.albums.map((albumData: any) => {
        const albumSelected = props.albumId === albumData.id ? 'selected' : ''
        return (
            <div
                className={`album ${albumSelected}`}
                key={`album_${albumData.id}`}
                onClick={() => props.fetchAlbumImages(albumData.id)}
            >
                {albumData.title}
            </div>
        )
    })
    const renderOpenAlbumImages = () => {
        const imageComponents = props.albumImages && props.albumImages.map((imageData: any) => {
            return (
                <ImageThumbnail
                    key={`album_image_${imageData.id}`}
                    imageData={imageData}
                    thumbnailClassName="album-thumbnail"
                    href="/albums/images/[imageid]"
                    as={`/albums/images/${imageData.id}`}
                    size={20}
                    imageClassName="album-image-thumbnail"
                />
            )
        })
        return (
            <div className="album-open-container" style={{ visibility: props.albumImages.length === 0 ? 'hidden': 'visible'}}>
                {imageComponents}
            </div>
        )
    }
    return (
        <div className="ImageList">
            <div className="albums-container">
                <div className="albums-header">
                    {'Albumit'}
                </div>
                {renderAlbums}
            </div>
            {renderOpenAlbumImages()}
            
        </div>
    )
}

const mapStoreToProps = (store: any) => ({
    albums: store.albumList.albums,
    albumImages: store.albumList.albumImages,
    albumId: store.albumList.albumId
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchAlbums: () => dispatch(actions.fetchAlbums(null, null)),
    fetchAlbumImages: (albumId: string) => dispatch(actions.fetchAlbumImages(albumId))
})

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(AlbumList)


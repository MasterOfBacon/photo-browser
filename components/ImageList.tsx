import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/imageListActions'
import '../styles/App.css'
import ImageThumbnail from './ImageThumbnail'

import { Action } from 'redux'

import {
    Photos,
    SingleImage,
    RootState
} from '../types'

interface Props {
    page: number
    limit: number
    imageList: Photos
    fetchImages(page: number | null, limit: number | null): Action
    setPage(page: number | null, limit: number | null): Action
}

function ImageList(props: Props) {
    useEffect(() => {
        const getImages = async () => props.fetchImages(props.page, props.limit)
        getImages()
    }, [
        props.page, props.limit
    ])
    const renderImageThumbnails = props.imageList.map((imageData: SingleImage) => {
        return (
            <ImageThumbnail
                key={`image_${imageData.id}`}
                imageData={imageData}
                thumbnailClassName="thumbnail"
                href={`/images/[imageid]`}
                as={`/images/${imageData.id}`}
                size={50}
                imageClassName="img-thumbnail"
            />
        )
    })
    return (
        <div className="ImageList">
            <div>
                {`Sivu ${props.page}`}
            </div>
            <div>
                <div
                    className="page-button"
                    style={{ visibility: props.page > 1 ? 'visible' : 'hidden' }}
                    onClick={() => props.setPage(props.page - 1, props.limit)}
                >
                    {'<<'}
                </div>
                <div
                    className="page-button"
                    style={{ visibility: props.imageList.length > 0 ? 'visible' : 'hidden' }}
                    onClick={() => props.setPage(props.page + 1, props.limit)}
                >
                    {'>>'}
                </div>
            </div>
            <div className="thumbnails-container">
                {renderImageThumbnails}
            </div>
        </div>
    )
}

const mapStoreToProps = (store: RootState) => ({
    imageList: store.imageList.imageList,
    page: store.imageList.page,
    limit: store.imageList.limit
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchImages: (page: number, limit:number) => dispatch(actions.fetchImages(page, limit)),
    setPage: (page: number) => dispatch(actions.setPage(page))
})

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ImageList)

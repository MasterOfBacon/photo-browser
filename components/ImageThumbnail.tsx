import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/imageListActions'
import '../styles/App.css'
import Link from 'next/link'
import Loader from 'react-loader-spinner'

function ImageThumbnail(props: any) {
    const [loading, setLoading] = useState(true)
    const imageData = props.imageData
    const thumbnailClassName = props.thumbnailClassName
    const href = props.href
    const as = props.as
    const size = props.size
    const imageClassName = props.imageClassName
    const renderLoading = (
        <div className="loader-thumbnail">
            <Loader
                type="Oval"
                color="#00BFFF"
                height={size}
                width={size}
            />
        </div>
    )
    const thumbnail = (
        <div className={thumbnailClassName}>
            {loading && renderLoading}
            <img onLoad={() => setLoading(false)} src={imageData.thumbnailUrl} className={imageClassName} />
        </div>
    )
    return (
        <Link href={href} as={as}>
            {thumbnail}
        </Link>
    )
}

const mapStoreToProps = (store: any) => ({
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
)(ImageThumbnail)

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/imageListActions'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/App.css'

import { Action } from 'redux'

import {
    Photos,
    RootState
} from '../types'

interface Props {
    imageList: Photos
    fetchImages(page: number | null, limit: number | null): Action
}

function ImagesScroll(props: Props) {
    useEffect(() => {
        props.fetchImages(0, 20)
    }, [])
    const images = props.imageList.map((image) => {
        const url = image.urls && image.urls.thumb
        return (
            <div key={`image_${image.id}`} className="carousel-single-image">
                <img
                    src={`${url}`}
                    className={`carousel-single-image`}
                />
            </div>
        )
    })
    return (
        <div className="ImagesScroll">
            <div>
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={2500}
                    stopOnHover={false}
                    showStatus={false}
                    showArrows={false}
                    centerMode
                    width={'70vw'}
                >
                    {images }
                </Carousel>
            </div>
        </div>
    )
}

const mapStoreToProps = (store: RootState) => ({
    imageList: store.imageList.imageList
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchImages: (page: number, limit:number) => dispatch(actions.fetchImages(page, limit))
})

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ImagesScroll)

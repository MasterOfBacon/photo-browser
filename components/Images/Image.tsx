import React, { useState, useEffect } from 'react'
import Popup from "reactjs-popup"
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import * as actions from '../../actions/imageListActions'
import Loader from 'react-loader-spinner'
import Link from 'next/link'
import { Dispatch as Action } from 'redux';

import {
    Photos,
    SingleImage,
    RootState
} from '../../types'

interface Props {
    imageList: Photos
    image: SingleImage
    fetchSingleImage(imageid: string): Action
}

const Image = (props: Props) => {
    const router = useRouter()
    const imageid = router.query && router.query.imageid && router.query.imageid.toString()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (imageid) {
            setLoading(true)
            const getSingleImage = async () => await props.fetchSingleImage(imageid)
            getSingleImage()
        }
    }, [
        imageid
    ])
    const imageUrl = props.image && props.image.url
    const renderLoading = (
        <div className="loader-front">
            <Loader
                type="Oval"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    )
    if (imageid) {
        const newPath = router.asPath.replace(`/${imageid}`, '')
        return (
            <Link href={`${newPath}`} as={`${newPath}`}>
            <div className="image-popup-container">
                <Popup
                    key={`image_popup_${imageid}`}
                    open={true}
                    contentStyle={{
                        backgroundColor: 'unset',
                        position: 'unset',
                        width: 'unset',
                        border: 'unset'
                    }}
                    position="right center"
                    modal
                    closeOnDocumentClick
                >
                    <div>
                        {!loading && props.image && props.image.title}
                        { loading && renderLoading}
                            <img
                                onLoad={() => setLoading(false)}
                                src={`${imageUrl}`}
                                className={`img-fullimage ${loading && 'hide'}`}
                            />
                    </div>
                </Popup>
            </div>
            </Link>
        )
    }
    return null
}

const mapStoreToProps = (store: RootState) => ({
    imageList: store.imageList.imageList,
    image: store.imageList.image
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchSingleImage: (imageid: string) => dispatch(actions.fetchSingleImage(imageid))
})

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(Image)

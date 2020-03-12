import React from 'react'
import ImagesScroll from '../components/ImagesScroll'
import { connect } from 'react-redux'

const Index = () => {
    return (
        <div className="frontpage">
            <h1>
                {'NextJS & React & Redux App'}
            </h1>
            <div className="maintext">
                <h3>
                    {'By Eero Meriläinen'}
                </h3>
            </div>
            <ImagesScroll />
        </div>
    )
}

export default connect(state => state)(Index)

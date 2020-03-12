import nock from 'nock'

import * as imageListActions from '../actions/imageListActions'
import {
    initialState as imageListInitState
 } from '../reducers/imageList'
import imageListReducer from '../reducers/imageList'

import {
    SET_IMAGES
} from '../actions/actionTypes'
import {
    backendUrl,
    accessKey
} from '../logic/API'
import {
    imageDataMock,
    testImageId
} from '../__mocks__/data'
import { store } from '../__mocks__/mockStore'

const setImagesReducerMock = {
    type: 'SET_IMAGES',
    imageList: [imageDataMock, imageDataMock, imageDataMock]
}

describe('Set Images', () => {
  it('Should set images', () => {
    const imageList = [
        {
            albumId: 1,
            id: 2,
            title: 'Test image',
            url: 'http://localhost:3000'
        }
    ]
    const expectedAction = {
      type: SET_IMAGES,
      imageList
    }
    expect(imageListActions.setImages(imageList)).toEqual(expectedAction)
  })
})
  
describe('Async action test', () => {
    it('See if fetching single image works', () => {
        nock(backendUrl)
            .get(`/photos/${testImageId}?client_id=${accessKey}`)
            .reply(200, imageDataMock)

        return store.dispatch(imageListActions.fetchSingleImage(testImageId))
            .then(() => {
                const actions = store.getActions()
                expect(actions[1].image).toEqual(imageDataMock)
            })
    })
})

describe('Reducer test', () => {
    it('Should return the initial state', () => {
        expect(imageListReducer(undefined, { type: undefined } )).toMatchSnapshot()
    })
    it('Should handle SET_IMAGES request', () => {
        const result = imageListReducer(imageListInitState, setImagesReducerMock)
        expect(result.imageList).toEqual(setImagesReducerMock.imageList)
    })
})

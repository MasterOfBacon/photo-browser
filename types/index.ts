export type Photos = Array<{
    albumId: number,
    id: number,
    title: string,
    urls: {
        thumb: string,
        regular: string
    } | undefined
}>

export type SingleImage = {
    albumId: number | undefined,
    id: number | undefined,
    title: string | undefined,
    urls: {
        thumb: string,
        regular: string
    } | undefined
}

export type Albums = Array<{
    id: string,
    title: string
}>

export interface AlbumListState {
    albums: Albums,
    albumImages: Photos,
    albumId: number
}

export interface ImageListState {
    image: SingleImage,
    imageList: Photos,
    page: number,
    limit: number
}

export interface RootState {
    imageList: ImageListState
    albumList: AlbumListState
}

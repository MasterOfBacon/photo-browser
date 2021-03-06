export type Photos = Array<{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}>

export type SingleImage = {
    albumId?: number,
    id?: number,
    title?: string,
    url?: string,
    thumbnailUrl?: string
}

export type Albums = Array<{
    userId: number,
    id: number,
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

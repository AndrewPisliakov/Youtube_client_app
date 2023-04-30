export interface IData {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: IItem[]
}
export interface IItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics
}
interface ISnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage?: string,
  localized: ILocalized,
  defaultAudioLanguage: string,
}
interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}
interface IThumbnails {
  default: IThumbnailsItem, 
  medium: IThumbnailsItem,
  high: IThumbnailsItem,
  standard: IThumbnailsItem,
  maxres: IThumbnailsItem
}
interface ILocalized {
  title: string,
  description: string
}
interface IThumbnailsItem {
  url: string,
  width: number,
  height: number
}



export enum SortOptions {
  Date = 'date',
  Views = 'views',
  Words = 'words'
}
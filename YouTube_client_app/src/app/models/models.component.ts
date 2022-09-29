
import data from '../../response.json';  

export function getData() {
  return data;
}


interface IItem {
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
  default: {
    url: string,
    width: string,
    height: string
  }
}

interface ILocalized {
  title: string,
  description: string
}
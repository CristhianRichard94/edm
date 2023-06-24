export interface SubGenre {
  name: string;
  bpmRange: string;
  description: string;
  artists: Array<Artist>;
  playlist?: string;
}

export interface Artist {
  name: string;
  link: string;
  imgSrc: string;
}

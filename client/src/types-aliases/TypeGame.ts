export type Game = {
  id: number;
  name: string;
  slug: string;
  rating: number;
  background_image:string,
  ratings?: [
    {
      id: number;
      title: string;
      count: number;
      percent: number;
    }
  ];
  ratings_count?: number;
  metacritic?: number;
  playtime: number;
  saturated_color?: string;
  dominant_color?: string;
  platforms?: [
    {
      platform: {
        id: number;
        name: string;
        slug: string;
        image: string | null;
        year_end: string | null;
        year_start: string;
        games_count: number;
        image_background: string;
      };
    }
  ];
  genres: [GameSubDetails];
  owned: boolean;
  tags?: [GameSubDetails];
  short_screenshots?: [
    {
      id: number;
      image: string;
    }
  ];
};

export type GameSubDetails = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

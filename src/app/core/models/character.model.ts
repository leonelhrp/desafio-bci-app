export interface Character {
  name: string;
  slug: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  image: string;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  films: Array<string>;
}

import { Country } from "./country.interface"
import { Region } from "./region.type"


export interface CacheStore {
  byCapital: Countries ,
  byCountry: Countries,
  byRegion: ByRegion
}

interface Countries {
  term: string,
  countries: Country[]
}

interface ByRegion {
  term: Region,
  countries: Country[]
}

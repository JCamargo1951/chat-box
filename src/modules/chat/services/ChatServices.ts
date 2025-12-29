import { CatService } from "./CatService";
import { DogService } from "./DogService";
import { YesNoService } from "./YesNoService";
import { CountryService } from "./CountryService";

export const chatServices = [
  new YesNoService,
  new DogService,
  new CatService,
  new CountryService,
];

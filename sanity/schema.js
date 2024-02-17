import { homeImages } from "./schemas/homeImages";
import { catalogIndex } from "./schemas/catalogIndex";
import { catalogDetails } from "./schemas/catalogDetails";

export const schema = {
  types: [homeImages, catalogIndex, catalogDetails],
};

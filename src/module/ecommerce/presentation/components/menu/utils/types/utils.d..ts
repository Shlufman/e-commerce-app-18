import { TypeMenuItemDTO } from "../../../../../../../general/constants/constants";
// import { TypeMenuItemDTO } from "../../../../general/constants/constants";

export type TMenuArrayDTO = {
  [key in Exclude<keyof TypeMenuItemDTO, "subMenu">]: string;
} & {
  idParent: string | null;
};

export type TCMenuItemShort = {
  id: string;
  isActive: boolean;
  level: number;
  name: string;
  path: string;
  prefixPath: string;
};

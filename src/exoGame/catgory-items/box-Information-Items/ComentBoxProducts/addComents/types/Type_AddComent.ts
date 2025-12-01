import { RatingLabels } from "../../types/Type_comentBoxProducts";

export interface Component_Props {
  userName: string;
  stare: number | null;
  labels: RatingLabels;
  hover: number;
  felingIcons: (
    stare: number | null,
    labels: RatingLabels,
    hover: number
  ) => void;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

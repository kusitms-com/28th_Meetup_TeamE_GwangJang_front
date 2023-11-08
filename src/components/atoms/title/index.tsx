import { TitleProps } from "@/types";

import { TitleBox, WhiteTitleBox } from "./style";

export const Title = ({ title }: TitleProps) => {
  return <TitleBox>{title}</TitleBox>;
};

export const WhiteTitle = ({ title }: TitleProps) => {
  return <WhiteTitleBox>{title}</WhiteTitleBox>;
};

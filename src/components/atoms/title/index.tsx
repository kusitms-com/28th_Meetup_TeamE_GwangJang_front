import { TitleProps } from "@/types";

import { SubTitleBox, TitleBox, WhiteTitleBox } from "./style";

export const Title = ({ title }: TitleProps) => {
  return <TitleBox>{title}</TitleBox>;
};

export const WhiteTitle = ({ title }: TitleProps) => {
  return <WhiteTitleBox>{title}</WhiteTitleBox>;
};

export const SubTitle = ({ title }: TitleProps) => {
  return <SubTitleBox>{title}</SubTitleBox>;
};

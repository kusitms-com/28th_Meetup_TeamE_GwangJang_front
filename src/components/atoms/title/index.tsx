import { TitleProps } from "@/types";

import { TitleBox } from "./style";

export const Title = ({ title }: TitleProps) => {
  return (
    <>
      <TitleBox>{title}</TitleBox>
    </>
  );
};

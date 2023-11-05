import { MdOutlineNavigateNext } from "react-icons/md";

import { SeeMoreProps } from "@/types";

import { MoreBox } from "./style";

export const SeeMore = ({ text }: SeeMoreProps) => {
  return (
    <MoreBox>
      <div>{text}</div>
      <MdOutlineNavigateNext className="next-icon" />
    </MoreBox>
  );
};

import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router";

import { SeeMoreProps } from "@/types";

import { MoreBox } from "./style";

export const SeeMore = ({ text, path }: SeeMoreProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(path);
  };

  return (
    <MoreBox onClick={onClick}>
      <div>{text}</div>
      <MdOutlineNavigateNext className="next-icon" />
    </MoreBox>
  );
};

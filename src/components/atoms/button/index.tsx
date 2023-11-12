import commentImg from "@/assets/comment.svg";
import likeImg from "@/assets/like.svg";
import { ButtonProps, CategoryButtonProps } from "@/types/index.ts";

import { CateButton, KakaoBtn, TestBtn } from "./style.ts";

export const KakaoButton = ({ children, onClick }: ButtonProps) => {
  return <KakaoBtn onClick={onClick}>{children}</KakaoBtn>;
};

export const BlueButton = ({ children, onClick }: ButtonProps) => {
  return <TestBtn onClick={onClick}>{children}</TestBtn>;
};

export const LikeButton = ({ likeCount }: { likeCount: number }) => {
  return (
    <div>
      <img
        src={likeImg}
        alt="좋아요"
      />
      <p>{likeCount}</p>
    </div>
  );
};

export const CommentButton = ({ commentCount }: { commentCount: number }) => {
  return (
    <div>
      <img
        src={commentImg}
        alt="comment"
      />
      <p>{commentCount}</p>
    </div>
  );
};

export const CategoryButton = ({ children, isCorrect, onClick }: CategoryButtonProps) => {
  return (
    <CateButton
      onClick={onClick}
      isCorrect={isCorrect}
    >
      {children}
    </CateButton>
  );
};

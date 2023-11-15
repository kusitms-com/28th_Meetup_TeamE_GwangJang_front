import commentImg from "@/assets/comment.svg";
import likeImg from "@/assets/like.svg";
import plus from "@/assets/plus_blue.svg";
import { ButtonProps } from "@/types/index.ts";

import { KakaoBtn, TestBtn, SubscribeBtn } from "./style.ts";

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

export const SubscribeButton = () => {
  return (
    <SubscribeBtn>
      <div>주제 구독하기</div>
      <img
        className="plus"
        src={plus}
        alt="+"
        width={14}
      />
    </SubscribeBtn>
  );
};

import { CommentBorderButton, LikeBorderButton } from "@/components/atoms/button";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { CommunityItemProps } from "@/types";

import { CommunityMainContainer } from "./style";

export const MainCommunityBox = ({ data }: { data: CommunityItemProps }) => {
  return (
    <CommunityMainContainer>
      <div className="top-wrapper">
        <div className="content-category">
          <TopicTag category={data.area} />
          {/* <KeywordTag category={data.} /> */}
          <KeywordTag category={data.keyword} />
        </div>
        <div className="content-text">{data.communityText}</div>
      </div>
      <div className="content-quot">
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div>{data.contentsTitle}</div>
        </div>
        <img
          src={data.contentsUrl}
          alt=""
        />
      </div>
      <div className="content-button">
        <LikeBorderButton
          likeCount={data.likeCount}
          initialLikeStatus={data.likeStatus}
        />
        <CommentBorderButton commentCount={data.commentCount} />
      </div>
    </CommunityMainContainer>
  );
};

import { CommentBorderButton, LikeBorderButton } from "@/components/atoms/button";
import { Profile } from "@/components/atoms/profile";
import { KeywordTag } from "@/components/atoms/tag";
import { CommunityItemProps } from "@/types";

import { CommunityDetailContainer } from "./style";

export const PreviewCommunityBox = ({ data }: { data: CommunityItemProps }) => {
  return (
    <>
      <CommunityDetailContainer>
        <div className="top-content">
          <div className="profile-text-wrapper">
            <Profile
              nickname={data.nickname}
              date={data.date}
              profileImg={data.profileImg}
            />
            <div className="top-content-text">{data.communityText} </div>
          </div>
          <div className="top-second-wrapper">
            <div>
              <KeywordTag category={data.area}>{data.keyword}</KeywordTag>
            </div>
            <div className="button-wrapper">
              <LikeBorderButton
                likeCount={data.likeCount}
                initialLikeStatus={data.likeStatus}
              />
              <CommentBorderButton commentCount={data.commentCount} />
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <div>인용한 콘텐츠</div>
          <p>{data.contentsTitle}</p>
        </div>
      </CommunityDetailContainer>
    </>
  );
};

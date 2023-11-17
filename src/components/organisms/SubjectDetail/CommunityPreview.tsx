import styled from "styled-components";

import { PreviewCommunityBox } from "@/components/molecules/PreviewCommunityBox";
import { envirData } from "@/dummy/AreaData";

export const CommunityPreview = () => {
  return (
    <CommunityDetailWrapper>
      {envirData.map((item, idx) => (
        <PreviewCommunityBox
          key={idx}
          data={item}
        />
      ))}
    </CommunityDetailWrapper>
  );
};

export const CommunityDetailWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  /* width: 710px; */
  width: 50%;
  height: 750px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d9d9d9;
  padding: 24px;
  overflow-y: auto;

  /* 숨겨진 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 0.5em;
    border-radius: 5px;
  }
`;
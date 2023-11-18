import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { PreviewCommunityBox } from "@/components/molecules/PreviewCommunityBox";
import { envirData } from "@/dummy/AreaData";

export const CommunityPreview = () => {
  return (
    <Container>
      <div className="PreviewTop">
        <div className="keyword-text">
          <div className="title-top">
            <p>후쿠시마 오염수</p> 에 대해
          </div>
          <div>이렇게 말하고 있어요</div>
        </div>
        <div className="more">
          <SeeMore
            text="더보기"
            path="/community"
          />
        </div>
      </div>
      <CommunityDetailWrapper>
        <div className="scrollInner">
          {envirData.map((item, idx) => (
            <PreviewCommunityBox
              key={idx}
              data={item}
            />
          ))}
        </div>
      </CommunityDetailWrapper>
      <div className="opacityBg"></div>
    </Container>
  );
};

export const Container = styled.div`
  width: 710px;
  position: relative;
  .PreviewTop {
    display: flex;
    justify-content: space-between;
    margin-left: 24px;
    margin-bottom: 20px;
    position: relative;
    .more {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .keyword-text {
    /* width: 400px; */
    display: flex;
    flex-direction: column;
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    .title-top {
      display: flex;
    }

    p {
      font-weight: 700;
      color: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      box-shadow: inset 0 -9px 0 #1ae276;
      margin-right: 5px;
    }
  }
  .opacityBg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    border-radius: 150px;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #d9d9d9 100%);
  }
`;

export const CommunityDetailWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  /* width: 710px; */
  width: 100%;
  height: 750px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d9d9d9;
  padding: 24px;
  box-sizing: border-box;
  .scrollInner {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
  }
  /* 숨겨진 스크롤바 스타일 */
  .scrollInner::-webkit-scrollbar {
    width: 0;
  }
`;

import { useState, useEffect } from "react";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import commentImg from "@/assets/comment.svg";
import likeImg from "@/assets/like.svg";
import temp from "@/assets/react.svg";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { mainCommunityData } from "@/dummy/mainCommunityData";

import { CommunityContainer } from "./style";

import "swiper/css";

export const CommunityBox = () => {
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 1080 ? 1 : 4.5);
  const [slidesPerGroup, setSlidesPerGroup] = useState(window.innerWidth <= 1080 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 1080 ? 1 : 4.5);
      setSlidesPerGroup(window.innerWidth <= 1080 ? 1 : 3);
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TempContainer>
      <Swiper
        spaceBetween={24}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {mainCommunityData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={idx == 0 ? { marginLeft: "300px" } : {}}
          >
            <CommunityContainer>
              <div className="community-content">
                <div className="community-tag-wrapper">
                  <TopicTag
                    color="red"
                    category={item.category}
                  />
                  <KeywordTag
                    color="red"
                    category={item.category}
                  />
                </div>
                <div className="content-wrapper">
                  <div className="content-text">{item.communityText}</div>
                  <div className="status-info">
                    <div className="user-info">
                      <img
                        src={temp}
                        alt=""
                      />
                      <div>
                        <p className="user-nickname">{item.nickname}</p>
                        <p className="content-date">{item.date}</p>
                      </div>{" "}
                    </div>
                    <div className="content-review">
                      <div>
                        <img
                          src={likeImg}
                          alt="좋아요"
                        />
                        <p>{item.likeCount}</p>
                      </div>
                      <div>
                        <img
                          src={commentImg}
                          alt="좋아요"
                        />
                        <p>{item.commentCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quotation">
                <div className="quot-title">인용한 콘텐츠</div>
                <div className="quot-text">{item.quotText}</div>
              </div>
            </CommunityContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </TempContainer>
  );
};

const TempContainer = styled.div`
  /* width: 1440px; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 1080px) {
    & .swiper-container {
      /* display: flex; */
      width: 344px;
    }
  }

  @media (max-width: 880px) {
    & .swiper-container {
      /* display: flex; */
      width: 344px;
    }

    & .swiper-slide {
    }

    & .swiper-slide-active {
      width: 100%;
    }
  }

  @media (max-width: 564px) {
    & .swiper-container {
      /* display: flex; */
      width: 344px;
    }

    width: 300px;
  }
`;

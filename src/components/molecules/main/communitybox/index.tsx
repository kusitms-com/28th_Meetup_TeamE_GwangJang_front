import { useState, useEffect } from "react";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { CommentButton, LikeButton } from "@/components/atoms/button";
import { Profile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { mainCommunityData } from "@/dummy/mainCommunityData";

import { CommunityContainer } from "./style";

import "swiper/css";

export const CommunityBox = () => {
  const [margin, setMargin] = useState((window.innerWidth - 1080) * 0.49);

  useEffect(() => {
    const handleResize = () => {
      setMargin(window.innerWidth * 0.25 * 0.5);
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
        loop={false}
        spaceBetween={24}
        breakpoints={{
          344: {
            slidesPerView: 1,
            // spaceBetween: 24,
          },
          688: {
            slidesPerView: 2.5,
            // spaceBetween: 24,
          },
          1080: {
            slidesPerView: 3.5,
            // spaceBetween: 24,
          },
          1376: {
            slidesPerView: 4.5,
            // spaceBetween: 24,
          },
          1720: {
            slidesPerView: 5,
            // spaceBetween: 24,
          },
        }}
      >
        {mainCommunityData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={idx == 0 ? { marginLeft: `${margin}px` } : {}}
          >
            <CommunityContainer>
              <div className="community-content">
                <div className="community-tag-wrapper">
                  <TopicTag category={item.category} />
                  <KeywordTag category={item.category} />
                </div>
                <div className="content-wrapper">
                  <div className="content-text">{item.communityText}</div>
                  <div className="status-info">
                    <Profile
                      nickname={item.nickname}
                      profileImg={item.profileImg}
                      date={item.date}
                    />
                    <div className="content-review">
                      <LikeButton likeCount={item.likeCount} />
                      <CommentButton commentCount={item.commentCount} />
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

  /* @media (max-width: 1080px) {
    & .swiper-container {
      display: flex;
      width: 344px;
    }
  }

  @media (max-width: 880px) {
    & .swiper-container {
      display: flex;
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
      width: 344px;
    }
  }

  @media (max-width: 344px) {
    & .swiper-container {
      margin: 0 auto;
    }
    & .swiper-slide {
      margin: 0 auto;
    }
  } */
`;

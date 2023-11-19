import styled from "styled-components";

import temp from "@/assets/main_logo.svg";
import { TopTopicBox } from "@/components/molecules/longTopicBox";
import { MySubscribeData } from "@/dummy/MySubscribeData";

export const MySideBox = () => {
  //로그아웃
  const LogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  return (
    <>
      <MySideBoxWrapper>
        <div className="my-profile">
          <img
            src={temp}
            alt="profile"
          ></img>
          <p>닉네임</p>
        </div>
        <div className="my-line"></div>

        <div className="tab-box">
          <p>작성한 커뮤니티 글</p>
          <p>좋아요한 콘텐츠</p>
          <p>좋아요한 커뮤니티 글</p>
        </div>

        <div className="my-line"></div>

        <div className="subscribe-box">
          <div className="subscribe-title">구독한 사회이슈</div>
          <p> 사회이슈 키워드는 최대 3개까지 구독할 수 있어요.</p>
          <div className="subscribe-topic">
            {MySubscribeData.map((item, idx) => {
              return (
                <TopTopicBox
                  key={idx}
                  data={item}
                />
              );
            })}
          </div>
        </div>

        <div className="my-line"></div>

        <div
          className="my-logout"
          onClick={LogOut}
        >
          로그아웃
        </div>
      </MySideBoxWrapper>
    </>
  );
};

export const MySideBoxWrapper = styled.div`
  border-radius: 5px;
  background: var(--Gray1_50, #fafafa);
  width: 313px;
  height: 100%;
  flex-shrink: 0;
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);

  .my-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 30px;

    img {
      margin-top: 25px;
      width: 89px;
      height: 89px;
      border-radius: 100%;
      border: 1px solid gray;
    }

    p {
      margin-top: 16px;
      color: var(--Gray9_800, #424242);
      font-size: var(--text_h5);
      font-weight: 700;
      line-height: 34px;
      letter-spacing: -0.36px;
    }
  }

  .tab-box {
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    p {
      color: var(--Gray7_600, #757575);
      border-radius: 5px;
      font-size: var(--text_b2);
      line-height: 24px;
      letter-spacing: -0.24px;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background: var(--Gray3_200, #eee);
        color: var(--Gray10_900, #212121);
        font-size: var(--text_b2);
        font-weight: 600;
      }
    }
  }

  .my-line {
    height: 1px;
    background: var(--Gray3_200, #eee);
    margin: 20px 10px;
  }

  .subscribe-box {
    padding: 0px 20px;

    .subscribe-title {
      color: var(--Gray9_800, #424242);
      font-size: var(--text_b2);
      font-weight: 600;
    }

    p {
      color: var(--Gray6_500, #959595);
      font-size: var(--text_cap1);
      margin-top: 5px;
    }

    .subscribe-topic {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      gap: 10px;
    }
  }

  .my-logout {
    cursor: pointer;
    color: var(--Gray6_500, #959595);
    text-align: center;
    font-size: var(--text_b3);
    line-height: 18px;
    letter-spacing: -0.21px;
    margin-bottom: 20px;
  }
`;

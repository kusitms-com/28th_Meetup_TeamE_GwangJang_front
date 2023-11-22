import styled from "styled-components";

import instaImg from "@/assets/Footer/footer-insta.svg";
import logo from "@/assets/Footer/footer-logo.svg";
import twitImg from "@/assets/Footer/footer-twitter.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div className="top-box">
          <img
            src={logo}
            alt="광장"
          />
          <div className="text-box">
            <p
              className="text"
              onClick={() =>
                window.open("https://tivegirl.notion.site/ca9e2ce6818142009bd023144ea540bd")
              }
            >
              CS페이지
            </p>
            <p>|</p>
            <p
              className="text"
              onClick={() =>
                window.open("https://tivegirl.notion.site/89c4c82614f54363b3b1870544da7e3f")
              }
            >
              행동강령 및 운영정책
            </p>
            <p>|</p>
            <p
              className="text"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfaG6BKFpiQfP8VOkjeAKfhgcobB4_A3uYp1gvG8J9R7vvD5w/viewform"
                )
              }
            >
              사회 이슈 제안하기
            </p>
            <p>|</p>
            <p
              className="text"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfszGqCom3P0hfdQu9PMZ0SDTTYTeBGeABvF9tgxqtKiQnz-g/viewform"
                )
              }
            >
              신고하기
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom-box">
          <div className="bottom-text-box">
            <p>E-mail : our-gwangjang@gmail.com</p>
            <p>ⓒ 2023 수영의 세포들 All rights reserved.</p>
          </div>
          <div className="sns-box">
            <a href="https://www.instagram.com/our.gwangjang/">
              <img
                src={instaImg}
                alt="광장 인스타"
              />
            </a>
            <img
              src={twitImg}
              alt="광장 트위터"
            />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: var(--Gray9_800);
  height: 211px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;

  .top-box {
    display: flex;
    padding-top: 45px;
    justify-content: space-between;

    .text-box {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      color: var(--Gray4_300, #d9d9d9);
      text-align: right;
      font-size: var(--text_b3);
      line-height: 22px;
      letter-spacing: -0.21px;
      gap: 10px;

      .text {
        cursor: pointer;
      }
    }
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #575757;
    margin-top: 24px;
    margin-bottom: 15px;
  }

  .bottom-box {
    display: flex;
    justify-content: space-between;
    .bottom-text-box {
      color: var(--Gray6_500, #959595);
      font-size: var(--text_cap1);
      line-height: 18px;
      letter-spacing: -0.18px;
    }

    img {
      cursor: pointer;
    }

    .sns-box {
      display: flex;
      gap: 10px;
    }
  }

  @media (max-width: 1080px) {
    width: 90%;
    margin: 0 auto;
  }
`;

import styled from "styled-components";

import temp from "@/assets/main_logo.svg";
import { Comment } from "@/components/molecules/comment";
import { CommentData } from "@/dummy/commentData";

export const CommentList = () => {
  return (
    <CommunityListWrapper>
      <div className="comment-count">
        <b>24</b>개의 댓글이 있어요
      </div>
      <div className="comment-post">
        <img
          src={temp}
          alt=""
        />
        <div className="input-button-box">
          <input placeholder="댓글을 입력해주세요." />
          <button>등록</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="comment-box">
        <Comment data={CommentData} />
      </div>
    </CommunityListWrapper>
  );
};

export const CommunityListWrapper = styled.div`
  padding: 16px 30px;
  box-sizing: border-box;
  width: 896px;
  height: 1432px;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
    border-radius: 5px;
  }
  .line {
    margin: 20px 0px;
    border-bottom: 2px solid var(--Gray2_100, #f5f5f5);
  }

  .comment-count {
    color: var(--Gray9_800, #424242);
    font-size: var(--text_b1);
    line-height: 28px;
    letter-spacing: -0.27px;
  }

  .comment-post {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: center;
    /* border: 1px solid blue; */
    justify-content: center;

    img {
      border-radius: 100%;
      width: 40px;
      height: 40px;
      object-fit: cover;
    }

    .input-button-box {
      display: flex;
      gap: 16px;
      /* border: 1px solid red; */

      input {
        height: 56px;
        width: 672px;
        border-radius: 5px;
        background: var(--Gray3_200, #eee);
        outline: none;
        border: none;
        padding-left: 16px;
        box-sizing: border-box;

        &::placeholder {
          font-size: var(--text_b2);
          color: var(--Gray6_500, #959595);
        }

        @media (max-width: 672px) {
          width: 100%;
        }
      }

      button {
        border-radius: 5px;
        width: 84px;
        border: none;
        background: var(--Gray3_200, #eee);
        color: var(--Gray6_500, #959595);
        text-align: center;
        font-size: var(--text_b1);
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  .comment-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

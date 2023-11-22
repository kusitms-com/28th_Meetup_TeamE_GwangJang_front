import styled from "styled-components";

export const MySideBoxWrapper = styled.div`
  border-radius: 5px;
  background: var(--Gray1_50, #fafafa);
  /* width: 313px; */
  height: fit-content;
  width: fit-content;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  flex-shrink: 0;
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);

  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  .my-profile {
    display: flex;
    width: 252px;
    height: 240px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* margin-bottom: 30px; */

    .img-box {
      display: flex;
      position: relative;

      .profile-img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 1px solid var(--Gray4_300, #d9d9d9);
      }

      .edit-box {
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 0;

        width: 32px;
        height: 32px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--Gray9_800);
      }
    }

    .nick-box {
      display: flex;
      margin-top: 16px;
      gap: 6px;
      align-items: center;

      p {
        color: var(--Gray9_800, #424242);
        font-size: var(--text_h5);
        font-weight: 700;
        line-height: 34px;
        letter-spacing: -0.36px;
      }

      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .change-nick {
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;

        input {
          padding: 10px;
          width: 190px;
          border-radius: 5px;
          outline: none;
          border: 1px solid gray;
          font-family: Pretendard; //안먹혀서

          &::placeholder {
            color: gray;
          }
        }

        .btn-wrapper {
          display: flex;
          justify-content: center;
          gap: 10px;

          .change-btn {
            border-radius: 5px;
            height: 35px;
            width: 60px;
            color: white;
            border: none;
            font-family: Pretendard; //안먹혀서
            background-color: var(--Main_Blue);
            cursor: pointer;
          }

          .cancel-btn {
            height: 35px;
            border-radius: 5px;
            width: 60px;
            color: var(--Gray6_500);
            border: none;
            font-family: Pretendard; //안먹혀서
            background-color: var(--Gray3_200);
            cursor: pointer;
          }
        }
      }
    }
  }

  .my-line {
    width: 2px;
    height: 200px;
    margin: 0px 20px;
    background: var(--Gray3_200, #eee);
  }

  .my-logout {
    cursor: pointer;
    color: var(--Gray6_500, #959595);
    text-align: center;
    font-size: var(--text_b3);
    line-height: 18px;
    letter-spacing: -0.21px;
    margin-bottom: 20px;
    /* display: flex; */
    margin: 0 auto;
    /* align-items: center; */
  }
`;

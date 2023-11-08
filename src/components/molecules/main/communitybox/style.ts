import styled from "styled-components";

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 296px; */
  flex-shrink: 0;
  box-shadow: 0px 15px 60px 0px rgba(117, 117, 117, 0.2);
  background: #fff;
  flex: 1;
  border-radius: 5px;

  .community-content {
    padding: 20px;
    box-sizing: border-box;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .community-tag-wrapper {
      display: flex;
      gap: 6px;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 18px;

      .content-text {
        overflow: hidden;
        color: var(--Gray9_800, #424242);
        font-size: var(--text_b3);
        font-weight: 400;
        line-height: 22px; /* 157.143% */
        letter-spacing: -0.21px;
      }

      .status-info {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        border: 1px solid blue;

        .user-info {
          display: flex;
          gap: 10px;
          img {
            border-radius: 100%;
            object-fit: cover;
          }

          .user-nickname {
            color: var(--Gray7_600, #757575);
            font-size: 12px;
            line-height: 18px; /* 150% */
            letter-spacing: -0.18px;
          }

          .content-date {
            color: var(--Gray5_400, #bdbdbd);
            font-size: 10px;
            font-weight: 400;
            line-height: 10px; /* 100% */
            letter-spacing: -0.15px;
          }
        }

        .content-review {
          border: 1px solid red;
          display: flex;
          gap: 10px;
        }
      }
    }
  }

  .quotation {
    padding: 18px;
    box-sizing: border-box;

    display: flex;
    gap: 4px;
    flex-direction: column;
    height: 30%;
    border-radius: 0px 0px 5px 5px;
    /* background: var(--Gray2_100, #f5f5f5); */
    background: var(--Gray4_300, #d9d9d9);
    .quot-title {
      color: var(--Gray6_500, #959595);
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 140% */
      letter-spacing: -0.15px;
    }

    .quot-text {
      color: var(--Gray8_700, #616161);
      font-size: 14px;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.21px;
    }
  }
`;

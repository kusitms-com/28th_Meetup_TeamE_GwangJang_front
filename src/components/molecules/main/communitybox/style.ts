import styled from "styled-components";

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 296px;
  flex-shrink: 0;
  box-shadow: 0px 15px 12px 0px rgba(117, 117, 117, 0.2);
  background: var(--Gray2_100, #f5f5f5);
  overflow: hidden;
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
        height: 30px;

        .user-info {
          display: flex;
          align-items: center;
          gap: 10px;
          img {
            border-radius: 100%;
            object-fit: cover;
          }

          .user-nickname {
            color: var(--Gray7_600, #757575);
            font-size: var(--text_cap1);
            line-height: 18px; /* 150% */
            letter-spacing: -0.18px;
          }

          .content-date {
            color: var(--Gray5_400, #bdbdbd);
            font-size: var(--text_btn1);
            font-weight: 400;
            line-height: 10px; /* 100% */
            letter-spacing: -0.15px;
          }
        }

        .content-review {
          display: flex;
          align-items: center;
          gap: 8px;

          //
          color: var(--Gray6_500, #959595);
          text-align: center;
          font-size: 12px;
          line-height: 18px; /* 150% */
          letter-spacing: -0.18px;

          div {
            display: flex;
            align-items: center;
            gap: 3px;
          }
        }
      }
    }
  }

  .quotation {
    padding: 12px 18px;
    box-sizing: border-box;
    display: flex;
    gap: 4px;
    height: 40%;
    flex-direction: column;
    border-radius: 0px 0px 5px 5px;
    background: var(--Gray3_200, #eee);
    overflow: hidden;

    .quot-title {
      color: var(--Gray6_500, #959595);
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 140% */
      letter-spacing: -0.15px;
    }

    .quot-text {
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--Gray8_700, #616161);
      font-size: 14px;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.21px;
    }
  }
`;

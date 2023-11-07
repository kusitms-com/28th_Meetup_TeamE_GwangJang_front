import styled from "styled-components";

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 319px;
  flex-shrink: 0;
  box-shadow: 0px 15px 60px 0px rgba(117, 117, 117, 0.2);
  background: #fff;
  flex: 1;
  border-radius: 5px;

  .community-content {
    border-radius: 5px 5px 0px 0px;
    height: 70%;
  }

  .quotation {
    display: flex;
    height: 30%;
    border-radius: 0px 0px 5px 5px;
    background: var(--Gray2_100, #f5f5f5);
  }
`;

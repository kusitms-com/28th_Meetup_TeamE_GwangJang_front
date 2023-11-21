import styled from "styled-components";

import notfound from "@/assets/notfound.svg";
const SearchNotFound = () => {
  return (
    <Container>
      <div className="dots">
        <img
          src={notfound}
          alt="x"
        />
        <img
          src={notfound}
          alt="x"
        />
        <img
          src={notfound}
          alt="x"
        />
      </div>
      <div className="text">
        <p className="first">검색 결과가 없어요.</p>
        <p className="second">다른 검색어로 찾아보시겠어요?</p>
      </div>
    </Container>
  );
};

export default SearchNotFound;

const Container = styled.div`
  margin: 124px auto 150px;
  .dots {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 31px;
  }
  .text {
    color: var(--Gray6_500, #959595);
    text-align: center;
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    letter-spacing: -0.36px;
  }
`;

import { Container } from "./style";

const SearchCategory = ({
  searchCategoryBtn,
  setSearchCategoryBtn,
}: {
  searchCategoryBtn: string;
  setSearchCategoryBtn: (arg0: string) => void;
}) => {
  return (
    <Container>
      <div className="inner">
        <div
          onClick={() => setSearchCategoryBtn("사회 이슈 주제")}
          className={searchCategoryBtn === "사회 이슈 주제" ? "active" : ""}
        >
          사회 이슈 주제
        </div>
        <div
          onClick={() => setSearchCategoryBtn("커뮤니티")}
          className={searchCategoryBtn === "커뮤니티" ? "active" : ""}
        >
          커뮤니티
        </div>
      </div>
    </Container>
  );
};

export default SearchCategory;

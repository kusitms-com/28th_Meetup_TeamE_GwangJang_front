import { Container } from "./style";

const SearchTitle = ({
  search,
  searchCount,
  searchCategoryBtn,
}: {
  search: string;
  searchCount: number;
  searchCategoryBtn: string;
}) => {
  const searchResult = search;
  return (
    <Container>
      <div className="inner">
        <p>‘{searchResult}’</p>에 대한 {searchCategoryBtn} 글 <p>{searchCount}</p>건
      </div>
    </Container>
  );
};

export default SearchTitle;

import { useRecoilState } from "recoil";

import { CategoryButton } from "@/components/atoms/button";
import { mySubjectData } from "@/dummy/mySubjectData";
import { selectedCategoryState } from "@/recoil/atoms";

import { CategoryFilterContainer } from "./style";

export const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);

  const onClickCategory = (tag: string) => {
    console.log(selectedCategory);
    setSelectedCategory(tag);
  };

  return (
    <CategoryFilterContainer>
      {mySubjectData.category.map((tag, idx) => {
        const isSelected = selectedCategory === tag;
        return (
          <CategoryButton
            key={idx}
            onClick={() => onClickCategory(tag)}
            isSelected={isSelected}
          >
            {tag}
          </CategoryButton>
        );
      })}
    </CategoryFilterContainer>
  );
};

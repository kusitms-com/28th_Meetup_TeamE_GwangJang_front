import { useState } from "react";

import { CategoryButton } from "@/components/atoms/button";
import { mySubjectData } from "@/dummy/mySubjectData";

import { CategoryFilterContainer } from "./style";

export const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(mySubjectData.category[0]);

  const onClickCategory = (tag: string) => {
    setSelectedCategory(tag);
  };

  return (
    <>
      <CategoryFilterContainer>
        {mySubjectData.category.map((tag, idx) => {
          const isCorrect = selectedCategory === tag;
          console.log("start:", isCorrect);
          return (
            <CategoryButton
              key={idx}
              onClick={() => onClickCategory(tag)}
              isCorrect={isCorrect}
            >
              {tag}
            </CategoryButton>
          );
        })}
      </CategoryFilterContainer>
    </>
  );
};

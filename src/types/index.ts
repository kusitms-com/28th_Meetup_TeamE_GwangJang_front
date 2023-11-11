import React, { ChangeEvent, FocusEvent } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // 다른 버튼 관련 프로퍼티 추가
}

export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  errorLine?: boolean;
}

export interface discussedTopicProps {
  title: string;
  subTitles: string[];
  idx: number;
}
[];
export interface TitleProps {
  title: string;
}
export interface SeeMoreProps {
  text: string;
}

export interface discussedTopicProps {
  title: string;
  subTitles: string[];
  idx: number;
}
[];

export interface MySubjectTopicProps {
  category: string;
  data: myDataProps[];
}
[];

export interface myDataProps {
  category: string;
  semiData: semiDataProps[];
}
[];

export interface semiDataProps {
  title: string;
  type: string;
  image: string;
  date: string;
}
[];

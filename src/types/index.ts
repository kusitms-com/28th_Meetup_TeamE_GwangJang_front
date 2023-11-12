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
  path: string;
}

export interface ContentDataProps {
  category: string;
  keyword: string[];
  type: string;
  title: string;
  imgUrl: string;
  content: string;
  link: string;
}

export interface SubjectProps {
  title: string;
  imgUrl: string;
  subscribeCount: number;
  category: string;
}

export interface ProfileProps {
  nickname: string;
  profileImg: string;
  date: string;
}

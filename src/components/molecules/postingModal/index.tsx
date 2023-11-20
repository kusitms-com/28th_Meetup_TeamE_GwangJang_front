import { ChangeEvent, useState } from "react";

import { BigProfile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";

import { PostingModalContainer } from "./style";

export const PostingModal = () => {
  const [writeText, setWriteText] = useState("");
  const [textLen, setTextLen] = useState(0);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWriteText(e.target.value);
    setTextLen(e.target.value.length);
  };

  const onClickButton = () => {
    console.log("글 올리기 ");
  };

  return (
    <PostingModalContainer onClick={(e) => e.stopPropagation()}>
      <div className="first-box">
        <BigProfile
          nickname="chaemin"
          date="2001.04.05"
          profileImg=""
        />
        <button onClick={onClickButton}>글 올리기</button>
      </div>
      <div className="second-box">
        <TopicTag category="환경" />
        <KeywordTag category="ㅇㄹㅇㄹ" />
        <KeywordTag category="ㅇㄹㅇㄹ" />
      </div>
      <div className="input-box">
        <textarea
          placeholder="인용 글 내용을 입력해주세요."
          maxLength={500}
          value={writeText}
          onChange={onChange}
        />
        <p>({textLen}/500)</p>
      </div>
      <div className="content-quot">
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div>ㄴㄴㄴ</div>
        </div>
        <img
          src="https://images.chosun.com/resizer/XKL6ePOdAuAn81yF-ZBOY8VyQWs=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/JMI3RCEB2Y7QSIUWJKT2MT7CC4.jpg"
          alt=""
        />
      </div>
    </PostingModalContainer>
  );
};

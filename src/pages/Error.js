import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import errorPage from "../assests/css/errorPage.webp";
const Error = () => {
    const navigate = useNavigate()
  return (
    <Container>
      <img src={errorPage} alt="에러" />
      <p>페이지를 찾을 수 없습니다.</p>
      <button onClick={()=>{
        navigate('/')
      }}>메인페이지로 돌아가기</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    margin: 20px 0 80px 0;
  }
  button {
    width: 302px;
    height: 65px;
    border: 1px solid #aeaeb2;
    border-radius: 10px;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    cursor: pointer;
  }
`;
export default Error;

import React from "react";
import styled from "styled-components";
import main from "../assests/css/메인.png";
import OpenChatSlide from "../components/OpenChatSlide";
import CategorySlide from "../components/CategorySlide";
import north from "../assests/css/북쪽.png";
import east from "../assests/css/동쪽.png";
import west from "../assests/css/서쪽.png";
import south from "../assests/css/남쪽.png";
const Main = () => {
  return (
    <Container>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          margin: "70px auto",
        }}
      >
        <img  src={main} alt="메인"></img>
      </div>
      <div>
        <CategorySlide></CategorySlide>
      </div>
      <div>
        <h2 style={{ marginLeft: "160px" }}>Find accommodation by region</h2>
        <div className="region">
          <img className="west" src={west} alt="서쪽"></img>
          <img className="north" src={north} alt="북쪽"></img>
          <img className="east" src={east} alt="동쪽"></img>
          <img className="south" src={south} alt="남쪽"></img>
        </div>
      </div>
      <div>
        <h2 style={{ marginLeft: "160px", marginBottom: "20px" }}>
          Popular openchat
        </h2>
        <OpenChatSlide rtl={false} />
        <OpenChatSlide rtl={true} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* height: auto; */
  /* min-height: 100vh; */
  width: 100%;
  padding-bottom: 80px;
  h2{
    font-size: 30px;
  }
  .region {
    width: 80%;
    /* width: calc(80%-40px); */
    height: 800px;
    margin: 0 auto;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;
    /* border: 1px solid; */
    img{
      /* width: calc(70%-60px); */
    }
    .north {
      position: absolute;
      top: 60px;
      left: 18%;
    }
    .east {
      position: absolute;
      right: 6%;
      top: 5%;
    }
    .west {
      position: absolute;
      left: 3%;
      top:33%
    }
    .south {
      position: absolute;
      left: 26%;
      bottom: 17%;
    }
  }
`;
export default Main;

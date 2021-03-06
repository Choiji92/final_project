import React, { useEffect, useRef, useState } from "react";
import { Map, MapMarker, CustomOverlayMap, ZoomControl } from "react-kakao-maps-sdk";
import styled from "styled-components";
import back2 from "../assests/css/배경2.webp";
import starIcon from "../assests/css/starIcon.png";
import unsaveIcon from "../assests/css/unsaveIcon.png";
import saveIcon from "../assests/css/saveIcon.png";
import cancelIcon from "../assests/css/cancelIcon.png";
import { useRecoilValue } from "recoil";
import { houseInfoMap } from "../recoil/atoms";
import { useQuery } from "react-query";
import axios from "axios";
const TestMap2 = () => {
  const { kakao } = window;
  const [isOpen, setIsOpen] = useState(false);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [info, setInfo] = useState();
  const [save, setSave] = useState(false)
  const { data } = useQuery(
    ["houseInfo"],
    // ()=>getWriteData(paramsId),
    () => {
      return axios
        .get(`http://localhost:5001/testList/`)
        .then((res) => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  // console.log(isHouseInfoMap);
  useEffect(() => {
    // if (!map) return;
    let geocoder = new kakao.maps.services.Geocoder();
    let markers = [];
    const bounds = new kakao.maps.LatLngBounds();
    for (let i = 0; i < data.length; i++) {
      geocoder.addressSearch(data[i].fullAddress, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          // let content = `<div id= "label" class ="label">카카오!</div>`;
          // console.log(result);
          // const bounds = new kakao.maps.LatLngBounds();
          markers.push({
            position: {
              lat: result[0].y,
              lng: result[0].x,
            },
            content: data[i],
          });
          // console.log(markers);
          bounds.extend(new kakao.maps.LatLng(result[0].y, result[0].x))
          // console.log(bounds)
          // const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          // 결과값으로 받은 위치를 마커로 표시합니다
          // const marker = new kakao.maps.Marker({
          //   map: map,
          //   position: coords,
          //   // image:jeju1,
          // });
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          // map.setCenter(coords);

        }
        setMarkers(markers);
        map.setBounds(bounds);
      });
    }
  }, [map]);
  const mapRef = useRef()
  const zoomIn = () => {
    const map = mapRef.current
    map.setLevel(map.getLevel() - 1)
  }
  const zoomOut = () => {
    const map = mapRef.current
    map.setLevel(map.getLevel() + 1)
  }

  return (
    <>
      <Map // 지도를 표시할 Container
        id={`map`}
        center={{
          // 지도의 중심좌표
          lat: 33.3616666,
          lng: 126.5291666,
        }}
        style={{
          // 지도의 크기
          width: "50%",
          height: "450px",
        }}
        level={10} // 지도의 확대 레벨
        onCreate={setMap}
      >
         <div className="custom_zoomcontrol radius_border">
            <span onClick={zoomIn}>
              <img
                src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
                alt="확대"
              />
            </span>
            <span onClick={zoomOut}>
              <img
                src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
                alt="축소"
              />
            </span>
          </div>
        {/* <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} /> */}
        {markers.map((v) => (
          <>
          <MapMarker
            position={v.position}
            onClick={() => {
              setInfo(v);
              setIsOpen(true);
            }}
          />
            {isOpen && info.content === v.content && (
              <CustomOverlayMap position={v.position}>
                <Wrap >
                  <div className="info">
                    <div className="title">
                      <img
                        src={cancelIcon}
                        className="close"
                        onClick={() => setIsOpen(false)}
                        alt="닫기"
                      ></img>
                    </div>
                    <div className="body">
                      <div className="desc">
                        <div className="house">해변근처의 게스트하우스</div>
                        <div className="iconWrap">
                          <div>
                            <img src={starIcon} alt="별점"></img>
                            <p>5.0</p>
                          </div>
                          {save ?<img onClick={()=>{
                            setSave(false)
                          }} src={saveIcon} alt="저장"></img>:<img onClick={()=>{
                            setSave(true)
                          }} src={unsaveIcon} alt="저장"></img> }
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </Wrap>
              </CustomOverlayMap>
            )}
            </>
        ))}
      </Map>
    </>
  );
};

const Wrap = styled.div`
  border-radius: 20px;
  position: relative;
  bottom: 200px;

  .info {
    /* border: 1px solid red; */
  }
  .title {
    background: url(${back2}) no-repeat;
    background-size: cover;
    width: 400px;
    height: 220px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    img {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  }
  .body {
    background-color: white;
    padding: 12px 20px 16px 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .desc {
    display: flex;
    flex-direction: column;
  }
  .house {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #828282;
    margin-bottom: 11px;
  }
  .iconWrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: #828282;
        margin-left: 8px;
      }
    }
    img {
      width: 26px;
      height: 26px;
      cursor: pointer;
    }
  }
`;

export default TestMap2;

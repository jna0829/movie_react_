import React, { useState, useEffect } from "react";
import '../css/Theater.css';
import theaterImg from '../img/theater.jpg';
import { Link } from "react-router-dom";

import { API_BASE_URL } from "../config/host-config";
export const BASE_URL = API_BASE_URL + '/api/theater';

const Theater = () => {

    const requestLocation = e => {

        console.log('클릭한지역:', e.target.dataset.loc);

        // 지역 목록 가져오기
        fetch(`${BASE_URL}/${e.target.dataset.loc}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
        });
    }


    let currentMenu;

    //클릭 활성화 기능
    function activate(elem) {
        elem.classList.add('menu-active');
        currentMenu = elem;
    }

    //클릭 비활성화 기능
    function inactivate(elem) {
        elem.classList.remove('menu-active');
    }


    function clickMenuHandler(e) {
        if(currentMenu) {
            inactivate(currentMenu);
        }
        activate(e.target);
        console.log(e.target);
    };

    // function openMenu(e) {

    //     //이벤트 시작시 className="tabContent" 숨기기
    //     const tabContent = document.querySelectorAll('.tabContent');
    //     for (let i=0; i<tabContent.length; i++) {
    //         tabContent[i].style.display = "none";
    //     }

    //     //모든 location/button 선택 제거
    //     const location = document.querySelectorAll('.location');
    //     for (let i=0; i<location.length; i++) {
    //         location[i].style.remove('menu-active');
    //     }

    //     //클릭한 버튼 활성화
    //     const tabPage = e.target.dataset.loc;
    //     document.getElementById(tabPage).style.display = "block";

    //     //버튼배경색 처리
    //     e.target.style.add('menu-active') = e.target.dataset.loc;
    // };

    // // 이벤트 핸들러 바인딩
    // const btnGroup = document.querySelector('.btn-group');
    // btnGroup.onClick = openMenu;

    // // 초기 디폴트 클릭상태로 시작
    // document.getElementById("default").click();


    return(
        <>
        <div className="container">

            <h1 className="title">전체극장</h1>
            <div className="theater-box">
                <div className="btn-group">
                    <button className="location" id="default" data-loc='Seoul' onClick={clickMenuHandler} >서울</button>
                    <button className="location" data-loc='Gyeonggi' onClick={clickMenuHandler}>경기</button>
                    <button className="location" data-loc='Gangwon' onClick={clickMenuHandler}>강원</button>
                    <button className="location" data-loc='Gyeongbuk' onClick={clickMenuHandler}>경북</button>
                    <button className="location" data-loc='Gyeongnam' onClick={clickMenuHandler}>경남</button>
                </div>
                
                {/* Tab content */}
                <div id="Seoul" className="tabContent">
                    <ul>
                        <li>
                            <a href="#">강변점</a>
                        </li>
                        <li>
                            <a href="#">홍대점</a>
                        </li>
                    </ul>
                </div>

                <div id="Gyeonggi" className="tabContent">
                    <ul>
                        <li>
                            <a href="#">동탄점</a>
                        </li>
                        <li>
                            <a href="#">김포점</a>
                        </li>
                    </ul>
                </div>

                <div id="Gangwon" className="tabContent">
                    <ul>
                        <li>
                            <a href="#">강릉점</a>
                        </li>
                        <li>
                            <a href="#">원주점</a>
                        </li>
                    </ul>
                </div>

                <div id="Gyeongbuk" className="tabContent">
                    <ul>
                        <li>
                            <a href="#">안동점</a>
                        </li>
                        <li>
                            <a href="#">구미점</a>
                        </li>
                    </ul>
                </div>

                <div id="Gyeongnam" className="tabContent">
                    <ul>
                        <li>
                            <a href="#">김해점</a>
                        </li>
                        <li>
                            <a href="#">거제점</a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* 지점 상세정보 */}
            <h2 className="title">지점 상세정보</h2>
            <h3 className="theaterTit">지점이름</h3>
            <div className="theaterTab">
                <div className="box-img">
                    <img className="theaterImg" src={theaterImg} />
                </div>

            <div className="box-contents">
                <div className="theater-info">
                {/* 주소, 전화번호, 관안내 */}
                </div>
            </div>

            </div>
        </div>
        </>
    );

};

export default Theater;
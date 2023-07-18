import React from 'react';

export default function FooterComponent(){
    return (
        <footer id='footer'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="foot1">
                            <div className="list-box">
                                <ul>
                                    <li><h2>정보</h2></li>
                                    <li><a href="#">로지텍스토리</a> </li>
                                    <li><a href="#">채용</a> </li>
                                    <li><a href="#">투자자</a> </li>
                                    <li><a href="#">블로그</a> </li>
                                    <li> <a href="#">프레스</a> </li>
                                    <li><a href="#">연락처</a> </li>
                                </ul>
                                <ul>
                                    <li><h2>가치</h2></li>
                                    <li><a href="#">사회 공헌</a></li>
                                    <li><a href="#">지속 가능성</a></li>
                                    <li><a href="#">재활용</a></li>
                                </ul>
                                <ul>
                                    <li><h2>고객</h2></li>
                                    <li><a href="#">이메일 설정</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="foot2">
                            <div className="left">
                                <a href="#"><img src="./img/facebook.svg" alt="" /></a>
                                <a href="#"><img src="./img/twitter.svg" alt="" /></a>
                                <a href="#"><img src="./img/instagram-logo.svg" alt="" /></a>
                            </div>
                            <div className="right">
                                <div className="email">
                                    <input type="text" name='' id='' placeholder='이메일 주소 입력'/>
                                    <button type='submit' name='' id=''><i class="fa fa-caret-right"></i></button>
                                </div>
                                <div className="check">
                                    <input type="checkbox"/>
                                    <span>
                                        <a href="#">예, 뉴스와 제품 관련 이메일을 받고 싶습니다. 로지텍 <i>개인정<br />
                                                    보 보호정책</i>을 확인하세요.</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="foot3">
                            <span> ©2023 로지텍. All rights reserved</span>
                            <a href="#"> 이용약관</a>
                            <a href="#"> 웹 개인정보 이용정책</a>
                            <a href="#"> 제품 개인정보 보호정책</a>
                            <a href="#"> 쿠키 설정</a>
                            <a href="#"> 사이트맵</a>
                            <a href="#"><h2><i class='fas fa-globe-asia'></i>대한민국</h2></a>
                        </div>
                        <div className="foot4">
                            <a href="#">고객 지원 센터 (제품 및 A/S 문의처) </a>/
                            <a href="#"> 전화 지원</a>
                            (수신자부담) ㅣ사업자 등록번호: 107-86-10308 ㅣ로지텍 코리아 대표이사 : PAO, YA-CHINGㅣ서울특별시 영등포구 여의공원로 101, CCMM 빌딩 402B

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


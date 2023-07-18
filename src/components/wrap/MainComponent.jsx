import React from 'react';
import $ from 'jquery';

export default function MainComponent(){

    const [state, setState] = React.useState({
        isFixed: false,
        scroll: []
    });

    React.useEffect(() => {
        // 스크롤탑
        const titleBottomTop = document.querySelector('#main .title-bottom').offsetTop;

        window.addEventListener('scroll', function () {
            let isFixed = false;
            if ((window.scrollY > titleBottomTop) && (state.scroll.pop() >= this.window.scrollY)) {
                isFixed = true;
            }
            else {
                isFixed = false;
            }
            setState({
                ...state,
                isFixed: isFixed
            });

            // if(state.scroll.pop() < this.window.scrollY) {
            //     console.log("scroll down!")
            // } else {
            //     console.log("scroll up")
            // }
            state.scroll.push(window.scrollY)
        })
    }, []);

    
    // 섹션3 슬라이드
    React.useEffect(()=> {
        const $slideContainer = $('#section3 .slide-container');
        const $slideView = $('#section3 .slide-view');
        const $slideWrap = $('#section3 .slide-wrap');
        const $slide = $('#section3 .slide');
        let cnt = 0;
        let n = $slide.length-1
        let setId = 0;

        const $nextBtn = $('#section3 .next-btn');
        const $prevBtn = $('#section3 .prev-btn');

        
        // 메인슬라이드함수
        function mainSlide(){
            $slideWrap.stop().animate({left:`${-100*cnt}%`},600,function(){
                if(cnt>=n){cnt=0}
                if(cnt<0){cnt=n}
                $slideWrap.stop().animate({ left: `${-100 * cnt}%` },0);
            });
        }
        // 다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }
        // 이전카운트함수
        function prevCount(){
            cnt--;
            mainSlide();
        }
        // 다음화살버튼클릭이벤트
        $nextBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        })
        // 이전화살버튼클릭이벤트
        $prevBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        })

    });




    return (
        <main id='main'>
            <section id="section1">
                <div class="container">
                    <div className="gap">
                        <div class={"title-bottom" + (state.isFixed? " on" : "")} >
                            <div class="left">
                                <img src="./img/logitech-logo-black.png" alt="" />
                            </div>
                            <div class="center">
                                <ul>
                                    <li><a href="!#">제품</a></li>
                                    <li><a href="!#">스토리</a></li>
                                    <li><a href="!#">비즈니스</a></li>
                                    <li><a href="!#">지원</a></li>
                                </ul>
                            </div>
                            <div class="right">
                                <ul>
                                    <li><a href="!#"><i class="material-icons">search</i></a></li>
                                    <li><a href="!#"><i class="material-icons">person_outline</i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-box">
                            <h1>화상회의를 프로답<p>게.</p></h1>
                            <h2>모든 화상 회의에서 보다 자연스럽게 보이고 들릴 수 있게.</h2>
                        </div>
                        <div class="btn-box">
                            <ul>
                                <button><span>BRIO 300 알아보기</span></button>
                                <button><span>H390 알아보기</span></button>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div class="container">
                    <div className="gap">
                        <div class="content">
                            <div>
                                <ul>
                                    <li><img src="./img/mk470-slim-combo-feature.jpg" alt="" /></li>
                                    <li><a href="!#"><h2>나만의 공간 만들기</h2></a></li>
                                    <li><p>MK470 슬림 키보드 마우스 콤보</p></li>
                                    <li><span>MK470 알아보기</span></li>
                                </ul>
                                <ul>
                                    <li><img src="./img/k580-slim-multi-device-wireless-kb-feature.jpg" alt="" /></li>
                                    <li><a href="!#"><h2>나만의 공간 만들기</h2></a></li>
                                    <li><p>K580 슬림 멀티 디바이스 무선 키보드</p></li>
                                    <li><span>K580 알아보기</span></li>
                                </ul>
                                <ul>
                                    <li><img src="./img/hpb-crayon.jpg" alt="" /></li>
                                    <li><a href="!#"><h2>새로운 가능성 탐색하기</h2></a></li>
                                    <li><p>Apple Pencil 기술을 탑재한 iPad용 로지텍 Crayon으로 스케치, 필기, 주석 작업을 해보세요.</p></li>
                                    <li><span>로지텍 CRAYON 알아보기</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section3 id="section3">
                <div className="container">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide1">
                                    <div className="gap">
                                        <div className="img-box1">
                                            <p>마우스 & 키보드</p>
                                        </div>
                                        <div className="img-box2">
                                            <p>헤드셋 및 이어폰</p>
                                        </div>
                                        <div className="img-box3">
                                            <img src="./img/desktop-grey-mobile-devices-4 (1).jpeg" alt="" />
                                            <img src="./img/desktop_grey-streaming (1).jpeg" alt="" />
                                            <p>IPAD 키보드</p>
                                            <h5>스트리밍</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className="slide slide2">
                                    <div className="gap">
                                        <div className="img-box4">
                                            <img src="./img/desktop_home-security-cameras-gray (1).jpeg" alt="" />
                                            <img src="./img/desktop_grey-presentation-remotes (1).jpeg" alt="" />
                                            <p>홈 시큐리티</p>
                                            <h3>프레젠테이션 리모컨</h3>
                                        </div>
                                        <div className="img-box5"></div>
                                            {/* <div className="top-img"></div>
                                            <div className="bottom-img"></div> */}
                                            <img src="./img/desktop-speakers-z407-gray.jpeg" alt="" />
                                            <img src="./img/desktop_grey-video-conferencing (1).jpeg" alt="" />
                                    </div>
                                </li>
                                <li className="slide slide3">
                                    <div className="gap">
                                        <div className="img-box6">
                                            <img src="./img/desktop-blue-bkg (1).jpg" alt="" />
                                            <img src="./img/desktop-astro-bkg (1).jpg" alt="" />
                                        </div>
                                        <div className="img-box7">
                                            <img src="./img/desktop-logitech-g-bkg (1).jpg" alt="" />
                                            <img src="./img/desktop-jaybird-bkg (1).jpg" alt="" />
                                            <img src="./img/desktop-ultimate-ears-bkg (1).jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li className="slide slide1">
                                    <div className="gap">
                                        <div className="img-box1">
                                            <p>마우스 & 키보드</p>
                                        </div>
                                        <div className="img-box2">
                                            <p>헤드셋 및 이어폰</p>
                                        </div>
                                        <div className="img-box3">
                                            <img src="./img/desktop-grey-mobile-devices-4 (1).jpeg" alt="" />
                                            <img src="./img/desktop_grey-streaming (1).jpeg" alt="" />
                                            <p>IPAD 키보드</p>
                                            <h5>스트리밍</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* 좌우화살버튼 */}
                        <a href="!#" className='next-btn'><i class="material-icons">keyboard_arrow_right</i></a>
                        <a href="!#" className='prev-btn'><i class="material-icons">keyboard_arrow_left</i></a>
                    </div>
                </div>



                
            </section3>
            <section id="section4">
                <div className="container">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className='slide-wrap'>
                                <li className='slide slide1'>
                                    <img src="./img/pcr-plastic-desktop.jpeg" alt="" />
                                    <div className="text-box">
                                        <h1>새롭게 태어난 플라스틱</h1>
                                        <h3>재활용 플라스틱에서 새로운 가능성으로.</h3>
                                        <button>재활용 (PCR) 플라스틱</button>
                                    </div>
                                </li>
                                <li className='slide slide2'>
                                    <img src="./img/future-positive-challenge-desktop.jpg" alt="" />
                                    <div className="text-box">
                                        <h1>Future Positive<br></br>Challenge</h1>
                                        <p>긍정적인 미래를 위해 의미있는 기여를 하고자 하는 공헌가들을 위한 테크놀로지<br></br>및 엔지니어링 챌린지</p>
                                        <button>재활용 (PCR) 플라스틱</button>
                                    </div>
                                </li>
                                <li className='slide slide3'>
                                    <img src="./img/climate-positive-desk.jpeg" alt="" />
                                    <div className="text-box">
                                        <h1>새롭게 태어난 플라스틱</h1>
                                        <h3>재활용 플라스틱에서 새로운 가능성으로.</h3>
                                        <button>재활용 (PCR) 플라스틱</button>
                                    </div>
                                </li>
                                <li className='slide slide4'>
                                    <img src="./img/carbon-methodology-desktop.png" alt="" />
                                    <div className="text-box">
                                        <h1>새롭게 태어난 플라스틱</h1>
                                        <h3>재활용 플라스틱에서 새로운 가능성으로.</h3>
                                        <button>재활용 (PCR) 플라스틱</button>
                                    </div>
                                </li>
                                <li className='slide slide5'>
                                    <img src="./img/bg-logicares-desktop.jpg" alt="" />
                                    <div className="text-box">
                                        <h1>새롭게 태어난 플라스틱</h1>
                                        <h3>재활용 플라스틱에서 새로운 가능성으로.</h3>
                                        <button>재활용 (PCR) 플라스틱</button>
                                    </div>
                                </li>
                                <li className='slide slide6'>
                                    <img src="./img/bg-design-desktop.jpg" alt="" />
                                    <div className="text-box">
                                        <h1>새롭게 태어난 플라스틱</h1>
                                        <h3>재활용 플라스틱에서 새로운 가능성으로.</h3>
                                        <button>재활용 (PCR) 플라스틱</button>
                                    </div>
                                </li>
                                <li className='slide slide7'>
                                    <img src="./img/bg-about-desktop.jpg" alt="" />
                                    <div className="text-box">
                                        <h1>새롭게 태어난 플라스틱</h1>
                                        <h3>재활용 플라스틱에서 새로운 가능성으로.</h3>
                                        <button>재활용 (PCR) 플라스틱</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};



                    // <div className="rap rap2">
                    //     <div className="rap-container">
                    //         <div className="rap-wrap">
                    //             <ul>
                    //                 {/* <li><img src="./img/pcr-icon.png" alt="" /></li> */}
                    //                 <li><h1>Future Positive<br></br>Challenge</h1></li>
                    //                 <li><p>긍정적인 미래를 위해 의미있는 기여를 하고자 하는 공헌가들을 위한 테크놀로지<br></br>및 엔지니어링 챌린지</p></li>
                    //                 <li><button>자세히 알아보기</button></li>
                    //             </ul>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="rap rap3">
                    //     <div className="rap-container">
                    //         <div className="rap-wrap">
                    //             <ul>
                    //                 <li><p>지속 가능성</p></li>
                    //                 <li><h1>기후 긍정</h1></li>
                    //                 <li><h3>로지텍은 파리 협약에서 여러 국가가 약속한 내용을 넘어설 것입니다. 이것은 기다릴 수 없는 일이기 때문에 20년을 앞당<br></br>기고자 합니다.</h3></li>
                    //                 <li><button>로지텍 기후 긍정 접근 방식</button></li>
                    //             </ul>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="rap rap4">
                    //     <div className="rap-container">
                    //         <div className="rap-wrap">
                    //             <ul>
                    //                 <li><p>지속 가능성</p></li>
                    //                 <li><h1>탄소 명확성</h1></li>
                    //                 <li><h3>로지텍은 제품을 제조하는 데 사용된 기후 온난화 탄소의 양을 제품에 라벨로 표시한 첫 번째 소비자 전자기기 기업입니<br></br>다. 이제 구매하는 제품의 가격과 기능뿐만 아니라 환경에 미치는 영향에 입각하여 선택을 내릴 수 있습니다.</h3></li>
                    //                 <li><button>로지텍 기후 긍정 접근 방식</button></li>
                    //             </ul>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="rap rap5">
                    //     <div className="rap-container">
                    //         <div className="rap-wrap">
                    //             <ul>
                    //                 <li><p>사회 공헌</p></li>
                    //                 <li><h1>Logicares</h1></li>
                    //                 <li><h3>받은 것을 돌려주고 변화를 주도하는 것은 사회적 책임일 뿐만 아니라 기업 문화의 핵심 요<br></br>소입니다.</h3></li>
                    //                 <li><button>LOGICARES 포커스</button></li>
                    //             </ul>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="rap rap6">
                    //     <div className="rap-container">
                    //         <div className="rap-wrap">
                    //             <ul>
                    //                 {/* <li><img src="./img/bg-design-desktop.jpg" alt="" /></li> */}
                    //                 <li><h1>디자인 어워드</h1></li>
                    //                 <li><h3>디자인은 모든 팀과 규칙에 있어 로지텍이 하는 모든 것의 중심에 있습니다.</h3></li>
                    //                 <li><button>수상 내역</button></li>
                    //             </ul>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="rap rap7">
                    //     <div className="rap-container">
                    //         <div className="rap-wrap">
                    //             <ul>
                    //                 {/* <li><img src="./img/bg-about-desktop.jpg" alt="" /></li> */}
                    //                 <li><h1>로지텍 소개</h1></li>
                    //                 <li><h3>전 세계 거의 모든 국가에서 판매된 제품을 통해 로지텍은 음악, 게임, 비디오 및 컴퓨팅을 통해 사람들을 하나로 모으는<br></br>다중 브랜드 보유 기업으로 도약했습니다.</h3></li>
                    //                 <li><button>LOGITECH 스토리</button></li>
                    //             </ul>
                    //         </div>
                    //     </div>
                    // </div>
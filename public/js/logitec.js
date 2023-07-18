(function($){

    const logi = {
        init(){
            this.section3();
            this.section4();
        },

        section3(){
            const $slide = $('#section3 .slide-container');            
            const $nextBtn = $('#section3 .next-btn');            
            const $prevBtn = $('#section3 .prev-btn');            
            let   setId = 0;
            let cnt = 0;
        
            // 메인슬라이드 함수
            function mainSlide(){ // 애니메이션 이 버블링
                $('.slide-container').stop().animate({left: `${-100 * cnt}%` }, 600,'easeInOutExpo', function(){ // 이동이 끝나면
                    if(cnt===3){cnt=0};  // 마지막에서(처음) 리턴 처음으로 순간이동
                    $('.slide-container').stop().animate({left: `${-100 * cnt}%` }, 0); //리턴할 때 타임 제로
                });
            }
            // 2.다음카운트
            function nextCount(){
                cnt++;
                // mainNextSlide();
            }

            // 이전카운트
            function prevCount(){
                cnt--;
                // mainPrevSlide();
            }

            // 화살버튼클릭 이벤트
            $nextBtn.on({
                click(e){
                    e.preventDefault();
                    if(!$slide.is(':animated')){
                        nextCount();
                        clearInterval(setId);
                    }
                }
            })

            // 이전화살버튼클릭 이벤트
            $prevBtn.on({
                click(e){
                    e.preventDefault();
                    if(!$slide.is(':animated')){
                        prevCount();
                        clearInterval(setId);
                    }
                }
            })


        },

       section4(){


            // 터치 스와이프
            let touchStart = 0;
            let touchEnd = 0;
            let mouseDown = false; // 마우드 다운하면 true 아니면 false
            let setId = 0;
            let cnt = 0;

            $('#section4').on({
                mousedown(e){
                    clearInterval(setId);
                    mouseDown=true; //마우스 다운 알림
                    touchStart = e.clientX;
                },
                mouseup(e){
                    touchEnd = e.clientX;                    

                    if( touchStart-touchEnd > 0 ){
                        if( !$('.slide-container').is(':animated') ){
                            nextCount();
                        }
                    }
                    if( touchStart-touchEnd < 0 ){
                        if( !$('.slide-container').is(':animated') ){
                            prevCount();
                        }
                    }

                    mouseDown=false; //마우스 드래그 끝났다 마우스 업이다.
                    
                },
                mousemove(e){  //마우스 방향에 따라다닌다.
                    if(mouseDown===false) return;
                    // 마우스가 다운되면 그 때 부터 따라다녀라
                    // 마우스다운할 때 변수에 다운상태를 저장한다.
                    // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라

                    $('.slide-container').css({left: e.clientX });
                }
            });
       }
        
    }
    logi.init();
})(jQuery, window, document);




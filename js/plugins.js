$(document).ready(() => {
    
    console.clear();

    // Create My Variables
    let win = $(window),
        
        nav = $('nav'),

        themeColor = $('html').css('--themeColor'),

        loader =  $('.loader'),

        topBtn = $('.top-btn'),
        
        navItem = $('nav .navbar-nav .nav-item');


    setTimeout(() => {
        loader.children().fadeOut(500, function () {loader.fadeOut(500)});
    }, 3000);
    
    
    // Window Scroll Functions
    win.on('scroll', function() {
        
        // Start Count To On Scrolled It
        if (win.scrollTop() >= $('.count-to').offset().top - ((win.height() - $('.count-to').height()) / 2 )) {
            $('.count-to .num').each(countUp);
        }
        
        // Toggle Nav Style
        if (win.scrollTop() >= 100) {
            nav.addClass('active');
        } else {
            nav.removeClass('active');
        }

        // Scroll Top Btn
        if (win.scrollTop() >= 1000) {
            topBtn.css('bottom', '20px');
        } else {
            topBtn.css('bottom', '-45px');
        }
        
        // Nav Links add/remove active for items
        $('.nav-add-act').each(function () {
            
            let th = $(this),// Cashing This
                
                target = '#' + th.attr('id');
            
            
            if (win.scrollTop() <= win.height() - 100) {// Add Active To Home
                
                navItem.eq(0).addClass('active').siblings().removeClass('active');
                
            } else if (win.scrollTop() >= th.offset().top) {// Add Active To Anothers Links
                
                $(`nav .nav-item[data-scroll='${target}']`).addClass('active').siblings().removeClass('active');
                
            }
        });
        
    });
    
    /*$("body").niceScroll({
        cursorcolor: $(':root').css('--themeColor'),
        cursorwidth: "16px",
        cursorborderradius: "0",
        zindex: 100
    });*/
    
    // Smooth Scroll
    $('[data-scroll]').on('click', function () {
        
        let target = $(this).data('scroll');
        
        if (target == 'top') {
            $('body, html').animate({
                scrollTop: 0
            }, 600);
        } else {
            $('body, html').animate({
                scrollTop: $(target).offset().top + 1
            }, 200);
        }        
    });
    
    // WOW.js
    $('.wow').attr({
        'data-wow-duration': '1s',
        'data-wow-delay': '0s',
        'data-wow-offset': "250"
    });
    
    // Trigger Headroom.js
    nav.headroom();
    
    $('.navbar-toggler').click(function () {$(this).toggleClass('active');});
    
    navItem.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // Trigger fitText.js
    $('header .overlay h1').fitText(1.1, { minFontSize: '25px', maxFontSize: '60px' });
    $('header .overlay .p-fit').fitText(1.1, { minFontSize: '10px', maxFontSize: '18px' })
    
    // Count Down Function
    function countDown() {
        
        let days = 232,
            
            hours = 4,

            showH = `0${hours}`,
            
            min = 22,

            showMin,
            
            sec = 15,
            
            showSec,

            secSp = $('#countSec'),

            minSp = $('#countMin'),

            hoursSp = $("#countHours"),

            daySp = $('#countDays');
        
        daySp.html(days);
        hoursSp.html(showH);
        minSp.html(min);
        secSp.html(sec);
        
        setInterval(() => {
            
            // Seconds
            if (sec === 0) {
                
                sec = 59;
                showSec = sec;
                min = min - 1;
                
            } else if (sec <= 10) {
                
                sec = sec - 1;
                showSec = '0' + sec;
                
            } else {
                
                sec = sec - 1;
                showSec = sec;
                
            }
            
            // Minutes
            if (min === 0) {
                
                min = 59;
                hours = hours - 1;
                showMin = min;

            } else if (min < 10) {
                
                showMin = '0' + min;
                
            } else {
                showMin = min;
            }
            
            
            if (hours === 0) {
                hours = 23;
                days = days - 1;
                showH = hours;
            } else if (hours < 10) {
                
                showH = '0' + hours;
                
            } else {
                showH = hours;
            }
            
            
            daySp.html(days);
            hoursSp.html(showH);
            minSp.html(showMin);
            secSp.html(showSec);
            
        }, 1000);
    };
    
    countDown();

    // Count Down Function
    function countUp() {
        
        let theNum = 0;
        
        if ($(this).data('break') > 100) {
            
            let int = setInterval(() => {

                if ($(this).html() == $(this).data('break')) {
                    clearInterval(int);
                } else {
                    $(this).html(theNum);
                    theNum++;
                }
            
            }, 10);
            
        } else {
            let int = setInterval(() => {

                if ($(this).html() == $(this).data('break')) {
                    clearInterval(int);
                } else {
                    $(this).html(theNum);
                    theNum++;
                }
            
            },80);
        }
        
        
    };  

    $('.schedules .events .toggle-box').on('click', function () {
        
        let myAcc = $('.schedules .my-accordion');

        $(this).addClass('active').siblings('.active').removeClass('active');
        
        myAcc.children().fadeOut(500);
        myAcc.children( $(this).data('class') ).delay(500).fadeIn(500);
        
    });
    

    // Accordion
    $('.my-accordion article div').click(function () {
        let div = $(this);
        
        div.siblings('section').not(div.next()).slideUp(500);
        div.next().slideToggle(500);
        
    });

    $('.our-speakers .overlay .social a').each(function () {
        let h = $(this).height();

        $(this).css('line-height', h + 'px');

    });

    $('.event-gallery .img-box .icon').on('click', function () {
        
        let tar = $(this).next().attr('src');

        $('.gallery-slider img').attr('src', tar).parent().fadeIn(500).css('display', 'flex');
    });
    
    $('.gallery-slider button').click(function () {$(this).parent().fadeOut(500)});
    
    $('.latest-news .content .icon').each(function () {
        let h = $(this).prev().height();
        $(this).css('top', h - 27.5);
    });
    
    // Form Validation
    $('.contact form input').on('blur', function () {
        if ($(this).val() == '') {
            $(this).siblings('span').css('visibility', 'visible');
        } else {
            $(this).siblings('span').css('visibility', 'hidden');
        }
    });
    
    const name = String.fromCharCode(89, 111, 117, 115, 101, 102);
    
    console.log(`♣️ Hello ${name} No Problems ♣️`);
    
    
});// End Ready

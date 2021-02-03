$(document).ready(() => {
    
    let win = $(window),
        
        nav = $('nav'),
        
        myAcc = $('.schedules .my-accordion'),
        
        accrDiv = $('.my-accordion article div'),
                
        myCountUpSp = $('.count-to .num');
    
    $('.navbar-toggler').click(function () {$(this).toggleClass('active');});
    
    win.on('scroll', function() {
        
        if (win.scrollTop() >= 600) {
            nav.addClass('active')
        } else {
            nav.removeClass('active')
        }
    });
    
    nav.headroom();
    
    $('header .overlay h1').fitText(1.1, { minFontSize: '25px', maxFontSize: '60px' });
    $('header .overlay .p-fit').fitText(1.1, { minFontSize: '10px', maxFontSize: '18px' })
    
    // Count Down
    function countDown() {  
        
        let days = 232,
            
            hours = 4,
            
            min = 22,
            
            sec = 15,
            
            showSec,

            secSp = $('#countSec'),

            minSp = $('#countMin'),

            hoursSp = $("#countHours"),

            daySp = $('#countDays');
        
        daySp.html(days);
        hoursSp.html(hours);
        minSp.html(min);
        secSp.html(sec);
        
        setInterval(() => {
            
            // Seconds
            if (sec === 0) {
                
                sec = 59;
                min = min - 1;
                showSec = sec;
                showMin = min;
                
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
                
            }
            
            
            if (hours === 0) {
                hours = 23;
                days = days - 1;
            }
            
            
            daySp.html(days);
            hoursSp.html(hours);
            minSp.html(min);
            secSp.html(showSec);
            
        }, 1000);
    };
    
    countDown();
        
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
            
            },1);
            
        } else {
            let int = setInterval(() => {

                if ($(this).html() == $(this).data('break')) {
                   clearInterval(int);
               } else {
                   $(this).html(theNum);
                   theNum++;
               }
            
            },50);
        }
        
        
    };
    
    myCountUpSp.each(countUp);
    
    $('.schedules .events .toggle-box').on('click', function () {
               
        $(this).addClass('active').siblings('.active').removeClass('active');
        
        myAcc.children().fadeOut(500);
        myAcc.children( $(this).data('class') ).delay(500).fadeIn(500);
        
        
    });
        
    accrDiv.click(function () {
        let div = $(this);
        
        div.siblings('section').not(div.next()).slideUp(500);
        div.next().slideToggle(500);
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
});// End Ready
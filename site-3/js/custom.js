/*custom script for fitting heading in the responsive design*/

$(function () {
    "use strict";
    
    $(".h-fittext").fitText(1.5, {
        
        minFontSize: '35px', 
        
        maxFontSize: '50px'
    });
    
     $(".h2-fittext").fitText(1.5, {
        
        minFontSize: '30px', 
        
        maxFontSize: '40px'
    });
       
});
/*global $ */

$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});


/****************************************************************************************************************
*****************************************************************************************************************
*****************************************************************************************************************/

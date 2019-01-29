/**
 * Want to Hide these sections using jQuery: 
 *  1. Portfolio 
 *  2. About Me 
 *  3. Contact Section
 */

 function showPage(container){
    $(container).show() 
 }

 function hidePage(container){
    $(container).hide() 
 }

 function showPortfolio(){
    $('#work').click(function(){
        event.preventDefault(); 
        hidePage('.About_Me .sectionOverlay');
        hidePage('.Contact_Info'); 
        showPage('.Portfolio ')
    })
 }

 function showAboutMe(){
    $('#home').click(function(){
        event.preventDefault(); 
        hidePage('.Portfolio');
        hidePage('.Contact_Info'); 
        showPage('.About_Me .sectionOverlay')
    })
 }

 function showContactInfo(){
     $('#contact').click(function(){
         event.preventDefault(); 
         hidePage('.Portfolio')
         hidePage('About_Me');
         showPage('.Contact_Info'); 
     })
 }

 function animateDownArrow(){
    $('#down-arrow').click(function(){
       $('.titleOverlay').slideToggle(1000, function(){
         //  hidePage('.titleOverlay') 
       })
    })
 }


 $(function (){
    animateDownArrow();
    showPortfolio(); 
    showAboutMe();
    showContactInfo();
 });
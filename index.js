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
        console.log('prevented default action');
        hidePage('.About_Me .sectionOverlay'); 
        showPage('.Portfolio ')
    })
 }

 function showAboutMe(){
    $('#home').click(function(){
        event.preventDefault(); 
        console.log('prevented default action');
        hidePage('.Portfolio' ); 
        showPage('.About_Me .sectionOverlay')
    })
 }


 $(function (){
    showPortfolio(); 
    showAboutMe();
 });
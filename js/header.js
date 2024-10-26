$(document).ready(function(){
  
  // 햄버거 메뉴
  $('#header #main_menu_box > .inner .mobileBtn').click(function(){
   
    $('#header').toggleClass('on');    
    $('#header .mainMenu').toggle();

  });
});
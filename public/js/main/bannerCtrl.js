// INITILIZE CONTROLLER
// ============================================================
angular.module("ospreypack")
.controller("bannerCtrl", function($scope) {
  // VARIABLES
  // ============================================================
  var acc = document.getElementsByClassName("accordion");
  var i;
  // FUNCTIONS
  // ============================================================
  // for (i = 0; i < acc.length; i++) {
  //   acc[i].onclick = function() {
  //     this.classList.toggle("active");
  //     var panel = this.nextElementSibling;
  //     if (panel.style.maxHeight){
  //         panel.style.maxHeight = null;
  //     } else {
  //         panel.style.maxHeight = panel.scrollHeight + 'px';
  //     }
  //   }
  // }

  $(function(){
  $('.animated > li').hover(function(){
    $(this).find('div[class^="container-"]').stop().slideDown('fast');
  },
  function(){
    $(this).find('div[class^="container-"]').stop().slideUp('slow');
  });
});
  // $(document).ready(function() {
  //   $('.accordion-head').click(function() {
  //     $('.menu-content').toggleClass('visible');
  //   });
  // });
});

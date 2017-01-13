// INITILIZE CONTROLLER
// ============================================================
angular.module("ospreypack")
.controller("footerCtrl", function($scope) {
  // VARIABLES
  // ============================================================
  var acc = document.getElementsByClassName("accordion");
  var i;

  // FUNCTIONS
  // ============================================================
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
  	  if (panel.style.maxHeight){
    	  panel.style.maxHeight = null;
      } else {
    	  panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }
  }
  // $(document).ready(function() {
  //   $('.accordion-head').click(function() {
  //     $('.menu-content').toggleClass('visible');
  //   });
  // });
});

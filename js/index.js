
$(document).ready(function() 
	{
  
  var WindowWidth = $(window).width();
  var containerWidth = $(".modal").width();  
  var leftMargin = (WindowWidth-containerWidth)/2-30;  //padding30
  
  $(".modal").css("marginLeft", leftMargin); 

  var frameWidth = $("#webapp").width();
  var tabWidth = frameWidth-75;
  $(".tabcontent").width(tabWidth);

});

$(window).on('resize',function() {

  var WindowWidth = $(window).width();
  var containerWidth = $(".modal").width();  
  var leftMargin = (WindowWidth-containerWidth)/2-30;  //padding30
  
  $(".modal").css("marginLeft", leftMargin); 

  var frameWidth = $("#webapp").width();
  var tabWidth = frameWidth-75;
  $(".tabcontent").width(tabWidth);

});



function switching(){
    $('div#bulb').toggle(100);
    }

function socialmediatoggle(){
      $('.hiddenbutton ul').css({
        'width': 200,
        'height': $('.hiddenbutton ul').height()
      });
      $('.hiddenbutton').animate({'width': 'toggle'});
    }


function modalemailtoggle(){
      $('#email').slideToggle(200);
    }



/*** bottom menu ***/

function openMenu(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}

// todo: remove bottom border when tabcontent is closed
$('.btnClose').on('click', function(){
  $('.menu').removeClass('active');
});

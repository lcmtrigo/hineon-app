
$(document).ready(function() 
	{

  $('#clientText').bind('keyup', function(e) {
    var data = $('#clientText').val()
    $('#backdrop').html(data.replace(/\n/g,"<br />"));
  });

  var WindowWidth = $(window).width();
  var containerWidth = $(".modal").width();  
  var leftMargin = (WindowWidth-containerWidth)/2-30;  //padding30
  
  $(".modal").css("marginLeft", leftMargin); 

  var frameWidth = $("#webapp").width();
  var frameHeight = $("#webapp").height();
  var tabWidth = frameWidth-75;
  $(".tabbox").width(tabWidth);

  var textareaFont = $("#clientText").css("font-family");
  var textareaFontSize = $("#clientText").css("font-size");
  var textareaFontHeight = $("#clientText").css("line-height");

  $(".backdrop").css("font-family", textareaFont);
  $(".backdrop").css("font-size", textareaFontSize);
  $(".backdrop").css("line-height", textareaFontHeight);

  var textareaWidth = $("#clientText").width();
  var textareaHeight = $("#clientText").height();

  $(".backdrop").width(textareaWidth);
  $(".backdrop").height(textareaHeight);

  var textareaTop = (frameHeight-textareaHeight-150)/2;
  var textareaLeft = (frameWidth-textareaWidth)/2;

  $("#clientText").css('top',textareaTop);
  $("#clientText").css('margin-left',textareaLeft);

/*pink line*/
  $('.btnMenuDie').on('click', function(){
    $('.menu').removeClass('active');
  });

/*fonts*/

   $('input[name=chooseFont]:radio').on('change', function() {
       
       var Fontchoice = $('input[name=chooseFont]:checked').val();
       
       if (Fontchoice=='fontA'){
          $("#clientText").addClass('fontA');
          $("#clientText").removeClass('fontB fontC fontD fontE fontF fontG fontH');
       }

       else if (Fontchoice=='fontB') {
          $("#clientText").addClass('fontB');
          $("#clientText").removeClass('fontA fontC fontD fontE fontF fontG fontH');
       }

       else if (Fontchoice=='fontC') {
          $("#clientText").addClass('fontC');
          $("#clientText").removeClass('fontA fontB fontD fontE fontF fontG fontH');
       }

       else if (Fontchoice=='fontD') {
          $("#clientText").addClass('fontD');
          $("#clientText").removeClass('fontA fontB fontC fontE fontF fontG fontH');
       }

       else if (Fontchoice=='fontE') {
          $("#clientText").addClass('fontE');
          $("#clientText").removeClass('fontA fontB fontC fontD fontF fontG fontH');
       }

        else if (Fontchoice=='fontF') {
          $("#clientText").addClass('fontF');
          $("#clientText").removeClass('fontA fontB fontC fontD fontE fontG fontH');
       }

        else if (Fontchoice=='fontG') {
          $("#clientText").addClass('fontG');
          $("#clientText").removeClass('fontA fontB fontC fontD fontE fontF fontH');
       }

        else if (Fontchoice=='fontH') {
          $("#clientText").addClass('fontH');
          $("#clientText").removeClass('fontA fontB fontC fontD fontF fontE fontG');
       }
      
      else {
        alert("Please select a font!");
      };


   var textareaFont = $("#clientText").css("font-family");
    $(".backdrop").css("font-family", textareaFont);

    }); /*fonts end*/

/* font size */
$('input[name=chooseFontSize]:radio').on('change', function() {
       
       var Sizechoice = $('input[name=chooseFontSize]:checked').val();

       if (Sizechoice=='fontSmall') {
          $("#clientText").addClass('size-small');
          $("#clientText").removeClass('size-medium size-large');
       } else if (Sizechoice=='fontMedium') {
          $("#clientText").addClass('size-medium');
          $("#clientText").removeClass('size-small size-large');
       } else if (Sizechoice=='fontLarge') {
          $("#clientText").addClass('size-large');
          $("#clientText").removeClass('size-medium size-small');
       } else {
        alert('Please select font size!');
       };

   var textareaFontSize = $("#clientText").css("font-size");
   var textareaFontHeight = $("#clientText").css("line-height");
    $(".backdrop").css("font-size", textareaFontSize);
    $(".backdrop").css("line-height", textareaFontHeight);

});


/* font align */

$('input[name=chooseFontAlign]:radio').on('change', function() {
       
       var Alignchoice = $('input[name=chooseFontAlign]:checked').val();

       if (Alignchoice=='alignLeft') {
          $("#clientText").addClass('align-left');
          $("#clientText").removeClass('align-center align-right');
       } else if (Alignchoice=='alignCenter') {
          $("#clientText").addClass('align-center');
          $("#clientText").removeClass('align-left align-right');
       } else if (Alignchoice=='alignRight') {
          $("#clientText").addClass('align-right');
          $("#clientText").removeClass('align-left align-center');
       } else {
        alert('Please select font size!');
       };

   var textareaAlign = $("#clientText").css("text-align");
    $(".backdrop").css("text-align", textareaAlign);

});


/*color*/
$('input[name=chooseColor]:radio').on('change', function() {
       
       var Colorchoice = $('input[name=chooseColor]:checked').val();

       var Switchoff = $('div#bulb').css('display');

       if (Colorchoice=='whiteCool'&&Switchoff=='none') {
          $("#clientText").addClass('cw woff');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='whiteWarm'&&Switchoff=='none') {
          $("#clientText").addClass('ww woff');
          $("#clientText").removeClass('cr co cy cg cb cp cly cw wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='warmRed'&&Switchoff=='none') {
          $("#clientText").addClass('wr woff');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww cw wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='warmOrange'&&Switchoff=='none') {
          $("#clientText").addClass('wo woff');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr cw wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='warmGreen'&&Switchoff=='none') {
          $("#clientText").addClass('wg woff');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo cw wb wp croff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='warmBlue'&&Switchoff=='none') {
          $("#clientText").addClass('wb woff');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg cw wp croff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='warmViolet'&&Switchoff=='none') {
          $("#clientText").addClass('wp woff');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg wb cw croff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='coolRed'&&Switchoff=='none') {
          $("#clientText").addClass('cr croff');
          $("#clientText").removeClass('cw co cy cg cb cp cly ww wr wo wg wb wp woff cooff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='coolOrange'&&Switchoff=='none') {
          $("#clientText").addClass('co cooff');
          $("#clientText").removeClass('cr cw cy cg cb cp cly ww wr wo wg wb wp croff woff cyoff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='coolYellow'&&Switchoff=='none') {
          $("#clientText").addClass('cy cyoff');
          $("#clientText").removeClass('cr co cw cg cb cp cly ww wr wo wg wb wp croff cooff woff clyoff cgoff cboff cpoff');
       } else if (Colorchoice=='coolLightYellow'&&Switchoff=='none') {
          $("#clientText").addClass('cly clyoff');
          $("#clientText").removeClass('cr co cy cg cb cp cw ww wr wo wg wb wp croff cooff cyoff woff cgoff cboff cpoff');
       } else if (Colorchoice=='coolGreen'&&Switchoff=='none') {
          $("#clientText").addClass('cg cgoff');
          $("#clientText").removeClass('cr co cy cw cb cp cly ww wr wo wg wb wp croff cooff cyoff clyoff woff cboff cpoff');
       } else if (Colorchoice=='coolBlue'&&Switchoff=='none') {
          $("#clientText").addClass('cb cboff');
          $("#clientText").removeClass('cr co cy cg cw cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff woff cpoff');
       } else if (Colorchoice=='coolViolet'&&Switchoff=='none') {
          $("#clientText").addClass('cp cpoff');
          $("#clientText").removeClass('cr co cy cg cb cw cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff woff');
       }


      else if (Colorchoice=='whiteCool'&&Switchoff=='block') {
          $("#clientText").addClass('cw');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='whiteWarm'&&Switchoff=='block') {
          $("#clientText").addClass('ww');
          $("#clientText").removeClass('cr co cy cg cb cp cly cw wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='warmRed'&&Switchoff=='block') {
          $("#clientText").addClass('wr');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww cw wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='warmOrange'&&Switchoff=='block') {
          $("#clientText").addClass('wo');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr cw wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='warmGreen'&&Switchoff=='block') {
          $("#clientText").addClass('wg');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo cw wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='warmBlue'&&Switchoff=='block') {
          $("#clientText").addClass('wb');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg cw wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='warmViolet'&&Switchoff=='block') {
          $("#clientText").addClass('wp');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg wb cw croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='coolRed'&&Switchoff=='block') {
          $("#clientText").addClass('cr');
          $("#clientText").removeClass('cw co cy cg cb cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='coolOrange'&&Switchoff=='block') {
          $("#clientText").addClass('co');
          $("#clientText").removeClass('cr cw cy cg cb cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='coolYellow'&&Switchoff=='block') {
          $("#clientText").addClass('cy');
          $("#clientText").removeClass('cr co cw cg cb cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='coolLightYellow'&&Switchoff=='block') {
          $("#clientText").addClass('cly');
          $("#clientText").removeClass('cr co cy cg cb cp cw ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='coolGreen'&&Switchoff=='block') {
          $("#clientText").addClass('cg');
          $("#clientText").removeClass('cr co cy cw cb cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='coolBlue'&&Switchoff=='block') {
          $("#clientText").addClass('cb');
          $("#clientText").removeClass('cr co cy cg cw cp cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else if (Colorchoice=='coolViolet'&&Switchoff=='block') {
          $("#clientText").addClass('cp');
          $("#clientText").removeClass('cr co cy cg cb cw cly ww wr wo wg wb wp croff cooff cyoff clyoff cgoff cboff cpoff woff');
       } else {
        alert('Please select color!');
       };
});

/* indoor outdoor */
$('input[name=chooseIndoorOutdoor]:radio').on('change', function() {
       
       var Usechoice = $('input[name=chooseIndoorOutdoor]:checked').val();

       if (Usechoice=='outdoor') {
          $("#outline").attr("disabled",true);
          $(".outdoorSlider").css('display','block');
       } else if (Usechoice=='indoor'){
        $("#outline").attr("disabled",false);
        $(".outdoorSlider").css('display','none');
       } else {
        alert('Please select your environment settings!');
       };
});



/* shape */
$('input[name=chooseShape]:radio').on('change', function() {
       
       var Shapechoice = $('input[name=chooseShape]:checked').val();
       var Usechoice = $('input[name=chooseIndoorOutdoor]:checked').val();

       if (Shapechoice=='circle'&&Usechoice=='indoor') {
          $("#backdrop").addClass('backdropCircle');
          $("#backdrop").removeClass('backdropSquare backdropRectangle backdropOutline backdropCircleMetal backdropSquareMetal backdropRectangleMetal');
       } else if (Shapechoice=='square'&&Usechoice=='indoor') {
          $("#backdrop").addClass('backdropSquare');
          $("#backdrop").removeClass('backdropCircle backdropRectangle backdropOutline backdropCircleMetal backdropSquareMetal backdropRectangleMetal');
       } else if (Shapechoice=='rectangle'&&Usechoice=='indoor') {
          $("#backdrop").addClass('backdropRectangle');
          $("#backdrop").removeClass('backdropCircle backdropSquare  backdropOutline backdropCircleMetal backdropSquareMetal backdropRectangleMetal');
       } else if (Shapechoice=='outline'&&Usechoice=='indoor') {
          $("#backdrop").addClass('backdropOutline');
          $("#backdrop").removeClass('backdropCircle backdropSquare backdropRectangle  backdropCircleMetal backdropSquareMetal backdropRectangleMetal');
       } else if (Shapechoice=='circle'&&Usechoice=='outdoor') {
          $("#backdrop").addClass('backdropCircleMetal');
          $("#backdrop").removeClass('backdropCircle backdropSquare backdropRectangle backdropOutline  backdropSquareMetal backdropRectangleMetal');
       } else if (Shapechoice=='square'&&Usechoice=='outdoor') {
          $("#backdrop").addClass('backdropSquareMetal');
          $("#backdrop").removeClass('backdropCircle backdropSquare backdropRectangle backdropOutline backdropCircleMetal  backdropRectangleMetal');
       } else if (Shapechoice=='rectangle'&&Usechoice=='outdoor') {
          $("#backdrop").addClass('backdropRectangleMetal');
          $("#backdrop").removeClass('backdropCircle backdropSquare backdropRectangle backdropOutline backdropCircleMetal backdropSquareMetal');
       } else {
        alert('Please select your backdrop!');
       };

});


/* Any other config? */


/*DOM ready close */
});




/*on resize*/

$(window).on('resize',function() {

  var WindowWidth = $(window).width();
  var containerWidth = $(".modal").width();  
  var leftMargin = (WindowWidth-containerWidth)/2-30;  //padding30
  
  $(".modal").css("marginLeft", leftMargin); 

  var frameWidth = $("#webapp").width();
  var frameHeight = $("#webapp").height();
  var tabWidth = frameWidth-75;
  $(".tabbox").width(tabWidth);

  var textareaFont = $("#clientText").css("font-family");
  var textareaFontSize = $("#clientText").css("font-size");
  var textareaFontHeight = $("#clientText").css("line-height");

  $(".backdrop").css("font-family", textareaFont);
  $(".backdrop").css("font-size", textareaFontSize);
  $(".backdrop").css("line-height", textareaFontHeight);


}); /*Window Resize close*/

/* idk why we didnt bring in event listeners separately in js sheet but here are misc toggle functions */

function switching(){
    $('div#bulb').toggleClass('displayNone');

    // var Colorchoice = 

    if ($('#clientText').hasClass('cw')||$('#clientText').hasClass('ww')||$('#clientText').hasClass('wr')||$('#clientText').hasClass('wo')||$('#clientText').hasClass('wg')||$('#clientText').hasClass('wb')||$('#clientText').hasClass('wp')||$('#clientText').hasClass('woff')) {
         $('#clientText').toggleClass('woff');
       } else if ($('#clientText').hasClass('cr')||$('#clientText').hasClass('croff')){
          $('#clientText').toggleClass('croff');
       } else if ($('#clientText').hasClass('co')||$('#clientText').hasClass('cooff')){
          $('#clientText').toggleClass('cooff');
       } else if ($('#clientText').hasClass('cy')||$('#clientText').hasClass('cyoff')){
          $('#clientText').toggleClass('cyoff');
       } else if ($('#clientText').hasClass('cly')||$('#clientText').hasClass('clyoff')){
          $('#clientText').toggleClass('clyoff');
       } else if ($('#clientText').hasClass('cg')||$('#clientText').hasClass('cgoff')){
          $('#clientText').toggleClass('cgoff');
       } else if ($('#clientText').hasClass('cb')||$('#clientText').hasClass('cboff')){
          $('#clientText').toggleClass('cboff');
       } else if ($('#clientText').hasClass('cp')||$('#clientText').hasClass('cpoff')){
          $('#clientText').toggleClass('cpoff');
       }
        else {
       };

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


/* tool tips */

$('.btnFaqText').on('click', function(){
    $('#faqText').slideToggle(200);
});

$('.btnFaqColor').on('click', function(){
    $('#faqColor').slideToggle(200);
});

$('.btnFaqShape').on('click', function(){
    $('#faqShape').slideToggle(200);
});

$('.btnFaqInstallation').on('click', function(){
    $('#faqInstallation').slideToggle(200);
});

$('.btnFaqQtyShipping').on('click', function(){
    $('#faqQtyShipping').slideToggle(200);
});


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


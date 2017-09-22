
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

  var textareaWidth = $("#clientText").width();
  var textareaHeight = $("#clientText").height();

  $(".backdrop").width(textareaWidth);
  $(".backdrop").height(textareaHeight);

  var textareaLeft = (frameWidth-textareaWidth)/2;
  var textareaTop = (frameHeight-textareaHeight)/2;

  $(".clientTextBase").css("top", textareaTop);
  $(".clientTextBase").css("left", textareaLeft);

  $(".backdrop").css("top",textareaTop);
  $(".backdrop").css("left", textareaLeft);

  var textareaFont = $("#clientText").css("font-family");
  var textareaFontSize = $("#clientText").css("font-size");
  var textareaFontHeight = $("#clientText").css("line-height");

  $(".backdrop").css("font-family", textareaFont);
  $(".backdrop").css("font-size", textareaFontSize);
  $(".backdrop").css("line-height", textareaFontHeight);


  var squareWidth = $(".backdropSquare").width();
  var squareHeight = $(".backdropSquare").height();

  if (squareWidth < squareHeight) {
    $(".backdropSquare").width(squareHeight);
  } else if (squareWidth > squareHeight) {
    $(".backdropSquare").height(squareWidth);
  }

  var squareTop = (frameHeight-squareHeight-200)/2;
  $(".backdropSquare").css("top",squareTop);

  var squareMetalWidth = $(".backdropSquareMetal").width();
  var squareMetalHeight = $(".backdropSquareMetal").height();

  if (squareMetalWidth < squareMetalHeight) {
    $(".backdropSquareMetal").width(squareMetalHeight);
  } else if (squareMetalWidth > squareMetalHeight) {
    $(".backdropSquareMetal").height(squareMetalWidth);
  }

  var squareMetalTop = (frameHeight-squareMetalHeight-200)/2;
  $(".backdropSquareMetal").css("top",squareMetalTop);


  var circleWidth = $(".backdrop").width();
  var circleHeight = $(".backdrop").height();

  if (circleWidth < circleHeight) {
    $(".backdropCircle").width(circleHeight);
  } else if (circleWidth > circleHeight) {
    $(".backdropCircle").height(circleWidth);
  }

  var circleTop = (frameHeight-circleHeight-300)/2;
  var circleLeft = (frameWidth-circleHeight-300)/2;
  $(".backdropCircle").css("top",circleTop);
  $(".backdropCircle").css("left",circleLeft);



  var circleMetalWidth = $(".backdrop").width();
  var circleMetalHeight = $(".backdrop").height();

  if (circleMetalWidth < circleMetalHeight) {
    $(".backdropCircleMetal").width(circleMetalHeight);
  } else if (circleMetalWidth > circleMetalHeight) {
    $(".backdropCircleMetal").height(circleMetalWidth);
  }

  var circleMetalTop = (frameHeight-circleMetalHeight-300)/2;
  var circleMetalLeft = (frameWidth-circleMetalHeight-300)/2;
  $(".backdropCircleMetal").css("top",circleMetalTop);
  $(".backdropCircleMetal").css("left",circleMetalLeft);


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
    var textareaWidth = $("#clientText").width();
    var textareaHeight = $("#clientText").height();
  $(".backdrop").width(textareaWidth);
  $(".backdrop").height(textareaHeight);

});


/*color*/
$('input[name=chooseColor]:radio').on('change', function() {
       
       var Colorchoice = $('input[name=chooseColor]:checked').val();

       if (Colorchoice=='whiteCool') {
          $("#clientText").addClass('cw');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg wb wp');
       } else if (Colorchoice=='whiteWarm') {
          $("#clientText").addClass('ww');
          $("#clientText").removeClass('cr co cy cg cb cp cly cw wr wo wg wb wp');
       } else if (Colorchoice=='warmRed') {
          $("#clientText").addClass('wr');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww cw wo wg wb wp');
       } else if (Colorchoice=='warmOrange') {
          $("#clientText").addClass('wo');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr cw wg wb wp');
       } else if (Colorchoice=='warmGreen') {
          $("#clientText").addClass('wg');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo cw wb wp');
       } else if (Colorchoice=='warmBlue') {
          $("#clientText").addClass('wb');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg cw wp');
       } else if (Colorchoice=='warmViolet') {
          $("#clientText").addClass('wp');
          $("#clientText").removeClass('cr co cy cg cb cp cly ww wr wo wg wb cw');
       } else if (Colorchoice=='coolRed') {
          $("#clientText").addClass('cr');
          $("#clientText").removeClass('cw co cy cg cb cp cly ww wr wo wg wb wp');
       } else if (Colorchoice=='coolOrange') {
          $("#clientText").addClass('co');
          $("#clientText").removeClass('cr cw cy cg cb cp cly ww wr wo wg wb wp');
       } else if (Colorchoice=='coolYellow') {
          $("#clientText").addClass('cy');
          $("#clientText").removeClass('cr co cw cg cb cp cly ww wr wo wg wb wp');
       } else if (Colorchoice=='coolLightYellow') {
          $("#clientText").addClass('cly');
          $("#clientText").removeClass('cr co cy cg cb cp cw ww wr wo wg wb wp');
       } else if (Colorchoice=='coolGreen') {
          $("#clientText").addClass('cg');
          $("#clientText").removeClass('cr co cy cw cb cp cly ww wr wo wg wb wp');
       } else if (Colorchoice=='coolBlue') {
          $("#clientText").addClass('cb');
          $("#clientText").removeClass('cr co cy cg cw cp cly ww wr wo wg wb wp');
       } else if (Colorchoice=='coolViolet') {
          $("#clientText").addClass('cp');
          $("#clientText").removeClass('cr co cy cg cb cw cly ww wr wo wg wb wp');
       } else {
        alert('Please select color!');
       };
});

/* indoor outdoor */
$('input[name=chooseIndoorOutdoor]:radio').on('change', function() {
       
       var Usechoice = $('input[name=chooseIndoorOutdoor]:checked').val();

       if (Usechoice=='outdoor') {
          $("#outline").attr("disabled",true);
       } else if (Usechoice=='indoor'){
        $("#outline").attr("disabled",false);
       } else {
        alert('Please select !');
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

var textareaWidth = $("#clientText").width();
  var textareaHeight = $("#clientText").height();

  $(".backdrop").width(textareaWidth);
  $(".backdrop").height(textareaHeight);

  var textareaLeft = (frameWidth-textareaWidth)/2;
  var textareaTop = (frameHeight-textareaHeight)/2;

  $(".clientTextBase").css("top", textareaTop);
  $(".clientTextBase").css("left", textareaLeft);

  $(".backdrop").css("top",textareaTop);
  $(".backdrop").css("left", textareaLeft);

  var squareWidth = $(".backdropSquare").width();
  var squareHeight = $(".backdropSquare").height();

  if (squareWidth < squareHeight) {
    $(".backdropSquare").width(squareHeight);
  } else if (squareWidth > squareHeight) {
    $(".backdropSquare").height(squareWidth);
  }

  var squareTop = (frameHeight-squareHeight-200)/2;
  $(".backdropSquare").css("top",squareTop);

  var squareMetalWidth = $(".backdropSquareMetal").width();
  var squareMetalHeight = $(".backdropSquareMetal").height();

  if (squareMetalWidth < squareMetalHeight) {
    $(".backdropSquareMetal").width(squareMetalHeight);
  } else if (squareMetalWidth > squareMetalHeight) {
    $(".backdropSquareMetal").height(squareMetalWidth);
  }

  var squareMetalTop = (frameHeight-squareMetalHeight-200)/2;
  $(".backdropSquareMetal").css("top",squareMetalTop);


  var circleWidth = $(".backdrop").width();
  var circleHeight = $(".backdrop").height();

  if (circleWidth < circleHeight) {
    $(".backdropCircle").width(circleHeight);
  } else if (circleWidth > circleHeight) {
    $(".backdropCircle").height(circleWidth);
  }

  var circleTop = (frameHeight-circleHeight-300)/2;
  var circleLeft = (frameWidth-circleHeight-300)/2;
  $(".backdropCircle").css("top",circleTop);
  $(".backdropCircle").css("left",circleLeft);

  var circleMetalWidth = $(".backdrop").width();
  var circleMetalHeight = $(".backdrop").height();

  if (circleMetalWidth < circleMetalHeight) {
    $(".backdropCircleMetal").width(circleMetalHeight);
  } else if (circleMetalWidth > circleMetalHeight) {
    $(".backdropCircleMetal").height(circleMetalWidth);
  }

  var circleMetalTop = (frameHeight-circleMetalHeight-300)/2;
  var circleMetalLeft = (frameWidth-circleMetalHeight-300)/2;
  $(".backdropCircleMetal").css("top",circleMetalTop);
  $(".backdropCircleMetal").css("left",circleMetalLeft);

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
  
  var textareaWidth = $("#clientText").width();
  var textareaHeight = $("#clientText").height();
  var textareaLeft = (frameWidth-textareaWidth)/2;
  var textareaTop = (frameHeight-textareaHeight)/2;

  $(".clientTextBase").css("top", textareaTop);
  $(".clientTextBase").css("left", textareaLeft);

  $(".backdrop").width(textareaWidth);
  $(".backdrop").height(textareaHeight);
  $(".backdrop").css("top",textareaTop);
  $(".backdrop").css("left", textareaLeft);

  var squareWidth = $(".backdropSquare").width();
  var squareHeight = $(".backdropSquare").height();

  if (squareWidth < squareHeight) {
    $(".backdropSquare").width(squareHeight);
  } else if (squareWidth > squareHeight) {
    $(".backdropSquare").height(squareWidth);
  }

  var squareTop = (frameHeight-squareHeight-200)/2;
  $(".backdropSquare").css("top",squareTop);



  var squareMetalWidth = $(".backdropSquareMetal").width();
  var squareMetalHeight = $(".backdropSquareMetal").height();

  if (squareMetalWidth < squareMetalHeight) {
    $(".backdropSquareMetal").width(squareMetalHeight);
  } else if (squareMetalWidth > squareMetalHeight) {
    $(".backdropSquareMetal").height(squareMetalWidth);
  }

  var squareMetalTop = (frameHeight-squareMetalHeight-200)/2;
  $(".backdropSquareMetal").css("top",squareMetalTop);



  var circleWidth = $(".backdrop").width();
  var circleHeight = $(".backdrop").height();

  if (circleWidth < circleHeight) {
    $(".backdropCircle").width(circleHeight);
  } else if (circleWidth > circleHeight) {
    $(".backdropCircle").height(circleWidth);
  }

  var circleTop = (frameHeight-circleHeight-300)/2;
  var circleLeft = (frameWidth-circleHeight-300)/2;
  $(".backdropCircle").css("top",circleTop);
  $(".backdropCircle").css("left",circleLeft);



  var circleMetalWidth = $(".backdrop").width();
  var circleMetalHeight = $(".backdrop").height();

  if (circleMetalWidth < circleMetalHeight) {
    $(".backdropCircleMetal").width(circleMetalHeight);
  } else if (circleMetalWidth > circleMetalHeight) {
    $(".backdropCircleMetal").height(circleMetalWidth);
  }

  var circleMetalTop = (frameHeight-circleMetalHeight-300)/2;
  var circleMetalLeft = (frameWidth-circleMetalHeight-300)/2;
  $(".backdropCircleMetal").css("top",circleMetalTop);
  $(".backdropCircleMetal").css("left",circleMetalLeft);




}); /*Window Resize close*/

/* idk why we didnt bring in event listeners separately in js sheet but here are misc toggle functions */

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


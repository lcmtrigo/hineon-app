$('#clientText').keydown(function(e) {
        Positioner();
    });

function Squarer() {

      var textareaWidth = $('#clientText').width();
      var textareaHeight = $('#clientText').height();
      var backdropWidth = $('#backdrop').width();
      var backdropHeight = $('#backdrop').height();

       if (backdropWidth>backdropHeight) {
          $('#backdrop').height(textareaWidth);
       } else if (backdropHeight>backdropWidth) {
          $('#backdrop').width(textareaHeight);
       }
       else {}
        
}

function Shaper() {
       
       var Shapechoice = $('input[name=chooseShape]:checked').val();
       var Usechoice = $('input[name=chooseIndoorOutdoor]:checked').val();

       var backdropWidth = $('#clientText').width();
       var backdropHeight = $('#clientText').height();


       if (Shapechoice=='circle'&&Usechoice=='indoor') {
          $("#backdrop").height(backdropHeight);
          $("#backdrop").width(backdropWidth);

          Squarer();

          $("#backdrop").addClass('backdropSquare backdropCircle');
          $("#backdrop").removeClass('backdropRectangle backdropOutline metal');
       } else if (Shapechoice=='square'&&Usechoice=='indoor') {
          $("#backdrop").height(backdropHeight);
          $("#backdrop").width(backdropWidth);

          Squarer();

          $("#backdrop").addClass('backdropSquare');
          $("#backdrop").removeClass('backdropCircle backdropRectangle backdropOutline metal');
       } else if (Shapechoice=='rectangle'&&Usechoice=='indoor') {
          $("#backdrop").height('auto');
          $("#backdrop").width(backdropWidth);

          $("#backdrop").addClass('backdropRectangle');
          $("#backdrop").removeClass('backdropCircle backdropSquare  backdropOutline metal');
       } else if (Shapechoice=='outline'&&Usechoice=='indoor') {
          $("#backdrop").height('auto');
          $("#backdrop").width(backdropWidth);

          $("#backdrop").addClass('backdropOutline');
          $("#backdrop").removeClass('backdropCircle backdropSquare backdropRectangle metal');


       } else if (Shapechoice=='circle'&&Usechoice=='outdoor') {
          $("#backdrop").height(backdropHeight);
          $("#backdrop").width(backdropWidth);
          Squarer();

          $("#backdrop").addClass('backdropSquare backdropCircle metal');
          $("#backdrop").removeClass('backdropRectangle backdropOutline');

       } else if (Shapechoice=='square'&&Usechoice=='outdoor') {
          $("#backdrop").height(backdropHeight);
          $("#backdrop").width(backdropWidth);
          Squarer();

          $("#backdrop").addClass('backdropSquare metal');
          $("#backdrop").removeClass('backdropCircle backdropRectangle backdropOutline');
       } else if (Shapechoice=='rectangle'&&Usechoice=='outdoor') {
          $("#backdrop").height('auto');
          $("#backdrop").width(backdropWidth);

          $("#backdrop").addClass('backdropRectangle metal');
          $("#backdrop").removeClass('backdropCircle backdropSquare backdropOutline');
       } else if (Shapechoice=='outline'&&Usechoice=='outdoor') {
          $("#backdrop").height('auto');
          $("#backdrop").width(backdropWidth);

          $("#backdrop").removeClass('backdropCircle backdropSquare backdropOutline backdropRectangle metal');
       } else {
        
       };

}

function Mimic() {
 $('#clientText').keyup();
}


function TextareaSizer() {
  
  $('#clientText').on('keyup',function() {
  
  $(this).css('width','0px');
  $(this).css('height','0px');
  $(this).css('width',Math.max(50,this.scrollWidth)+'px');
  $(this).css('height',Math.max(1,this.scrollHeight)+'px');

    Shaper();

  });

}



function Positioner() {
  
  var frameWidth = $("#webapp").width();
  var frameHeight = $("#webapp").height();
  
  var textareaWidth = $("#clientText").width();
  var textareaHeight = $("#clientText").height();

  var percent = textareaHeight*0.05;

  var textareaTop = (frameHeight-textareaHeight)/3;

  $("#clientText").css('top',textareaTop-percent);
  $(".backdrop").css('top',textareaTop-percent);

}


function mobileModal() {

  var frameWidth = $("#webapp").width();
  var quoteWidth = $(".quoteTabbox").width();  
  var quoteLeftMargin = (frameWidth-quoteWidth-24)/2;  //padding12

  if (frameWidth <= 768) {
  
  $(".quoteTabbox").css("left", quoteLeftMargin); 
  $("#GetQuote .btnContentClose").css("right", quoteLeftMargin+15);
  $("#Purchase .btnContentClose").css("right", quoteLeftMargin+15);

  } else {}

}

function mobileFAQmodal() {

  var frameWidth = $("#webapp").width();
  var frameHeight = $("#webapp").height();
  var containerWidth = 500;  
  var leftMargin = (frameWidth-containerWidth-60)/2;  //padding30
  
  var leftXSMargin = (frameWidth-270)/2;  

  var emailWidth = $("#email").width();  
  var emailLeftMargin = (frameWidth-emailWidth-20)/2;  //padding30

    if (frameWidth < 576) {
      $("div.modal").css("margin-left", leftXSMargin);
      $("#email").css("margin-left",emailLeftMargin);}
      else {
        $("div.modal").css("margin-left", leftMargin); 
        $("#email").css("margin-left",emailLeftMargin);
      }
 
  var tabWidth = frameWidth-75;
  $(".tabbox").width(tabWidth);



}



$(document).ready(function() 
	{

  $('#clientText').bind('keyup', function(e) {
    var data = $('#clientText').val()
    $('#backdrop').html(data.replace(/\n/g,"<br />"));
  });

  $(document).delegate("#clientText", "keyup", function(event){
      if(event.which === 190) {
          var cleanedValue = $(this).val().replace(".",",");
          $(this).val(cleanedValue);
      }
    });

  TextareaSizer();
  mobileFAQmodal();

  var textareaFont = $("#clientText").css("font-family");
  var textareaFontSize = $("#clientText").css("font-size");
  var textareaFontHeight = $("#clientText").css("line-height");

  $(".backdrop").css("font-family", textareaFont);
  $(".backdrop").css("font-size", textareaFontSize);
  $(".backdrop").css("line-height", textareaFontHeight);

  var textareaWidth = $(".clientTextBase").width();
  var textareaHeight = $(".clientTextBase").height();

  $(".backdrop").width(textareaWidth);
  $(".backdrop").height('auto');

  Positioner();
  mobileModal();

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

    Mimic();
    TextareaSizer();
    Shaper();


    }); /*fonts end*/

/* font size */
$('input[name=chooseFontSize]:radio').on('change', function() {
       

       var Sizechoice = $('input[name=chooseFontSize]:checked').val();

       if (Sizechoice=='small') {
          $("#clientText").addClass('size-small');
          $("#clientText").removeClass('size-medium size-large');
       } else if (Sizechoice=='medium') {
          $("#clientText").addClass('size-medium');
          $("#clientText").removeClass('size-small size-large');
       } else if (Sizechoice=='large') {
          $("#clientText").addClass('size-large');
          $("#clientText").removeClass('size-medium size-small');
       } else {
        alert('Please select font size!');
       };

   var textareaFontSize = $("#clientText").css("font-size");
   var textareaFontHeight = $("#clientText").css("line-height");
    $(".backdrop").css("font-size", textareaFontSize);
    $(".backdrop").css("line-height", textareaFontHeight);

    Mimic();
    TextareaSizer();
    Shaper();
    Positioner();



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
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-cw');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='whiteWarm'&&Switchoff=='none') {
          $("#clientText").addClass('ww woff');
          $("#clientText").removeClass('cr co cgd cg cb cp cy cw wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-ww');
          $("#bulb").removeClass('gradient-cw gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmRed'&&Switchoff=='none') {
          $("#clientText").addClass('wr woff');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww cw wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-wr');
          $("#bulb").removeClass('gradient-ww gradient-cw gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmOrange'&&Switchoff=='none') {
          $("#clientText").addClass('wo woff');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr cw wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-wo');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-cw gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmGreen'&&Switchoff=='none') {
          $("#clientText").addClass('wg woff');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo cw wb wp croff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-wg');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-cw gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmBlue'&&Switchoff=='none') {
          $("#clientText").addClass('wb woff');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo wg cw wp croff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-wb');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-cw gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmPink'&&Switchoff=='none') {
          $("#clientText").addClass('wp woff');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo wg wb cw croff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-wp');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-cw gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolRed'&&Switchoff=='none') {
          $("#clientText").addClass('cr croff');
          $("#clientText").removeClass('cw co cgd cg cb cp cy ww wr wo wg wb wp woff cooff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-cr');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cw gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolOrange'&&Switchoff=='none') {
          $("#clientText").addClass('co cooff');
          $("#clientText").removeClass('cr cw cgd cg cb cp cy ww wr wo wg wb wp croff woff cgdoff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-co');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-cw gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolGold'&&Switchoff=='none') {
          $("#clientText").addClass('cgd cgdoff');
          $("#clientText").removeClass('cr co cw cg cb cp cy ww wr wo wg wb wp croff cooff woff cyoff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-cgd');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cw gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolYellow'&&Switchoff=='none') {
          $("#clientText").addClass('cy cyoff');
          $("#clientText").removeClass('cr co cgd cg cb cp cw ww wr wo wg wb wp croff cooff cgdoff woff cgoff cboff cpoff');
          $("#bulb").addClass('gradient-cy');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cw gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolGreen'&&Switchoff=='none') {
          $("#clientText").addClass('cg cgoff');
          $("#clientText").removeClass('cr co cgd cw cb cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff woff cboff cpoff');
          $("#bulb").addClass('gradient-cg');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cw gradient-cb gradient-cp');
       } else if (Colorchoice=='coolBlue'&&Switchoff=='none') {
          $("#clientText").addClass('cb cboff');
          $("#clientText").removeClass('cr co cgd cg cw cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff woff cpoff');
          $("#bulb").addClass('gradient-cb');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cw gradient-cp');
       } else if (Colorchoice=='coolPink'&&Switchoff=='none') {
          $("#clientText").addClass('cp cpoff');
          $("#clientText").removeClass('cr co cgd cg cb cw cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff woff');
          $("#bulb").addClass('gradient-cp');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cw');
       }


      else if (Colorchoice=='whiteCool'&&Switchoff=='block') {
          $("#clientText").addClass('cw');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-cw');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='whiteWarm'&&Switchoff=='block') {
          $("#clientText").addClass('ww');
          $("#clientText").removeClass('cr co cgd cg cb cp cy cw wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-ww');
          $("#bulb").removeClass('gradient-cw gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmRed'&&Switchoff=='block') {
          $("#clientText").addClass('wr');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww cw wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-wr');
          $("#bulb").removeClass('gradient-ww gradient-cw gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmOrange'&&Switchoff=='block') {
          $("#clientText").addClass('wo');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr cw wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-wo');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-cw gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmGreen'&&Switchoff=='block') {
          $("#clientText").addClass('wg');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo cw wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-wg');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-cw gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmBlue'&&Switchoff=='block') {
          $("#clientText").addClass('wb');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo wg cw wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-wb');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-cw gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='warmPink'&&Switchoff=='block') {
          $("#clientText").addClass('wp');
          $("#clientText").removeClass('cr co cgd cg cb cp cy ww wr wo wg wb cw croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-wp');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-cw gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolRed'&&Switchoff=='block') {
          $("#clientText").addClass('cr');
          $("#clientText").removeClass('cw co cgd cg cb cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-cr');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cw gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolOrange'&&Switchoff=='block') {
          $("#clientText").addClass('co');
          $("#clientText").removeClass('cr cw cgd cg cb cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-co');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-cw gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolGold'&&Switchoff=='block') {
          $("#clientText").addClass('cgd');
          $("#clientText").removeClass('cr co cw cg cb cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-cgd');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cw gradient-cy gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolYellow'&&Switchoff=='block') {
          $("#clientText").addClass('cy');
          $("#clientText").removeClass('cr co cgd cg cb cp cw ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-cy');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cw gradient-cg gradient-cb gradient-cp');
       } else if (Colorchoice=='coolGreen'&&Switchoff=='block') {
          $("#clientText").addClass('cg');
          $("#clientText").removeClass('cr co cgd cw cb cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-cg');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cw gradient-cb gradient-cp');
       } else if (Colorchoice=='coolBlue'&&Switchoff=='block') {
          $("#clientText").addClass('cb');
          $("#clientText").removeClass('cr co cgd cg cw cp cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-cb');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cw gradient-cp');
       } else if (Colorchoice=='coolPink'&&Switchoff=='block') {
          $("#clientText").addClass('cp');
          $("#clientText").removeClass('cr co cgd cg cb cw cy ww wr wo wg wb wp croff cooff cgdoff cyoff cgoff cboff cpoff woff');
          $("#bulb").addClass('gradient-cp');
          $("#bulb").removeClass('gradient-ww gradient-wr gradient-wo gradient-wg gradient-wb gradient-wp gradient-cr gradient-co gradient-cgd gradient-cy gradient-cg gradient-cb gradient-cw');
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
          $("#backdrop").addClass("metal");
          $("#backdrop").removeClass("backdropOutline");
       } else if (Usechoice=='indoor'){
        $("#outline").attr("disabled",false);
        $(".outdoorSlider").css('display','none');
        $("#backdrop").removeClass("metal");
       } else {
        alert('Please select your environment settings!');
       };
});



/* shape */
$('input[name=chooseShape]:radio').on('change', function(){

Shaper();

});


/* Any other config? */


/*DOM ready close */
});




/*on resize*/

$(window).on('resize',function() {

  mobileFAQmodal();

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

  Positioner();
  mobileModal();

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
       } else if ($('#clientText').hasClass('cgd')||$('#clientText').hasClass('cgdoff')){
          $('#clientText').toggleClass('cgdoff');
       } else if ($('#clientText').hasClass('cy')||$('#clientText').hasClass('cyoff')){
          $('#clientText').toggleClass('cyoff');
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
      $('#email').fadeToggle(200);
    }


/* tool tips */

$('.btnFaqText').on('click', function(){
    $('#faqText').fadeToggle(200);
});

$('.btnFaqColor').on('click', function(){
    $('#faqColor').fadeToggle(200);
});

$('.btnFaqShape').on('click', function(){
    $('#faqShape').fadeToggle(200);
});

$('.btnFaqInstallation').on('click', function(){
    $('#faqInstallation').fadeToggle(200);
});

$('.btnFaqQtyShipping').on('click', function(){
    $('#faqQtyShipping').fadeToggle(200);
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



/*<!-- ============= star ============= -->*/

$(document).ready(function(){
	
	$('.rate1').raty({
		click: function(score, evt) {
		alert('ID: ' + this.id + "\nscore: " + score);
	 }
	});
	
	$('.rate2').raty({
		number : 5,
		starHalf : 'img/star-half.png',
		starOff : 'img/star-off.png',
		starOn  : 'img/star-on.png'
	});
	
	$('.rate3').raty({
		number : 4,
		target : '.name',
		hints  : ['очень плохо', 'плохо', 'нормально', 'хорошо', 'очень хорошо'], 
	});

/*<!-- ============= star end ============= -->*/

	/*========popup======*/
	// $('a.show_popup').click(function () {
	// 	$('div.'+$(this).attr("rel")).fadeIn(500);
	// 	$("body").append("<div id='overlay'></div>");
	// 	$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
	// 	return false;				
	// });	
	// $('a.close').click(function () {
	// 	$(this).parent().fadeOut(100);
	// 	$('#overlay').remove('#overlay');
	// 	return false;
	// });

	$('.open_popup').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
		$('.overlay').show();
	})
	$('.open_popup_1').click(function(){
		$('.popup').hide();
		$('#popup1').show();
	})
	$('.open_popup_2').click(function(){
		$('.popup').hide();
		$('#popup3').show();
	})
	$('.open_popup_3').click(function(){
		$('.popup').hide();
		$('#popup4').show();
	})
	$('.close').click(function() {
		$('.overlay, .popup').hide();
	})
    
});

/*<!-- =================  end   =========================== -->*/



/*<============= mmenu ===========>*/ 

   	$(document).ready(function() {
      $("#my-menu").mmenu({
         // Options
         "extensions": [
			"pagedim-black",
			"theme-dark"
			],
			"offCanvas": {
            	"zposition": "front"
         	}
      });
      var API = $("#my-menu").data( "mmenu" );
      
      $("#mmenu-icon").click(function() {
         API.open();
      });
   });
/*<============= mmenu end ===========>*/

/*<============= popup ===========>*/
$(document).ready(function(){
	
	$('.open_popup').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
		$('.overlay').show();
	})
	$('.close').click(function() {
		$('.overlay, .popup-feedback').hide();
	})
    
});

/*<============= popup end ===========>*/
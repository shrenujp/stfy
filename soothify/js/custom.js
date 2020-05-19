/* Go to next screen
---------------------------------------------------------------------*/
$(document).on('click','.lastitem',function(){
	var getOffset = $('#section2').offset().top;
	$('body').removeClass('noScroll');
	$("html:not(:animated),body:not(:animated)").animate({ scrollTop:getOffset},450);
});

// Block Animation
$(window).on('load', function () {
    AOS.refresh();
});
AOS.init({
    duration: 1200,
    once: true
})

// Video
var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

// Modal
$(document).ready(function(){
	getLocation();
    $(this).scrollTop(0);
    $("#modalwrap").modal('show');
	$('.modal-field .btn').click(function(){
		var userName = $('.modal-field > input').val();
		$('.txtname').html(userName+', <br>Let us  together, try to make everything above a reality. Your reality!');
		$('.txtnameBest').html(userName);
		//$("#modalwrap").modal('hide');
		if(userName != "")
		{
			$(this).next('.feilderror').fadeOut('normal');
			$("#modalwrap").modal('hide');
			$(this).parents('.modal-content').removeClass('error');
		}
		else
		{
			$(this).next('.feilderror').fadeIn('normal');
			$(this).parents('.modal-content').addClass('error');
		}
	});
	
	if($('.modal-field > input').length){
			$('.modal-field > input').focusout(function()
			{
				if($(this).val() != "")
				{
					$(this).next().next('.feilderror').fadeOut('normal');
					$(this).parents('.modal-content').removeClass('error');
				}
				else
				{
					$(this).next().next('.feilderror').fadeIn('normal');
					$(this).parents('.modal-content').addClass('error');
				}
		});
	}
	
});

function getLocation(){
	$.ajax({
        type: 'get',
        url: 'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572',
        success: function(data) {
            if(data){
            	data = JSON.parse(data);
            	$('.country_name_question').text(', '+data.country_name+' ?');
            	$('.country_name').text(', '+data.country_name);
            }
        }
    });
}


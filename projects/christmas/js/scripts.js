$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
	});
	
	$('#myForm').validator({
		feedback: {
			success: 'fa fa-check-circle',
			error: 'fa fa-times-circle'
		}
	});

	$('.form-sel').select2({
		minimumResultsForSearch: Infinity
	});

	new WOW({
		offset: 100
	}).init();

});


$(document).ready(function(){
    $("#go-to-reg").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1750);
    });
});


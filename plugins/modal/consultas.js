function probar(){
	$(".iframe").colorbox({iframe:true, width:"80%", height:"90%"})
	}

$(document).bind('cbox_open', function () {
    $('html').css({ overflow: 'hidden' });
}).bind('cbox_closed', function () {
    $('html').css({ overflow: 'auto' });
}); 
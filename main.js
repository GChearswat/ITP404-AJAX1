$('ul').on('click', 'a', function() {
	var $handle = $(this).attr('id');
	$('#tweets').html('<img src="ajax-loader.gif" />');
	$.ajax({
		url: 'twitter-JSON.php',
		type: 'GET',
		data: {
			name: $handle
		},
		success: function(msg) {
			$('#tweets').html(msg);
		}
	});
});

$('#tweets').on('click', 'li', function() {
	$(this).addClass("read");
});
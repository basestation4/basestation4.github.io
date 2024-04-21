jQuery(document).on('click', '#flappy-bird-app-wrapper', function (event) {
	jQuery('body').addClass('show-flappy-bird')
})
jQuery(document).on('click', '.app-wrapper:not(#flappy-bird-app-wrapper)', function (event) {
	jQuery('body').removeClass('show-flappy-bird')
})

jQuery(document).on('click', '#slider .apps .app-wrapper', function (event) {
	var ix = jQuery(this).index()
	console.log('ix', ix)

	jQuery('body').attr('data-slider-ix', ix)
})

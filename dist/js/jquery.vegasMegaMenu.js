/**
 * Created by Vegas s on 03.12.2018.
 */

(function( $ ) {
	"use strict";

	$.fn.vegasMegaMenu = function(options) {

		options = $.extend({

		}, arguments[0] || {});

		var $self = this,
			mainClass = 'vg-menu-main-content',
			show = 'show';

		$self.addClass(mainClass);

		$(document).on('click', 'li.dropdown a', function () {
			var $_self = $(this);
			var $li = $_self.parent('li');

			$('.dropdown-mega').removeClass('show');

			if($li.parent('ul').hasClass(mainClass)) {
				var $lvl = $self.find('.'+ show);
				if($lvl.hasClass('current')) {
					$lvl.removeClass(show);
				}

				if(!$li.hasClass('current')) {
					$li.addClass(show).addClass('current');
					$lvl.removeClass('current');
				} else {
					$li.removeClass(show).removeClass('current');
				}
			} else {
				if ($li.hasClass('show')) {
					$_self.parent('li').removeClass('show');
					if ($li.parent('ul').hasClass(mainClass)) {
						$self.find('.show').removeClass('show');
					}
				} else {
					$_self.parent('li').addClass('show');
				}
			}

			return false;
		});

		$(document).on('click', 'li.dropdown-mega > a', function () {
			var $_self = $(this);
			var $li = $_self.parent('li');

			if ($li.hasClass('show')) {
				$li.removeClass('show');
			} else {
				$self.find('.'+ show).removeClass(show).removeClass('current');
				$li.addClass('show');
			}

			return false;
		});

		$(document).mouseup(function (e) {
			var container = $('.' + mainClass);
			if (container.has(e.target).length === 0){
				$self.find('.'+ show).removeClass(show).removeClass('current');
			}
		});

		return false;
	};
})(jQuery);
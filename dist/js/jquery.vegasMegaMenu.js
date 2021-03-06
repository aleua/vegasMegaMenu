/**
 * Created by Vegas s on 03.12.2018.
 */

(function( $ ) {
	"use strict";

	$.fn.vegasMegaMenu = function(options) {

		options = $.extend({

		}, arguments[0] || {});

		var $self = this,
			$menu = $self.children('ul'),
			mainClass = 'vg-menu-main-container',
			show = 'show',
			mobile = 992;

		$menu.addClass(mainClass);

		mobileMenu();

		$(document).on('click', 'li.dropdown a', function () {
			var $_self = $(this);
			var $li = $_self.parent('li');

			$('.dropdown-mega').removeClass('show');

			if($li.parent('ul').hasClass(mainClass)) {
				var $lvl = $menu.find('.'+ show);
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
						$menu.find('.show').removeClass('show');
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
				$menu.find('.'+ show).removeClass(show).removeClass('current');
				$li.addClass('show');
			}

			return false;
		});

		$(document).mouseup(function (e) {
			var container = $('.' + mainClass);
			if (container.has(e.target).length === 0){
				$menu.find('.'+ show).removeClass(show).removeClass('current');
			}
		});

		$(window).resize(function () {
			mobileMenu()
		});

		function mobileMenu() {
			if ($(window).width() <= mobile ) {
				$('.vg-menu-hamburger').css('display', 'block');
			} else {
				$('.vg-menu-hamburger').css('display', 'none');
			}
		}

		$(document).on('click', '.vg-menu-hamburger', function () {
			$('.vg-menu-hamburger').toggleClass(show);
			$menu.toggleClass(show);
		});

		return false;
	};
})(jQuery);
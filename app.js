$(document).ready(function () {
	// variables
	const App = {
		tabBtn: $('.tab'),
		tabContentBox: $('.tab_content'),
		mobileMenu: $('.mobile_menu_icon'),
		mobMenuLinks: $('.mobile_menu_links'),
		menuOne: $('.mobile_menu_one'),
		menuOneDrpDwn: $('.mobile_menu_one_links'),
		menuOneBack: $('.menu1_backward_arrow'),
		menuOpen: $('.menu_open'),
		menuClose: $('.menu_close'),
	};

	// tab content object
	const tabContent = {
		tab1: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Perferendis odio, repellendus veritatis quibusdam ipsum possimus
						mollitia officiis aliquid alias voluptatum numquam cum enim illo,
						dolorem quo repudiandae iure! Natus libero, nobis rerum dolore
						molestiae laboriosam blanditiis nostrum earum aliquam unde.`,

		tab2: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Perferendis odio, repellendus veritatis quibusdam ipsum possimus`,
	};
	// tab click functionality
	App.tabBtn.on('click', function () {
		App.tabBtn.removeClass('tab_active');
		let currentTab = $(this);
		let currentTabId = currentTab.attr('id');
		// console.log(currentTabId);
		currentTab.addClass('tab_active');
		showContent(currentTabId);
	});
	// content change for tabs
	function showContent(currentTabId) {
		App.tabContentBox.html(tabContent[currentTabId]);
	}
	// mobile menu click
	App.mobileMenu.on('click', function () {
		App.mobMenuLinks.toggleClass('show_mobile_menu');
		App.menuOneDrpDwn.removeClass('stacked_menu');
		$('body').toggleClass('noScroll');
		changeMenuIcon();
	});
	App.menuOne.on('click', function () {
		App.menuOneDrpDwn.addClass('stacked_menu');
	});
	App.menuOneBack.on('click', function () {
		App.menuOneDrpDwn.removeClass('stacked_menu');
	});
	function changeMenuIcon() {
		if (App.mobMenuLinks.hasClass('show_mobile_menu')) {
			App.menuOpen.hide();
			App.menuClose.show();
		} else {
			App.menuOpen.show();
			App.menuClose.hide();
		}
	}
});

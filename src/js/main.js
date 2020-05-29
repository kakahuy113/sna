import {
	getSVGs,
	Loading
} from './util/utilities';
import Cookie from './lib/Cookie';

const checkSubMenu = () => {
	const items = document.querySelectorAll('.t_header--list-link>ul>li');
	items.forEach((item) => {
		const sub = item.querySelector('ul');
		if (sub) {
			item.classList.add('hasSub')
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	getSVGs();
	Loading();
	// Check Sub Menu
	checkSubMenu();
});

document.addEventListener('DOMContentLoaded', () => {});


// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());
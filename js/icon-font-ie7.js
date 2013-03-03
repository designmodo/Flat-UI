/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Flat-UI-Icons-16\'">' + entity + '</span>' + html;
	}
	var icons = {
			'fui-volume-16' : '&#xe000;',
			'fui-video-16' : '&#xe001;',
			'fui-time-16' : '&#xe002;',
			'fui-settings-16' : '&#xe003;',
			'fui-plus-16' : '&#xe004;',
			'fui-new-16' : '&#xe005;',
			'fui-menu-16' : '&#xe006;',
			'fui-man-16' : '&#xe007;',
			'fui-mail-16' : '&#xe008;',
			'fui-lock-16' : '&#xe009;',
			'fui-location-16' : '&#xe00a;',
			'fui-heart-16' : '&#xe00b;',
			'fui-eye-16' : '&#xe00c;',
			'fui-cross-16' : '&#xe00d;',
			'fui-cmd-16' : '&#xe00e;',
			'fui-checkround-16' : '&#xe00f;',
			'fui-checkmark-16' : '&#xe010;',
			'fui-camera-16' : '&#xe011;',
			'fui-calendar-16' : '&#xe012;',
			'fui-bubble-16' : '&#xe013;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/fui-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};

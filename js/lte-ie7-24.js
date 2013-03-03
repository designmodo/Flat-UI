/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Flat-UI-Icons-24\'">' + entity + '</span>' + html;
	}
	var icons = {
			'fui-video-24' : '&#xe000;',
			'fui-time-24' : '&#xe001;',
			'fui-settings-24' : '&#xe002;',
			'fui-plus-24' : '&#xe003;',
			'fui-new-24' : '&#xe005;',
			'fui-menu-24' : '&#xe006;',
			'fui-man-24' : '&#xe007;',
			'fui-mail-24' : '&#xe008;',
			'fui-lock-24' : '&#xe009;',
			'fui-location-24' : '&#xe00a;',
			'fui-heart-24' : '&#xe00b;',
			'fui-eye-24' : '&#xe00c;',
			'fui-cross-24' : '&#xe00d;',
			'fui-cmd-24' : '&#xe00e;',
			'fui-checkround-24' : '&#xe00f;',
			'fui-checkmark-24' : '&#xe010;',
			'fui-calendar-24' : '&#xe011;',
			'fui-bubble-24' : '&#xe012;',
			'fui-volume-24' : '&#xe013;',
			'fui-camera-24' : '&#xe004;'
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
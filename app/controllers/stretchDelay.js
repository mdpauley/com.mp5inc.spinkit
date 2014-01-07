var args = arguments[0] || {};

doWork();

function doWork() {
	var s1 = Ti.UI.createAnimation({
		top: "1dp",
		bottom: "1dp",
		duration : 200,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 0
	});
	var s2 = Ti.UI.createAnimation({
		top: "1dp",
		bottom: "1dp",
		duration : 200,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 100
	});
	var s3 = Ti.UI.createAnimation({
		top: "1dp",
		bottom: "1dp",
		duration : 200,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 200
	});
	var s4 = Ti.UI.createAnimation({
		top: "1dp",
		bottom: "1dp",
		duration : 200,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 300
	});
	var s5 = Ti.UI.createAnimation({
		top: "1dp",
		bottom: "1dp",
		duration : 200,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 400
	});
	var s6 = Ti.UI.createAnimation({
		top: "1dp",
		bottom: "1dp",
		duration : 200,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 500
	});
		
	$.rect1.animate(s1);
	$.rect2.animate(s2);
	$.rect3.animate(s3);
	$.rect4.animate(s4);
	$.rect5.animate(s5);
	$.rect6.animate(s6, function(){
		setTimeout(function(){
			doWork();
		}, 300);
		
	});
};
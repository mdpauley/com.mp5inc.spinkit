$.index.open();
/*
var animation = require('alloy/animation');

var a = Ti.UI.createAnimation({
	opacity : 1,
	transform : Ti.UI.create2DMatrix().scale(0.0, 0.0),
	duration : 1,
});
$.doubleBounce1.animate(a);

var doWork = function() {
	var b0 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix().scale(0.0, 0.0),
		duration : 100,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true
	});

	var b1 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix().scale(1.0, 1.0),
		duration : 100,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true
	});

	var b1Handler = function() {
		b1.removeEventListener('complete',b1Handler);
		doubleBounce();
	};
	b1.addEventListener('complete',b1Handler);
	
	$.doubleBounce2.animate(b0);
	$.doubleBounce1.animate(b1);
};

function stretch() {
	var s1 = Ti.UI.createAnimation({
		top: "10dp",
		bottom: "10dp",
		duration : 150,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 0
	});
	var s2 = Ti.UI.createAnimation({
		top: "10dp",
		bottom: "10dp",
		duration : 150,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 100
	});
	var s3 = Ti.UI.createAnimation({
		top: "10dp",
		bottom: "10dp",
		duration : 150,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 200
	});
	var s4 = Ti.UI.createAnimation({
		top: "10dp",
		bottom: "10dp",
		duration : 150,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 300
	});
	var s5 = Ti.UI.createAnimation({
		top: "10dp",
		bottom: "10dp",
		duration : 150,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true,
		delay: 400
	});
	var s6 = Ti.UI.createAnimation({
		top: "10dp",
		bottom: "10dp",
		duration : 150,
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
			stretch();
		}, 300);
		
	});
};

doubleBounce();
stretch();
*/
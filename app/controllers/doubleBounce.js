var args = arguments[0] || {};

/* set inital scale of 1 circle */
$.doubleBounce1.animate({
	opacity : 1,
	transform : Ti.UI.create2DMatrix().scale(0.0, 0.0),
	duration : 1,
});

doWork();

function doWork(){
	var b0 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix().scale(0.0, 0.0),
		duration : 1000,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true
	});

	var b1 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix().scale(1.0, 1.0),
		duration : 1000,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true
	});

	var b1Handler = function() {
		b1.removeEventListener('complete',b1Handler);
		doWork();
	};
	b1.addEventListener('complete',b1Handler);
	
	$.doubleBounce2.animate(b0);
	$.doubleBounce1.animate(b1);
};
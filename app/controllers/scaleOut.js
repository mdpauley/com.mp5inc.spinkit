var args = arguments[0] || {};

doWork();

$.doubleBounce.animate({
	opacity : 1,
	transform : Ti.UI.create2DMatrix().scale(0.0, 0.0),
	duration : 1,
});

function doWork() {
	var b0 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix().scale(1.0, 1.0),
		opcity: 0.0,
		duration : 1000,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
		autoreverse: true
	});
	
	$.doubleBounce.animate(b0, function(){
		doWork();
	});
}

var args = arguments[0] || {};

doWork();

function doWork() {
	var b0 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix().scale(0.0, 0.0),
		opacity : 1.0,
		duration : 1
	});
	var b1 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix().scale(1.0, 1.0),
		opacity : 0.0,
		duration : 1000,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	$.doubleBounce1.animate(b0, function() {
		$.doubleBounce1.animate(b1, function() {
			doWork();
		});
	});
}

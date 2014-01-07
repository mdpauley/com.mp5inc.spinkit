var args = arguments[0] || {};
var animation = require('alloy/animation');

doWork();

function doWork() {	
	var s1 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix({
			rotate: -90,
			scale : (0.5, 0.5)
		}),
		top: "0dp",
		left: "45dp",
		duration : 450,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	var s2 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix({
			rotate: -180,
			scale : (1.0, 1.0)
		}),
		top: "45dp",
		left: "45dp",
		duration : 450,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	var s3 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix({
			rotate: -270,
			scale : (0.5, 0.5)
		}),
		top: "45dp",
		left: "0dp",
		duration : 450,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	var s4 = Ti.UI.createAnimation({
		transform : Ti.UI.create2DMatrix({
			rotate: -360,
			scale : (1.0, 1.0)
		}),
		top: "0dp",
		left: "0dp",
		duration : 450,
		curve : Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});

	$.cube1.animate(s1, function(){
		$.cube1.animate(s2, function(){
			$.cube1.animate(s3, function(){
				$.cube1.animate(s4, function(){
					
				});
			});
		});		
	});
	$.cube2.animate(s3, function(){
		$.cube2.animate(s4, function(){
			$.cube2.animate(s1, function(){
				$.cube2.animate(s2, function(){
					doWork();
				});
			});
		});		
	});
};
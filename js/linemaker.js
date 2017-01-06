(function() {
var lineMaker = new LineMaker({
	parent: { element: document.getElementById('landingpage'), position: 'append' },
	position: 'fixed',
	lines: [
		{top: '0', left: 0, width: '100vw', height: '15vh', color: '#99ccff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 1000, direction: 'LeftRight' }},
		{top: '15vh', left: 0, width: '100vw', height: '15vh', color: '#66b3ff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 1150, direction: 'RightLeft' }},
		{top: '30vh', left: 0, width: '100vw', height: '15vh', color: '#3399ff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 1300, direction: 'LeftRight' }},
		{top: '45vh', left: 0, width: '100vw', height: '15vh', color: '#0080ff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 1450, direction: 'RightLeft' }},
		{top: '60vh', left: 0, width: '100vw', height: '16vh', color: '#004d99', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 1600, direction: 'LeftRight' }},
		{top: '75vh', left: 0, width: '100vw', height: '15vh', color: '#003366', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 1750, direction: 'RightLeft' }},
		{top: '90vh', left: 0, width: '100vw', height: '15vh', color: '#001f3f', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 1900, direction: 'LeftRight' }}
	]
});
setTimeout(function() {
lineMaker.animateLinesOut();
}, 500);
})();
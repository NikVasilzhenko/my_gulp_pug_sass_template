//fixed header
window.addEventListener('scroll', function() {
	if(document.getElementById('js-header-trigger')){
			if(document.documentElement.scrollTop > (document.getElementById('js-header-trigger').getBoundingClientRect().top + pageYOffset + document.getElementById('js-header-trigger').getBoundingClientRect().height) ){
			document.getElementById('js-header-main').classList.add('fix');
		} else{
			document.getElementById('js-header-main').classList.remove('fix');
		}
	}	
});

//scroll button
const anchors = document.querySelectorAll('a.js-scroll-to')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
    	e.preventDefault();    
    	const blockID = anchor.getAttribute('href');    
    	document.querySelector(blockID).scrollIntoView({
    		behavior: 'smooth',
    		block: 'start'
    	});	
	});
}

//faq
function faqAccordion($this){
	$this.classList.toggle('hide');
	$this.nextElementSibling.classList.toggle('hide');
}
window.onload = function() {
	let faqTexts = document.querySelectorAll('.js-faq-txt');
	for (let i = 0; i < faqTexts.length; i++) {	
		let thisHeight = faqTexts[i].getBoundingClientRect().height;
		faqTexts[i].style.height = (thisHeight + 'px');
		faqTexts[i].classList.add('hide');
		function ready(){faqTexts[i].classList.add('ready');}
		setTimeout(ready, 250);
	}
}
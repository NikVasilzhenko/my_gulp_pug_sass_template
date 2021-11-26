document.addEventListener('DOMContentLoaded', () => {
  //slides functions
  const animationTime = 350;  
  function slideDown($this, animationTime) {
    let overlay = $this;

    if(getComputedStyle(overlay, true).display === 'none'){
      if( !(overlay.classList.contains('inAnimate')) ){
        overlay.classList.add('inAnimate');

        let paddingTopSize = parseInt(getComputedStyle(overlay, true).paddingTop);
        let paddingBottomSize = parseInt(getComputedStyle(overlay, true).paddingBottom);
        let marginTopSize = parseInt(getComputedStyle(overlay, true).marginTop);
        let marginBottomSize = parseInt(getComputedStyle(overlay, true).marginBottom); 

        overlay.style.paddingTop = '0';
        overlay.style.paddingBottom = '0';
        overlay.style.marginTop = '0';
        overlay.style.marginBottom = '0';
        overlay.style.display = 'block';
        overlay.style.overflow = 'hidden';
        overlay.style.height = '0';

        let scrollSize = overlay.scrollHeight + paddingTopSize + paddingBottomSize;

        overlay.style.transition = 'all ' + animationTime + 'ms ease-in-out';
        overlay.style.height = scrollSize + "px";
        overlay.style.paddingTop = paddingTopSize + "px";
        overlay.style.paddingBottom = paddingBottomSize + "px";
        overlay.style.marginTop = marginTopSize + "px";
        overlay.style.marginBottom = marginBottomSize + "px";
        setTimeout(
          (function(){
            overlay.style.overflow = '';
            overlay.style.height = '';
            overlay.style.paddingTop = '';
            overlay.style.paddingBottom = '';
            overlay.style.marginTop = '';
            overlay.style.marginBottom = '';
            overlay.classList.remove('inAnimate');
          }), animationTime
        )
      }
    }
  }
  function slideUp($this, animationTime) {
    let overlay = $this;

    if(getComputedStyle(overlay, true).display !== 'none'){

      if( !(overlay.classList.contains('inAnimate')) ){
        overlay.classList.add('inAnimate');

        let paddingTopSize = parseInt(getComputedStyle(overlay, true).paddingTop);
        let paddingBottomSize = parseInt(getComputedStyle(overlay, true).paddingBottom); 
        let marginTopSize = parseInt(getComputedStyle(overlay, true).marginTop);
        let marginBottomSize = parseInt(getComputedStyle(overlay, true).marginBottom);
        let containerHeight = overlay.clientHeight; 

        overlay.style.height = containerHeight + 'px';
        overlay.style.overflow = 'hidden';      
        overlay.style.paddingTop = paddingTopSize + 'px';
        overlay.style.paddingBottom = paddingBottomSize + 'px';
        overlay.style.marginTop = marginTopSize + 'px';
        overlay.style.marginBottom = marginBottomSize + 'px';
        overlay.style.transition = 'all ' + animationTime + 'ms ease-in-out';

        setTimeout(
          (function(){
            overlay.style.paddingTop = 0;
            overlay.style.paddingBottom = 0;
            overlay.style.marginTop = 0;
            overlay.style.marginBottom = 0;
            overlay.style.height = 0;
          }), 100
        )      
        setTimeout(
          (function(){
            overlay.style.overflow = '';
            overlay.style.height = '';
            overlay.style.paddingTop = '';
            overlay.style.paddingBottom = '';
            overlay.style.marginTop = '';
            overlay.style.marginBottom = '';
            overlay.style.display = 'none';
            overlay.classList.remove('inAnimate');
          }), animationTime
        )
      }
    }
  }
  function slideToggle($this, animationTime){
    let overlay = $this;
    if(getComputedStyle(overlay, true).display !== 'none'){
      slideUp($this, animationTime);
    } else{
      slideDown($this, animationTime);
    }
  }
  
  //faq
  document.querySelectorAll('.js-faq-title').forEach(function(elem) {
	//в elem на каждой итерации передается последующей объект из выборки
    elem.addEventListener('click', function(e){
      if( elem.classList.contains('open') ){
        elem.classList.remove('open');
        slideUp(elem.nextElementSibling, animationTime);
      } else{
        let openElem = document.querySelector('.js-faq-title.open');
        if(openElem){
          slideUp(openElem.nextElementSibling, animationTime);
          openElem.classList.remove('open');
        }        
        elem.classList.add('open');
        slideDown(elem.nextElementSibling, animationTime);
      }
    });
  });

  //popup
  function openPopup(elem){
    document.querySelector(elem).classList.add('open')
  };
  
  document.querySelectorAll('.js-popup-overlay').forEach(function(elem) {
    elem.addEventListener('click', function(e){
      elem.parentElement.classList.remove('open')
    });
  });
  document.querySelectorAll('.js-popup-close').forEach(function(elem) {
    elem.addEventListener('click', function(e){
      elem.parentElement.parentElement.classList.remove('open')
    });
  });
  
  
});
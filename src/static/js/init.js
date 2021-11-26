document.addEventListener('DOMContentLoaded', () => {
  
  //collection  
  document.getElementById('js-my-collection').addEventListener('click', function(){
    document.querySelector('#js-collection').classList.add('open')
    let myCollection = new Swiper("#js-collection-slider", {
      slidesPerView: 3,
      scrollbar: {
        el: "#js-my-collection-bar",
        draggable: true,
      },
      navigation: {
        nextEl: "#js-my-collection-next",
        prevEl: "#js-my-collection-prev",
      },
    });
  });
  
  //characters
  let charactersSliderMain = new Swiper('#js-characters-slider-main', {
    effect: 'fade',
    speed: 800,
    loop: true,
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true
    },
  });
  let charactersSliders = new Swiper('.js-characters-slider', {
    allowTouchMove: false,
    speed: 800,
    loop: true
  });
  document.getElementById('js-characters-sliders-arrow-next').addEventListener('click', function(){
    charactersSliderMain.slideNext();
    console.log(charactersSliders);
    for (let i = 0; i < charactersSliders.length; i++) {
        charactersSliders[i].slideNext();
    }    
  });
  document.getElementById('js-characters-sliders-arrow-prev').addEventListener('click', function(){
    charactersSliderMain.slidePrev();
    console.log(charactersSliders);
    for (let i = 0; i < charactersSliders.length; i++) {
        charactersSliders[i].slidePrev();
    }    
  });
  
  //scroll
  let ctrl = new ScrollMagic.Controller({globalSceneOptions: {}}),
      durationVal = .8,
      offsetVal = 24,
      step = (window.innerHeight / 3 * 2);

  const sec1 = document.getElementById('Hero'),
        sec2 = document.getElementById('Characters'),
        sec3 = document.getElementById('Take_part_in_a_whitelist'),
        sec4 = document.getElementById('Year_2050_London'),
        sec5 = document.getElementById('Welcome_to_the_family'),
        sec6 = document.getElementById('How_rare_is_your_gangster'),
        sec7 = document.getElementById('Roadmap'),
        sec8 = document.getElementById('About_Game'),
        sec9 = document.getElementById('Rarity'),
        sec10 = document.getElementById('FAQ'),
        sec11 = document.getElementById('Our_team');

  function getBlockPos(block){
    return block.getBoundingClientRect().top + window.scrollY;
  } 

  function scrollDownFunc(block, numb, next){
    function deleteActiveClass(){
      block.classList.remove('active');
    }
    new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: block,
      offset: offsetVal 
    })
    .on('enter', function (event) {
      setTimeout(deleteActiveClass, (durationVal*1000));
      TweenLite.to(window, durationVal, {scrollTo:{y: getBlockPos(next), autoKill:false}, ease: Linear.easeNone});
      next.classList.add('active');
    }).addTo(ctrl); 
  };
  function scrollUpFunc(block, numb, next){
    function deleteActiveClass(){
      block.classList.remove('active');
    }
    new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: block,
      offset: -(offsetVal)
    })
    .on('leave', function (event) {
      setTimeout(deleteActiveClass, (durationVal*1000));   
      TweenLite.to(window, durationVal, {scrollTo:{y: getBlockPos(next), autoKill:false},ease: Linear.easeNone});
      next.classList.add('active');
    }).addTo(ctrl); 
  }

  //sec-1
  scrollDownFunc(sec1, 2, sec2);

  //sec-2
  scrollDownFunc(sec2, 3, sec3);
  scrollUpFunc(sec2, 0, sec1);

  //sec-3
  scrollDownFunc(sec3, 4, sec4);
  scrollUpFunc(sec3, 1, sec2);

  //sec-4
  scrollDownFunc(sec4, 5, sec5);
  scrollUpFunc(sec4, 2, sec3);

  //sec-5
  scrollDownFunc(sec5, 6, sec6); 
  scrollUpFunc(sec5, 3, sec4);

  //sec-6
  new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: sec6,
      duration: (step * 14),
      offset: 0 
  }).setPin(sec6).addTo(ctrl); 
  new ScrollMagic.Scene({
      triggerElement: sec6,
      offset: (step*2)
  }).setClassToggle(sec6, 'state-2').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec6,
      offset: (step*4)
  }).setClassToggle(sec6, 'state-3').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec6,
      offset: (step*6)
  }).setClassToggle(sec6, 'state-4').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec6,
      offset: (step*8)
  }).setClassToggle(sec6, 'state-5').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec6,
      offset: (step*10)
  }).setClassToggle(sec6, 'state-6').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec6,
      offset: (step*12)
  }).setClassToggle(sec6, 'state-7').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec6,
      offset: (step * 14 + 24)
  }).on('enter', function (event) {
      function deleteActiveClass(){
        sec6.classList.remove('active');
      }
      setTimeout(deleteActiveClass, (durationVal*1000));
      TweenLite.to(window, durationVal, {scrollTo:{y: getBlockPos(sec7), autoKill:false},ease: Linear.easeNone});
      sec7.classList.add('active');
  }).addTo(ctrl);

  scrollUpFunc(sec6, 4, sec5);

  //sec-7
  new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: sec7,
      duration: (step * 7),
      offset: 0 
  }).setPin(sec7).addTo(ctrl); 
  new ScrollMagic.Scene({
      triggerElement: sec7,
      offset: (step*2)
  }).setClassToggle(sec7, 'state-2').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec7,
      offset: (step*4)
  }).setClassToggle(sec7, 'state-3').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec7,
      offset: (step*6)
  }).setClassToggle(sec7, 'state-4').addTo(ctrl);
  new ScrollMagic.Scene({
      triggerElement: sec7,
      offset: (step * 7.5 + 24)
  }).on('enter', function (event) {
      sec7.classList.remove('active');    
      TweenLite.to(window, durationVal, {scrollTo:{y: getBlockPos(sec8), autoKill:false},ease: Linear.easeNone});
      sec8.classList.add('active');
  }).addTo(ctrl);
  scrollUpFunc(sec7, 5, sec6);

  //sec-8
  scrollDownFunc(sec8, 9, sec9);
  scrollUpFunc(sec8, 6, sec7);

  //sec-9
  scrollDownFunc(sec9, 10, sec10);
  scrollUpFunc(sec9, 7, sec8);

  //sec-10
  scrollDownFunc(sec10, 11, sec11);
  scrollUpFunc(sec10, 8, sec9);

  //sec-11
  scrollUpFunc(sec11, 9, sec10);

});
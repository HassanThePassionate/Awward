
let tl = gsap.timeline()
tl.from('.navbar .logo img, .list-iteams ', {
    y: -100,
    opacity: 0,
    duration :1,
    stagger: 0.7
})
tl.from('.left h1', {
    x: -100,
    opacity: 0,
    duration :0.8,
    stagger: 0.7
})
tl.from('.text-btn .first-line h6, .text-btn .second-line h6, .text-btn .third-line h6', {
    x: -100,
    opacity: 0,
    duration :0.8,
    stagger: 0.7
})
tl.from('.btn ', {
    x: -100,
    opacity: 0,
    duration :0.8,
    stagger: 0.7
})
tl.from('.right ', {
    x: 100,
    opacity: 0,
    duration :0.8,
    stagger: 0.7
})
gsap.from(" .dots-div ",{
  opacity:0,
  duration: 1,
  scrollTrigger : {
      trigger : ".dots-div ",
      scroller : 'body',
      // markers: true,
      start : 'top 60%',
      scrub : 1
  }
})
gsap.from(" .all-text h3 ",{
  y:100,
  opacity:0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger : {
      trigger : ".all-text h3 ",
      scroller : 'body',
      // markers: true,
      start : 'top 170%',
      scrub : 1
      
  }
})
let nav = document.querySelector('.list-iteams');
let menu = document.getElementById('menu');
let cross = document.getElementById('cross');
menu.addEventListener('click', (()=>{
    nav.style.transform =   'translateX(0)';
    cross.style.display = 'block';
    menu.style.display= 'none';
}))

cross.addEventListener('click', (()=>{
    nav.style.transform =   'translateX(100%)';
    menu.style.display = 'block';
    cross.style.display= 'none';
}))
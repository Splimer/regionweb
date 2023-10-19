$(document).ready(function(){

  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  setTimeout(function() {
    $('.global__wrapper').addClass('global__wrapper--active');
  }, 200);


  const tl = gsap.timeline({defaults: { duration: 0.8 }});
  tl.from('.firstline', { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" })
  .from('.secondline', { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" })
  .from('.thirdline', { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" });

  const tlinfo = gsap.timeline({defaults: { duration: 1 }});
  tlinfo.from('.header__right', { opacity: 0, y: 50, ease: "bounce.out" });


  const tlnumber = gsap.timeline({defaults: { duration: 0.8 }});
  tlnumber.from('.g1', { opacity: 0, y: 150, scale: 0 ,ease: "elastic.out(1, 1)" })
  .from('.g2', { opacity: 0, y: 150, scale: 0 ,ease: "elastic.out(1, 1)"  })
  .from('.g3', { opacity: 0, y: 150, scale: 0 ,ease: "elastic.out(1, 1)" });


  const globalContent = gsap.timeline({defaults: { duration: 1 }});
  globalContent.from('.global__content-leftside', { delay: 1 , duration: 1, opacity: 0, y: -200, ease: "elastic.out(1, 0.8)" })
  .from('.global__content-rightside', { opacity: 0, x: -500, ease: "elastic.out(1, 0.8)"  });


// ================================= ANIMATION ==========================================
// ================================= ANIMATION ==========================================
var textWrapper = document.querySelector('.ml1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml1 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1500,
    delay: (el, i) => 50 * (i+1)
  })



var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1500,
    delay: (el, i) => 50 * (i+1)
  })
// ================================= SMOOTHSCROLL ==========================================
// ================================= SMOOTHSCROLL ==========================================
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


// ================================= COUNTER ==========================================
// ================================= COUNTER ==========================================
var changeTextAnimation = gsap.timeline({ defaults: { duration: 2 },  repeat: -1, repeatDelay: 3});
changeTextAnimation.to('.def',{text: "купить электрический камин в екатеринбурге"},)
.to('.def',{ delay: 3 , text: "Заказать цветы в Курске"},)
.to('.def',{ delay: 3 , text: "Купить посуду в Омске"},)
.to('.def',{ delay: 3 , text: "Купить люстру в Новосибирске"},)
.to('.def',{ delay: 3 , text: "Доставка еды в Иркутске"},)
.to('.def',{ delay: 3 , text: "Купить мангал в Казани"},)
.to('.def',{ delay: 3 , text: "Купить цветы в Томске"},)
.to('.def',{ delay: 3 , text: "Купить стол в Воронеже"},)
.to('.def',{ delay: 3 , text: "Заказать торт в Санкт-Петербурге"},)
.to('.def',{ delay: 3 , text: "Купить палатку в Красноярске"},)
.to('.def',{ delay: 3 , text: "купить матрас в Сочи"},)
.to('.def',{ delay: 3 , text: "Купить мебель во Владивостоке"},);


var changeNumbAnimation = gsap.timeline({ defaults: { duration: 2 },  repeat: -1, repeatDelay: 3});
changeNumbAnimation.to('.chnumb',{text: "24931"},)
.to('.chnumb',{ delay: 3 , text: "367"},)
.to('.chnumb',{ delay: 3 , text: "754"},)
.to('.chnumb',{ delay: 3 , text: "1271"},)
.to('.chnumb',{ delay: 3 , text: "7431"},)
.to('.chnumb',{ delay: 3 , text: "393"},)
.to('.chnumb',{ delay: 3 , text: "917"},)
.to('.chnumb',{ delay: 3 , text: "7000"},)
.to('.chnumb',{ delay: 3 , text: "878"},)
.to('.chnumb',{ delay: 3 , text: "842"},)
.to('.chnumb',{ delay: 3 , text: "870"},)
.to('.chnumb',{ delay: 3 , text: "1575"},);
// ================================= TIMER ==========================================
// ================================= TIMER ==========================================
  var moskowUtc = 7;
  var timerId = setInterval(function() {
  let t = new Date(),
    tt = t.getUTCHours() + moskowUtc;
  document.getElementById('tik-tak').innerHTML = (tt > 24 ? "0" : "") + (tt > 24 ? tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes();
  document.getElementById('tik-tak').classList.add("step");
}, 1000);


});
// ================================= SCROLL-TRIGGER ==========================================
// ================================= SCROLL-TRIGGER ==========================================

const tlPlaneOne = gsap.timeline({ defaults: { duration: 10 },  repeat: -1, repeatDelay: 0});
tlPlaneOne.to('.plane-1', { delay: 1 ,duration: 30 ,rotate: 30,x: 2000, y: -580 })
  .to('.plane-1', { duration: 0.01 ,rotate: 240, x: 2000, y: -100 })
  .to('.plane-1', { duration: 35 ,rotate: 220, x: -120, y: -300 });


const tlPlaneTwo = gsap.timeline({ defaults: { duration: 10 },  repeat: -1, repeatDelay: 0});
tlPlaneTwo.to('.plane-2', { delay: 2 ,duration: 30 ,rotate: -140,x: -2100, y: -90 })
  .to('.plane-2', { duration: 0.01 ,rotate: 10, x: -2100, y: 800 })
  .to('.plane-2', { delay: 3 , duration: 25 ,rotate: 35, x: 120, y: 200 });


const tlPlaneThree = gsap.timeline({ defaults: { duration: 10 },  repeat: -1, repeatDelay: 2});
tlPlaneThree.to('.plane-3', { delay: 4 ,duration: 30 ,rotate: -120,x: -2100, y: -300 })
  .to('.plane-3', { duration: 0.01 ,rotate: -150, x: 1500, y: -400 })
  .to('.plane-3', { duration: 35 ,rotate: -140, x: -2100, y: -300 })
  .to('.plane-3', { duration: 0.01 ,rotate: -300, x: -2100, y: -550 })
  .to('.plane-3', { duration: 30 ,rotate: -310, x: 100, y: -300 });

//  planeAnimation - second

const tlPlaneFour = gsap.timeline({ defaults: { duration: 10 },  repeat: -1, repeatDelay: 0});
tlPlaneFour.to('.plane-4', { delay: 1 ,duration: 35 ,rotate: 30,x: 700, y: -280 })
  .to('.plane-4', { duration: 0.01 ,rotate: 240, x: 700, y: 0 })
  .to('.plane-4', { duration: 35 ,rotate: 220, x: -100, y: -180 })
  .to('.plane-4', { duration: 0.01 ,rotate: -280, x: -100, y: -380 })
  .to('.plane-4', { duration: 35 ,rotate: -300, x: 700, y: -120 });


const tlPlaneFive = gsap.timeline({ defaults: { duration: 10 },  repeat: -1, repeatDelay: 0});
tlPlaneFive.to('.plane-5', { delay: 2 ,duration: 32 ,rotate: -140,x: -800, y: -90 })
  .to('.plane-5', { duration: 0.01 ,rotate: 70, x: -800, y: -90 })
  .to('.plane-5', { delay: 1 , duration: 35 ,rotate: 75, x: 120, y: 200 });


const tlPlaneSix = gsap.timeline({ defaults: { duration: 10 },  repeat: -1, repeatDelay: 2});
tlPlaneSix.to('.plane-6', { delay: 3.5 ,duration: 30 ,rotate: -100,x: -800, y: -300 })
  .to('.plane-6', { duration: 0.01 ,rotate: -150, x: 500, y: -400 })
  .to('.plane-6', { duration: 35 ,rotate: -140, x: -800, y: -300 })
  .to('.plane-6', { duration: 0.01 ,rotate: -290, x: -800, y: -550 })
  .to('.plane-6', { duration: 35 ,rotate: -280, x: 500, y: -100 });


// other

let reviewTitle = gsap.timeline({
  defaults: {duration: 0.5},
  scrollTrigger:'.review__title',
  start: 'top center',
  end: 'bottom center',
  scrub: true,
});
reviewTitle.from(".review__title-one", { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" })
  .from(".review__title-two", { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" })
  .from(".review__title-three", { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" });


let reviewContent = gsap.timeline({
  defaults: {duration: 2},
  scrollTrigger:'.review__content',
  start: 'top center',
});
reviewContent.from(".review__wrapper-title", { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" });

let reviewContentSecond = gsap.timeline({
  defaults: {duration: 1},
  scrollTrigger:'.review__content',
  start: 'top center',
});
reviewContentSecond.from(".review__wrapper-img--cont", { duration: 1 , opacity: 0, y: 500 , ease: "elastic.out(1, 0.8)" })
reviewContentSecond.from(".review__wrapper-item", { duration: 0.5 , opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" });

let reviewContentThird = gsap.timeline({
  defaults: {duration: 2},
  scrollTrigger:'.review__content',
  start: 'top center',
});
reviewContentThird.from(".review__block-r", { duration: 1 , opacity: 0, x: 500 , ease: "elastic.out(1, 0.8)" });


let reviewEmblem = gsap.timeline({
  defaults: {duration: 0.5},
  scrollTrigger:'.review__profile',
  start: 'top center',
});
reviewEmblem.to('.review__profile-img', {  y: -30 })
.to('.review__profile-img', { y: 0, ease: "bounce.out" });


let reviwImg = gsap.timeline({
  defaults: {duration: 2 },
  repeat: -1,
  repeatDelay: 2,
});
reviwImg.from('.review__wrapper-img--cont', {  rotation:360 })


let historyNumber = gsap.timeline({
  defaults: {duration: 0.5},
  scrollTrigger:'.history',
  start: 'top center',
});
historyNumber.to(".hist__row-1",{ text: "лет"},)
historyNumber.to(".hist__row-2",{ text: "разрабатываю"},)
historyNumber.to(".hist__row-3",{ text: "и продвигаю сайты"},);


let historyContent = gsap.timeline({
  defaults: {duration: 0.5},
  scrollTrigger:'.history__title-block',
  start: 'top center',
});
historyContent.from(".history__title-block", { opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" })
historyContent.from(".history__block--one", { duration: 0.5 , opacity: 0, x: -500 , ease: "elastic.out(1, 0.8)" })
historyContent.from(".history__block-titlecontent", { duration: 0.5 , opacity: 0, y: -500 , ease: "elastic.out(1, 0.8)" })
historyContent.from(".content-1", { duration: 0.5 , opacity: 0, y: -500 , ease: "elastic.out(1, 0.8)" })
historyContent.from(".content-2", { duration: 0.5 , opacity: 0, y: -500 , ease: "elastic.out(1, 0.8)" });

let historyContentSecond = gsap.timeline({
  defaults: {duration: 0.5},
  scrollTrigger:'.history__block--two',
  start: 'top center',
});
historyContentSecond.from(".history__block--two", { delay: 1.5, opacity: 0, x: 500 , ease: "elastic.out(1, 0.8)" })
historyContentSecond.from(".content-3", { opacity: 0, x: 500 , ease: "elastic.out(1, 0.8)" })
historyContentSecond.from(".content-1-img", { duration: 0.5 , opacity: 0, x: 500 , ease: "elastic.out(1, 0.8)" })
historyContentSecond.from(".content-4", { duration: 0.5 , opacity: 0, y: -500 , ease: "elastic.out(1, 0.8)" })
historyContentSecond.from(".content-5", { duration: 0.5 , opacity: 0, y: -500 , ease: "elastic.out(1, 0.8)" })
historyContentSecond.from(".content-2-img", { duration: 0.5 , opacity: 0, x: 500 , ease: "elastic.out(1, 0.8)" })
historyContentSecond.from(".content-6", { duration: 0.5 , opacity: 0, y: -500 , ease: "elastic.out(1, 0.8)" });


let historyImg = gsap.timeline({
  defaults: {duration: 2 },
  repeat: -1,
  repeatDelay: 2,
});
historyImg.from('.history__block-img--cont', {  rotation:360 })


let orderContentTop = gsap.timeline({
  defaults: {duration: 2},
  scrollTrigger:'.order',
  start: 'top center',
});
let orderContentBottom = gsap.timeline({
  defaults: {duration: 2},
  scrollTrigger:'.order',
  start: 'top center',
});
orderContentTop.from(".order__wrapper-top", { opacity: 0, x: -2000 , ease: "elastic.out(1, 0.8)" });
orderContentBottom.from(".order__bottom", { opacity: 0, y: 500 , ease: "elastic.out(1, 0.8)" });


let orderPreEmblem = gsap.timeline({
  defaults: {duration: 1},
  scrollTrigger:'.order',
  start: 'top center',
});
orderPreEmblem.to('.order__pretop-emblem', {  y: -30 })
.to('.order__pretop-emblem', { y: 0, ease: "bounce.out" });

let orderEmblem = gsap.timeline({
  defaults: {duration: 1},
  scrollTrigger:'.order',
  start: 'top center',
});
orderEmblem.to('.order__top-emblem', {  y: -30 })
.to('.order__top-emblem', { y: 0, ease: "bounce.out" });


let cityContentTop = gsap.timeline({
  defaults: {duration: 2},
  scrollTrigger:'.city',
  start: 'top center',
});
cityContentTop.from(".city__title-box", { opacity: 0, x: -2000 , ease: "elastic.out(1, 0.8)" });


let cityContentBottom = gsap.timeline({
  defaults: {duration: 0.5},
  scrollTrigger:'.city',
  start: 'top center',
});
cityContentBottom.from(".precolumn--one", { opacity: 0, y: 500 , ease: "elastic.out(1, 0.8)" });
cityContentBottom.from(".precolumn--two", { opacity: 0, y: 500 , ease: "elastic.out(1, 0.8)" });
cityContentBottom.from(".precolumn--three", { opacity: 0, y: 500 , ease: "elastic.out(1, 0.8)" });
cityContentBottom.from(".precolumn--four", { opacity: 0, y: 500 , ease: "elastic.out(1, 0.8)" });

let cityContentText = gsap.timeline({
  defaults: {duration: 1.5},
  scrollTrigger:'.city',
  start: 'top center',
});
cityContentText.to(".city__title",{ text: "Где вы находитесь?"},);


let footerContent = gsap.timeline({
  defaults: {duration: 1.5},
  scrollTrigger:'.footer',
  start: 'top center',
});
footerContent.from(".footer", { opacity: 0, y: 100 , ease: "elastic.out(1, 0.8)" });




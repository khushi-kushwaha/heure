gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


Shery.mouseFollower()

Shery.makeMagnet(".nav h2" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

var box = document.querySelector('.box')
var fixedblue = document.querySelector('.blue-fixed')

box.addEventListener('mouseenter',function(){
    fixedblue.style.display ='initial'
    fixedblue.style.transition ='all ease 0.5s'
})
box.addEventListener('mouseleave',function(){
    fixedblue.style.display ='none'
    fixedblue.style.transition ='all ease 0.5s'
})
 
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:'.main',
        start:'top top',
        end:'top -30%',
        // markers:true,
        scrub:'2',
    }
})
tl

.to('.line',{
    height:'0'
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:'.main',
        start:' 50% top',
        // end:'top -30%',
        // markers:true,
        scrub:'0.00',
    }
})
tl2
.to('.page2',{
    backgroundColor:'blue'
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:'.main',
        start:' 100% top',
        end:'top -30%',
        // markers:true,
        scrub:'2',
    }
})
tl3
.to('.rline',{
    height:'250px'
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:'.main',
        start:' top top',
        // end:'top -30%',
        // markers:true,
        pin:true,
        scrub:'4',
    }
})
tl3
.to('.page3 video',{
    scale:'1'
})
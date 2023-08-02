var tl = gsap.timeline()

tl.from(".logo-box img",{
  y:-500,
  duration:1,
})

tl.fromTo(".nav-bar .nav-actions p",{
     y:-500,
},{
      y:0,
      stagger:0.2
})

tl.from(".center-box img",{
  opacity:0,
   y:-300
})

tl.from(".center-box a",{
  opacity:0,
   x:-300
})

tl.from(".center-box .text-box h6",{
  opacity:0,
   y:300,
   stagger:0.5
})

tl.from(".right-box img, .overlay",{
  opacity:0,
})

tl.from(".content-box #students",{
      x:300,
      opacity:0
})


tl.fromTo(".admissions-box h1",
    {
      x: 0, // Start position
    },
    {
      x: 2000, // End position (negative value to move left)
      duration: 4, // Duration of the animation in seconds
      repeat: -1, // Infinite repetition
      ease: "none", // Linear ease
    },
  )

  
tl.fromTo(".fall-box h1",
{
  x: 0, // Start position
},
{
  x: -2000, // End position (negative value to move left)
  duration: 4, // Duration of the animation in seconds
  repeat: -1, // Infinite repetition
  ease: "none", // Linear ease
}
)

gsap.from(".page2 h1",{
  y:-150,
  opacity:0,
  scrollTrigger:{
    trigger:".page2 h1",
    scroller:"body",
    // markers:true,
    start:" top 10%",
    scrub:2
  }
})




gsap.from(".page2 .content-box",{
  y:200,
  opacity:0,
  scrollTrigger:{
    trigger:".page2 h1",
    scroller:"body",
    // markers:true,
    start:" top 10%",
    scrub:2
  }
})
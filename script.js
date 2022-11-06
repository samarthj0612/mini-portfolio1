var tl = gsap.timeline();

tl.to("#coverup", {
  top: "-120%",
  duration: 3,
})
  .from("#main1 #nav", {
    delay: 0.5,
    duration: 2,
    opacity: 0,
    y: -30,
  })
  .from("#main1 #content h1", {
    x: 200,
    duration: 3,
    opacity: 0,
  });
gsap.from("#main3 #content div svg", {
  scrollTrigger: {
    trigger: "#main3",
    start: "top 60%",
    end: "60% 70%",
    scrub: 2,
  },
  x: -500,
});
gsap.from("#main3 #content div p", {
  scrollTrigger: {
    trigger: "#main3",
    start: "20% 30%",
  },
  opacity: 0,
  duration: 2,
});

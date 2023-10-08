document.addEventListener("DOMContentLoaded", function () {
  // const gsap = gsap.timeline({ repeat: -1 });

  gsap.to(".img-container", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 3,
    stagger: 5,
    repeat: -1,
    opacity: 1,
    height: "100%",
  });

  gsap.to(".text-container", {
    ease: Expo.easeInOut,
    bottom: "15%",
    duration: 3,
    stagger: 5,
    opacity: 1,
    repeat: -1,
  });

  gsap.to(".text-container", {
    ease: Expo.easeInOut,
    // bottom: "-100%",
    duration: 2.8,
    opacity: 0,
    stagger: 5,
    delay: 5,
    repeat: -1,
  });

  gsap.to(".icon", {
    ease: Expo.easeInOut,
    y: 0,
    opacity: 1,
    duration: 1.9,
    stagger: 0.1,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let tl = new TimelineMax();

  tl.fromTo(
    ".bg-loader",
    1,
    { width: "100%" },
    { width: "0%", delay: 5, ease: Expo.easeInOut }
  );

  tl.fromTo(
    ".bg-video",
    2,
    { width: "0%", opacity: 0 },
    { width: "100%", opacity: 1, ease: Expo.easeInOut },
    "-=1"
  );

  tl.fromTo(
    ".nav-logo",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    "-=0.5"
  );

  tl.fromTo(
    ".nav-list",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    "-=0.5"
  );

  tl.fromTo(
    ".nav-social",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    "-=0.5"
  );

  tl.fromTo(
    ".about",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    "-=0.5"
  );

  tl.fromTo(
    ".buttons",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    "-=0.5"
  );

  tl.fromTo(
    ".hollowimg",
    0.7,
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, ease: Expo.easeInOut },
    "-=0.5"
  );

  tl.fromTo(
    ".stores",
    0.7,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut },
    "-=0.5"
  );
});

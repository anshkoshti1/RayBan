Shery.imageEffect("#back", {
  style: 6,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.97, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.088913282107574 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.15, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.14, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.01, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

// Shery.mouseFollower({
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

// Shery.imageMasker("#main" /* Element to target.*/, {
//     //Parameters are optional.
//     mouseFollower: true,
//     text: "Shery",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

// Shery.makeMagnet("#back" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

Shery.textAnimate("a" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

//   Shery.hoverWithMediaCircle("#back" /* Element to target.*/, {
//     images: ["IMG_7564.JPG", "IMG_7567.JPG", "IMG_7566.JPG"] /*OR*/,
//     //videos: ["video1.mp4", "video2.mp4"],
//   });  

// Shery.imageEffect(".img", {
//     style: 2, //Select Style
//     debug: true, // Debug Panel
//     config: {
//       /* Config made from debug panel */
//     },
//     preset: "./presets/wigglewobble.json",
//   });

var elems = document.querySelectorAll('.elem');

elems.forEach(function(elem){
    var h1s = elem.querySelectorAll('h1');
    var index = 0;
    var animating = false;
    
    document.querySelector("#main").addEventListener('click', function(){
        if(!animating){
            animating = true;
            gsap.to(h1s[index],{
                top: "-=175",
                ease: "Expo.easeInOut",
                duration: 0.65,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"})
                    animating = false;
                }
            })
            
            index === h1s.length-1 ? (index = 0) : index++;
        
            gsap.to(h1s[index],{
                top: "-=175",
                ease: "Expo.easeInOut",
                duration: 0.65
            })
        }
    })
})

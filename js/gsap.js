init = new TimelineMax();
init.addLabel('init')
    .from('.home-container', 2, {filter: 'blur(12px)'}, 'init')
    .from('.home-capture h1', 1.4, {y: 200, ease: 'back.out(1)'}, 'init')
    .from('.home-capture h3', 2, {x: '-100', opacity: 0, ease: 'back.out(1)'}, 'init+=.5')
    .from('.home-capture span', 1.4, {x: "-50", opacity: 0, ease: 'back.out(1)'}, 'init+=.5')
    .from('.header', 2, {y: "30", opacity: 0}, 'init+=.5')
    .from('.reserve-bannar', 2, {x: "100"}, 'init+=.5')
    .from('.menu', 3, {opacity: 0}, 'init+=.5')

// about = new TimelineMax();
// about.addLabel('about')
//     .to('.page-head h2', 1, {y: 0, ease: Expo.easeOut})
//     .to('.page-head h2', 1, {y: '-100%'})
//     .staggerFrom('.page-overlay span', 1, {width: '100%'}, 0.2)
//     .from('.about-container', 1, {filter: 'blur(12px)'})
//     .from('.header', 2, {y: "30", opacity: 1})
//     .from('.menu', 3, {opacity: 1})
//     .from('.about-message', 1 , {opacity: '0', y: '-50px'}, 'about+=4')
//     .from('.about-message p', 1 , {opacity: '0', y: '50px'})



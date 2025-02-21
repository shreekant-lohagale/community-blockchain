gsap.set(".slides-1",{
    scale:5
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom top",
        pin:true,
        scrub:3
    }
})

tl.to(".vdodiv",{
    "--clip":"0%",
    ease: Power2
},'a')

tl.to(".slides-1",{
    scale:1,
    ease: Power2
},'a')

tl.to(".rgt",{
    xPercent:10,
    stagger:.03,
    ease: Power4
},'b')

tl.to(".lft",{
    xPercent:-10,
    stagger:.03,
    ease: Power4
},'b')

document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded')
    $(".welcome-text1")
    .hide()
    .velocity("fadeIn", {delay: 700, duration: 1000})

    $(".welcome-text2")
    .hide()
    .velocity("fadeIn", {delay: 2000, duration: 1000})

    $(".welcome-text3")
    .hide()
    .velocity("fadeIn", {delay: 3900, duration: 1000})

    $(".welcome-text4")
    .hide()
    .velocity("fadeIn", {delay: 5400, duration: 1000})

    $(".welcome-text5")
    .hide()
    .velocity("fadeIn", {delay: 7200, duration: 1000})

    $(".welcome-text6")
    .hide()
    .velocity("fadeIn", {delay: 10000, duration: 1000})

    $(".navlink").on("click", function(e) {
        let target = $(this).attr("href")
        $(target)
        .velocity("scroll", scrollSettings)
    })
})

var scrollSettings = {
    duration: 500, 
    easing: "swing"
}
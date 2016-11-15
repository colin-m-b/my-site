
//implement selector caching for better performance

function Selector_Cache() {
    const collection = {}

    function get_elem(selector) {
        if (!collection[selector]) {
            collection[selector] = $(selector)
        }
        return collection[selector]
    }
    return {get: get_elem}
}

let selectors = new Selector_Cache

document.addEventListener("DOMContentLoaded", function() {
    console.log($("#welcome-text1"))
    $("#welcome-text1")
    .hide()
    .velocity("fadeIn", {delay: 100, duration: 1000})

    selectors.get("#welcome-text2")
    .hide()
    .velocity("fadeIn", {delay: 800, duration: 1000})

    selectors.get("#welcome-text3")
    .hide()
    .velocity("fadeIn", {delay: 3000, duration: 1000})

    selectors.get("#welcome-text4")
    .hide()
    .velocity("fadeIn", {delay: 6000, duration: 1000})

    selectors.get("#welcome-text5")
    .hide()
    .velocity("fadeIn", {delay: 7700, duration: 1000})

    selectors.get("#welcome-text6")
    .hide()
    .velocity("fadeIn", {delay: 10000, duration: 1000})

    selectors.get(".navlink").on("click", function(e) {
        let target = $(this).attr("href")
        $(target)
        .velocity("scroll", scrollSettings)
    })

    $window.on("scroll resize", check_if_in_view)

    $window.trigger("scroll")
})

const scrollSettings = {
    duration: 500, 
    easing: "swing"
}

const check_if_in_view = function() {
    let window_height = $window.height()
    let window_top = $window.scrollTop()
    let window_bottom = window_height + window_top

    console.log("height: " + window_height + " top: " + window_top + " bottom: " + window_bottom)

    $.each($sliders, function() {
        let $elem = $(this)
        let elem_height = $elem.outerHeight()
        let elem_top = $elem.offset().top
        let elem_bottom = elem_height + elem_top

        if( (elem_top >= window_top) && (elem_bottom <= window_bottom) ) {
            $elem.addClass("in-view")
        } else {
            $elem.removeClass("in-view")
        }
    })
}
const $window = $(window)
const $sliders = $(".slider")
const $leftSliders = $(".slide-left")
const $rightSliders = $(".slide-right")

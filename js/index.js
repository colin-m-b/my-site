
//implement jQuery selector caching for better performance

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



$(document).ready(function() {
    let selectors = new Selector_Cache
    console.log($window.width(), width)

    selectors.get(".welcome-head")
    .velocity("fadeIn", {delay: 500, duration: 2000})

    selectors.get(".welcome-text")
    .velocity("fadeIn", {delay: 1500, duration: 2000})


    selectors.get(".navlink").on("click", function(e) {
        let target = $(this).attr("href")
        $(target)
        .velocity("scroll", scrollSettings)
    })

    $window.on("scroll resize", check_if_in_view)

    $window.trigger("scroll")
})

const scrollSettings = {
    duration: 1000, 
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
            $elem.removeAttr("style").addClass("in-view")
        } else {
            $elem.removeClass("in-view")
        }
    })
}
const $window = $(window)
let width = $window.width()
const $sliders = $(".slider")
const $leftSliders = $(".slide-left")
const $rightSliders = $(".slide-right")

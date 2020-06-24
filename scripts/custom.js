
/************************************
 *                                  *
 * done by Aslan Shemilov           *
 * aslanshemilov@gmail.com          *
 * Computer Programmer Analyst      *
 *                                  *
 * **********************************
 */

 //for IE console errors
if (!(window.console && console.log)) {
    console = {
        log: function() {},
        debug: function() {},
        info: function() {},
        warn: function() {},
        error: function() {}
    };
}

//load on window load
window.onload = function() {
    console.log("window loaded!");

    // Execute on load
    checkWidth();
};

jQuery(function(){

});

window.onresize = function(event) {
    // Execute on resize
    checkWidth();
};

function checkWidth() {
    //Returns width, height of browser viewport
    var browserWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var browserHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    console.log(
        "Browser inner window width: " +
            browserWidth +
            ", height: " +
            browserHeight +
            "."
    );

    if (browserWidth < 550) {

    } else if (browserWidth < 900) {

    } else {

    }
}

function getPageWidth() {
    return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
}



























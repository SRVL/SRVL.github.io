(function($) {
var scanlines = $('.scanlines');
var term = $('#term').terminal(function(command, term) {
    if (command !== '') {
        try {
            var result = window.eval(command);
            if (result !== undefined) {
                term.echo(new String(result));
            }
        } catch(e) {
            term.error(new String(e));
        }
    } else {
        term.echo('');
    }
}, {
    name: 'js_demo',
    onResize: set_time,
    onInit: set_time,
    prompt: 'js> '
});

function set_time() {
    // for window heihgt of 170 it should be 2s
    var time = ($(window).height() * 2) / 170;
    scanlines[0].style.setProperty("--time", time);
}
})(jQuery.noConflict(true));

function inject_jquery() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
    document.querySelector('head').appendChild(script);
}

console.log("Twitter widgets script loading...");
/*
// Espera hasta que carga el script del widget de Twitter 
window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));
*/

// Crea la línea de tiempo cuando el script está listo
twttr.ready(function (twttr) {
    //console.log("Twitter widgets script loaded, creating timeline...");
    twttr.widgets.createTimeline(
        {
            sourceType: "profile",
            screenName: "unidadbasicadj",
            theme: "light",
            height: 600
        },
        document.getElementById("x-container")
    ).then(function (el) {
        console.log("Línea de tiempo creada exitosamente:", el);
    }).catch(function (error) {
        console.error("Erroe al crear línea de tiempo:", error);
    });
});

twttr.widgets.load();
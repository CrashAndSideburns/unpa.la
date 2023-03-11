setInterval(function() {
    var ijo = document.getElementById("sitelen");
    ijo.src = (ijo.src.match("open.svg") ? "pini.svg" : "open.svg");
}, 1000);

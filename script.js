setInterval(function() {
    var element = document.getElementById("sitelen");
    element.src = (element.src.match("pre-bonk.svg") ? "post-bonk.svg" : "pre-bonk.svg");
}, 1000);

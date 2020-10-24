var css = document.getElementById("color");
    var body = document.getElementById("body");
    var color3 = document.querySelector(".color1");
    var color4 = document.querySelector(".color2");
    function convert() {
        var red1 = Math.floor(Math.random() * 256);
        var green1 = Math.floor(Math.random() * 256);
        var blue1 = Math.floor(Math.random() * 256);
        var red2 = Math.floor(Math.random() * 256);
        var green2 = Math.floor(Math.random() * 256);
        var blue2 = Math.floor(Math.random() * 256);
        var fcolor = "rgb(" + red1 + "," + green1 + "," + blue1 + ")";
        var scolor ="rgb(" + red2 + "," + green2 + "," + blue2 + ")";
        body.style.background = "linear-gradient(to right," + fcolor+ "," + scolor + ")";
        css.textContent = body.style.background + ";"
    }
    function change()
    {
        body.style.background = "linear-gradient(to right,"+color3.value +","+color4.value+")";
        css.textContent = body.style.background + ";"
    }
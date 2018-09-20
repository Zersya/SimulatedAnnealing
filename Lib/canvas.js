var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var font = '40px Arial';

class Canvas{
    constructor(){

    }

    WriteCanvasText(text, x, y){
        ctx.font = font;
        ctx.strokeText(text, x, y);
    }

}



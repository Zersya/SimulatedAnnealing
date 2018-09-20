
var canvas = new Canvas();
var SA = new SimulatedAnnealing();

function main(){
    canvas.WriteCanvasText('Initial State : '+SA.getInitialState(), 100, 100);
    canvas.WriteCanvasText('------------------------------------------------', 100, 150);
    canvas.WriteCanvasText('Final State : '+SA.simulatedAnnealing(), 100, 200);
}


window.onload = main();



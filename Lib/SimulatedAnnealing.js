

var tempAwal     = 1000;
var tempAkhir    = 0.0001;
var rate         = 0.99;

//Start value
// var x1 = 3.0;  
// var x2 = 4.0;

var chance = new Chance(Math.random); //lib random

var min = -10;
var max = 10;

var x1 = chance.floating({ min: min, max: max });    //Best So Far
var x2 = chance.floating({ min: min, max: max });    //Best So Far

var newState;
var currentState;
var bestSoFar;

class SimulatedAnnealing{
    constructor(){
        this.simulatedAnnealing_X();
    }

    simulatedAnnealing_X(){
        bestSoFar = currentState = this.functionX(x1, x2);

        console.log('Initial CurrentState');
        console.log('CurrentState : ('+currentState+')');
        console.log('------------------------------------');
        while(tempAwal > tempAkhir){
        
            var _x1 = chance.floating({ min: min, max: max });
            var _x2 = chance.floating({ min: min, max: max });
            newState = this.functionX(_x1, _x2);
            console.log(newState);
            
            if(newState < currentState){
                x1 = _x1;
                x2 = _x2;
                bestSoFar = newState;
                currentState = newState;
            }else{
                var deltaE_x = currentState - newState;
                var prob = this.probabilities(deltaE_x, tempAwal);
                
                if(prob > chance.floating({ min : 0, max: 1 })){
                    currentState = newState;
                }
            }    

            tempAwal *= rate;
        }
        // console.log('------------------------------------');
        console.log('X Best so Far : ('+x1+' , '+x2+')');
        console.log('------------------------------------');
        console.log('Final State : (' + bestSoFar +')');    
    }

    probabilities(deltaE, tempAwal){
        return Math.exp((-deltaE)/tempAwal);
    }

    functionX(x1, x2){
        return -Math.abs(Math.sin(x1) * Math.cos(x2) * Math.exp(
            Math.abs(1 - Math.sqrt(Math.pow(x1, 2) + Math.pow(x2, 2)) / Math.PI)));
    }
}





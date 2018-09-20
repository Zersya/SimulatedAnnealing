

var tempAwal     = 100;
var tempAkhir    = 0.0001;
var rate         = 0.9999;

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
        currentState = this.functionX(x1, x2);
        bestSoFar = currentState;
        // this.simulatedAnnealing();
    }

    simulatedAnnealing(){
        console.log('Initial CurrentState');
        console.log('X Best so Far : ('+x1+' , '+x2+')');
        console.log('Best so Far : ('+bestSoFar+')');
        console.log('------------------------------------');
        while(tempAwal > tempAkhir){
        
            var _x1 = chance.floating({ min: min, max: max });
            var _x2 = chance.floating({ min: min, max: max });
            newState = this.functionX(_x1, _x2);
            var deltaE = newState - currentState;
            
            if(deltaE < 0){
                x1 = _x1;
                x2 = _x2;
                bestSoFar = newState;
                currentState = newState;
            }else if(deltaE >= 0){
                var prob = this.probabilities(deltaE, tempAwal);
                if(chance.floating({ min : 0, max: 1 }) < prob){
                    bestSoFar = newState;
                    currentState = newState;
                }
            }    

            // console.log('Process BSF : (' + bestSoFar +')');    
            
            tempAwal *= rate;
        }
        console.log('------------------------------------');
        console.log('X Best so Far : ('+x1+' , '+x2+')');
        console.log('Final State : (' + bestSoFar +')');    

        return bestSoFar;
    }

    getInitialState(){
        return currentState;
    }

    probabilities(deltaE, tempAwal){
        return Math.exp(-deltaE/tempAwal);
    }

    functionX(x1, x2){
        return -Math.abs(Math.sin(x1) * Math.cos(x2) * Math.exp(
            Math.abs(1 - Math.sqrt(Math.pow(x1, 2) + Math.pow(x2, 2)) / Math.PI)));
    }
}







var tempAwal     = 10000000;
var tempAkhir    = 0.0001;
var rate         = 0.999;

var chance = new Chance(Math.random); //lib random

var min = -10;
var max = 10;

var x1 = chance.floating({ min: min, max: max });    //Best So Far
var x2 = chance.floating({ min: min, max: max });    //Best So Far

class SimulatedAnnealing{
    constructor(){
        this.simulatedAnnealing();
    }
        
    simulatedAnnealing(){
        console.log('Inisial X1,X2');
        console.log('Best so Far : ('+x1+' , '+x2+')');
        console.log('------------------------------------');
        while(tempAwal > tempAkhir){
        
            var _x1 = chance.floating({ min: min, max: max });
            var _x2 = chance.floating({ min: min, max: max });
        
            var deltaE_x1 = x1 - _x1;
            var deltaE_x2 = x2 - _x2;
        
            if(_x1 < x1){
                x1 = _x1;
            }else{
                var prob = this.probabilities(deltaE_x1, tempAwal);
                
                if(prob < chance.floating({ min : 0, max: 1 })){
                    x1 = _x1;
                }
            }

            if(_x2 < x2){
                x2 = _x2;
            }else{
                var prob = this.probabilities(deltaE_x2, tempAwal);
                
                if(prob < chance.floating({ min : 0, max: 1 })){
                    x2 = _x2;
                }
            }
        
            console.log('Checking Best so Far : ('+x1+' , '+x2+')');
        
            tempAwal *= rate;
        }
        console.log('------------------------------------');
        console.log('Final State');
        console.log('Best so Far : ('+x1+' , '+x2+')');
        console.log('------------------------------------');
        console.log('Fungsi akhir : ' + this.functionX(x1, x2));    
    }

    probabilities(deltaE, tempAwal){
        return Math.exp(-deltaE) / tempAwal;
    }

    functionX(x1, x2){
        return -Math.abs(Math.sin(x1) * Math.cos(x2) * Math.exp(
            Math.abs(1 - Math.sqrt(Math.pow(x1, 2) + Math.pow(x2, 2)) / Math.PI)));
    }
}





class FizzBuzz{
    calcularFizzBuzz(i){
        if(i%5==0 && i%3==0){
            return 'FizzBuzz';
        }else if(i%5==0){
            return 'Buzz';
        }else if(i%3==0){
           return 'Fizz'; 
        }else if(i%5!=0 && i%3!=0){
            return i;
        }
    }
}

let calculador = new FizzBuzz();
for(x=1; x<=15; x++){
    let numero = calculador.calcularFizzBuzz(x);
    console.log(numero);
}

module.exports = FizzBuzz;
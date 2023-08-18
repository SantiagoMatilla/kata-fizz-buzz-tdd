
const FizzBuzz = require ("./fizzBuzz");

describe("Toma numeros naturales del 1 al 100 y devuelve FizzBuzz si es múltiplo de 3 y de 5", ()=>{
    test("Si 6 es múltiplo de 3 devuelve Fizz", ()=>{
        //setup
        const calculador = new FizzBuzz();
        let number1 = 6;
        let expected = "Fizz";

        //act
        let result = calculador.calcularFizzBuzz(number1);

        //comparar
        expect(result).toBe(expected);

    })
    test('Si 10 es multiplo de 5 devuelve Buzz',()=>{
        //setup
        const calculador = new FizzBuzz();
        let number1 = 10;
        let expected = "Buzz";

        //act
        let result = calculador.calcularFizzBuzz(number1);

        //comparar
        expect(result).toBe(expected);
    })
    test('Si 15 es multiplo de 5 y 3 a la vez devuelve FizzBuzz',()=>{
        //setup
        const calculador = new FizzBuzz();
        let number1 = 15;
        let expected = "FizzBuzz";

        //act
        let result = calculador.calcularFizzBuzz(number1);

        //comparar
        expect(result).toBe(expected);
    })
    test('Si 7 no es multiplo de 5 ni de 3 devuelve 7',()=>{
        //setup
        const calculador = new FizzBuzz();
        let number1 = 7;
        let expected = 7;

        //act
        let result = calculador.calcularFizzBuzz(number1);

        //comparar
        expect(result).toBe(expected);
    })
})
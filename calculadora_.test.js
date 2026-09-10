const expectCookies = require("supertest/lib/cookies")
const {
    soma,
    subtrai,
    multiplica,
    divide,
    ehPar,
    raiz,
    media,
} = require("./calculadora")

describe('soma', () => {
    test('Soma dois números positivos', () => {
        expect(soma(1, 3)).toBe(4);
    });
    test('Soma dois números negativos', () => {
        expect(soma(-5, -7)).toBe(-12);
    });
});

describe('raiz', () => {
    test('Raiz de um número não exato com precisão', () => {
        expect(raiz(2)).toBeCloseTo(1.414);
    });
    test('Lança um erro para um número negativo', () => {
        expect(()=> raiz(-4)).toThrow('Nao e possivel calcular raiz de numero negativo')
    });
});

describe('subtrai', () => {
    test('Subtrai dois números positivos', () => {
        expect(subtrai(10, 5)).toBe(5);
    });
    test('Subtrai dois números negativos', () => {
        expect(subtrai(-1, 6)).toBe(-7);
    });
});

describe('multiplica', () => {
    test('Multiplica dois números', () => {
        expect(multiplica(10, 5)).toBe(50);
    });
    test('Multiplica dois números', () => {
        expect(multiplica(10, 0)).toBe(0);
    });
    test('Multiplica dois números', () => {
        expect(multiplica(10, 10)).toBeGreaterThan(10);
    });
});

describe('divide', () => {
    test('Divide um número por outro', () => {
        expect(divide(100, 2)).toBe(50);
    });
    test('Divide um número por outro', () => {
        expect(()=>divide(100, 0)).toThrow('Nao e possivel dividir por zero');
    });
});

describe('ehPar', () => {
    test('Retorna se um número é par ou não', () => {
        expect(ehPar(10)).toBe(true);
    });
    test('Retorna se um número é par ou não', () => {
        expect(ehPar(7)).toBe(false);
    });
});

describe('media', () => {
    test('Retorna a média de uma lista de números inteiros', () => {
        expect(media([5, 5, 5])).toBe(5);
    });
    test('Retorna a média de uma lista de números decimais', () => {
        expect(media([2, 4, 5])).toBeCloseTo(3.6);
    });
    test('Retorna um erro se a lista estiver vazia', () => {
        expect(media([])).toThrow('A lista de numeros nao pode ser vazia');
    });
    test('Retorna um erro se o argumento não for um array', () => {
        expect(media(6, 6)).toThrow('A lista de numeros nao pode ser vazia');
    });
});
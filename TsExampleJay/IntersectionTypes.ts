// 1st Programm

interface D { k: boolean; }
interface E { e: string; }
interface F { f: number; }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
    x: {
        k  : true,
        e: 'Jay Amin',
        f: 1
    }
};

console.log('abc:', abc);



// 2nd Programm




// function extend<First, Second>(first: First, second: Second): First & Second {
//     const result: Partial<First & Second> = {};
//     for (const prop in first) {
//         if (first.hasOwnProperty(prop)) {
//             (result as First)[prop] = first[prop];
//         }
//     }
//     for (const prop in second) {
//         if (second.hasOwnProperty(prop)) {
//             (result as Second)[prop] = second[prop];
//         }
//     }
//     return result as First & Second;
// }

// class Person {
//     constructor(public name: string) { }
// }

// interface Loggable {
//     log(name: string): void;
// }

// class ConsoleLogger implements Loggable {
//     log(name) {
//         console.log(`Hello, I'm ${name}.`);
//     }
// }

// const JayCall = extend(new Person('Jay'), ConsoleLogger.prototype);
// JayCall.log(JayCall.name);






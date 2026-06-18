//% color="#AA278D" icon="\uf1b3"
namespace MorseCode {
    /**
     * Say hello on the microbit screen
     */
    //% block="say hello"
    export function sayHello(): void {
        basic.showString("Hello!")
    }

    /**
     * Add two numbers
     */
    //% block="add $a and $b"
    export function add(a: number, b: number): number {
        return a + b
    }
}
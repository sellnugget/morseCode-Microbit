//% color="#AA278D" icon="\uf1b3"


enum Signal{
        Dot,
        Dash,
        End_Letter,
        Space
}


namespace MorseCode {



    /**
     * Say hello on the microbit screen
     */
    //% block="say hello"
    export function send(signal: Signal): void {
        if(signal == Signal.Dot){
            basic.showString(".")
        }
        else if(signal == Signal.Dash){
            basic.showString("-")
        }
        else if(signal == Signal.End_Letter){
            basic.showString(" ")
        }
        else if(signal == Signal.Space){
            basic.showString("word")
        }
    }

    /**
     * Add two numbers
     */
    //% block="add $a and $b"
    export function add(a: number, b: number): number {
        return a + b
    }
}
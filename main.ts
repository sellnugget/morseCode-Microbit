//% color="#AA278D" icon="\uf1b3"


enum Signal{
        //% block="•"
        Dot,
        //% block="—"
        Dash,
}


namespace MorseCode {


    //% block="—"
    export function Dash()
    {
        basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        basic.clearScreen()
    }
    //% block="•"
    export function Dot()
    {
        basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Whole))
        basic.clearScreen()
    }
    //% block="End Letter"
    export function EndLetter()
    {
        while(!input.buttonIsPressed(Button.B)){
            
        }
    }
    //% block="Space"
    export function Space()
    {
        basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.clearScreen()
    }
}
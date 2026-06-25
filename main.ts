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
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
    }
    //% block="•"
    export function Dot()
    {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Whole))
    }
    //% block="End Letter"
    export function EndLetter()
    {
        while(!input.buttonIsPressed(Button.A)){

        }
    }
    //% block="Space"
    export function Space()
    {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
}
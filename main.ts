input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Meh)
        music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Meh)
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Heart)
    }
})

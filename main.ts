input.onSound(DetectedSound.Loud, function () {
    claps += 1
    music.playTone(1000, music.beat(BeatFraction.Whole))
})
let claps = 0
basic.forever(function () {
    basic.showNumber(claps)
})

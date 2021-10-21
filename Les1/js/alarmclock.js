const sfx = {
    ending: new Howl({
        src: [
            './media/zvuk.mp3'
        ]
    })
}

export function ending(timerName) {
    clearInterval(timerName)
    sfx.ending.play()
}
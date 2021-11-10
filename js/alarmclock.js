import { Howl, Howler } from 'howler'
import pathToMp3 from '../media/zvuk.mp3'

Howler.volume(0.2)

const sfx = {
    ending: new Howl({
        src: [
            pathToMp3
        ]
    })
}

export function ending(timerName) {
    clearInterval(timerName)
    sfx.ending.play()
}
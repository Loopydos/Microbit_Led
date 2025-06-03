let LEDUP = 0
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (input.soundLevel() > 140) {
        if (LEDUP == 1) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(500)
            LEDUP = 0
        }
    }
})
basic.forever(function () {
    if (LEDUP == 0) {
        if (input.soundLevel() > 140) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(500)
            LEDUP = 1
        }
    }
})

radio.onReceivedNumberDeprecated(function (receivedNumber) {
    let action2 = 0
    if (action2 == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (action2 == 2) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (action2 == 3) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (action2 == 4) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (action2 == 5) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -10) {
        radio.sendValue("action", 1)
    } else if (input.rotation(Rotation.Pitch) > 10) {
        radio.sendValue("action", 2)
    } else if (input.rotation(Rotation.Roll) > 10) {
        radio.sendValue("action", 3)
    } else if (input.rotation(Rotation.Roll) < -10) {
        radio.sendValue("action", 4)
    } else if (input.rotation(Rotation.Pitch) > -10 && input.rotation(Rotation.Pitch) < 10) {
        radio.sendValue("action", 5)
    }
})

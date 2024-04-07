let num = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        num = randint(0, 6)
        if (num == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (num == 2) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . . # #
                . . . # #
                `)
        } else if (num == 3) {
            basic.showLeds(`
                . . . # #
                . . . . #
                . . # . .
                # . . . .
                # # . . .
                `)
        } else if (num == 4) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # # . # #
                # # . # #
                `)
        } else if (num == 5) {
            basic.showLeds(`
                # # . # #
                # # # # #
                . # # # .
                # # # # #
                # # . # #
                `)
        } else if (num == 6) {
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . # . #
                # # # # #
                `)
            control.waitMicros(1694)
        }
    }
})
